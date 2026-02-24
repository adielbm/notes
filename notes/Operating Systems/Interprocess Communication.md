

- **interprocess communication** (**IPC**) 
	- "Communication between processes" [@Galvin, 2018]

mechanisms for processes to communicate and synchronize.

* issues: (by [@Tanenbaum, 2022])
	- data sharing: how one process passes data to another
		* pipe
		* software interrupt, 
			* signal (`SIG`)
				* signal handler
			* asynchronous
		* shared memory
		* [[#Message passing]]
	- ensuring that concurrent processes (or threads) do not interfere with each other when accessing shared resources
	- enforcing correct execution order (of processes or threads) when dependencies exist, so that a consumer waits until a producer has generated the required data. 



### Race condition

- **critical regions** (or **critical section**) 
	- the part of a process where shared resources are accessed

- A **race condition** is a situation where multiple processes access shared data and the result depends on the order of execution.

- a solution must satisfy: 
	- (**mutual exclusion**) no two processes in critical regions at the same time.
	- Independence from assumptions about process speed or number of CPUs.
	- (progress) Processes outside their critical regions cannot block others
	- (**bounded waiting**) no process should experience indefinite waiting to enter its critical region.

#### mutual exclusion (with busy waiting)

in this section we will list some approaches for achiving mutual exclusion. these approaches inculdes busy waiting.

- (**busy waiting**) continuously checking a variable (as in `while (turn != i);`, below) 
	- (disadvantage: it wastes CPU cycles)
	- lock that uses busy waiting is called a **spin lock**.

###### disabling interrupts

```c
disable_interrupts();
// critical region
enable_interrupts();
```
``
- flaws: 
	- A user process could disable interrupts and never re-enable them
	- Useless on multiprocessors

###### lock variables

Use a shared variable as a lock:

```c
int lock = 0;

while (lock == 1) { } // wait
lock = 1;
// critical region
lock = 0;
```

flaw:

- P1 checks `lock == 0` → true.
- CPU switches to P2 before P1 sets it.

Later hardware primitives like Test-and-Set, Compare-and-Swap, or Load-Link/Store-Conditional were introduced to fix this issue by making such operations atomic.

###### strict alternations

```c
// Process 0
while (TRUE) {
    while (turn != 0) { }  // busy wait
    critical_region();
    turn = 1;
    noncritical_region();
}

// Process 1
while (TRUE) {
    while (turn != 1) { }
    critical_region();
    turn = 0;
    noncritical_region();
}
```

flaw: progress violation
- suppose, both processes are in their noncritical regions, and `turn = 1`.
- Then P0 cannot enter its critical region until P1 sets `turn = 0`.
- But if P1 is doing something unrelated (stuck in its noncritical part), P0 waits forever.
- Thus, one process blocks another that isn’t even competing, violating the _progress_ condition.

##### solutions

###### Dekker’s algorithm

```c
boolean lock[2];
int turn;
lock[0] = lock[1] = FALSE;
turn = 1;

# Process 0
while (TRUE) {
	// ... non-critical section
	lock[0] = TRUE;
	while(lock[1] == TRUE) {
		if (turn == 1) {
		lock[0] = FALSE;
		while(turn == 1)
			; //loop
		lock[0] = TRUE;
		
		}
	}
	critical_section_0();
	turn = 1;
	lock[0] = FALSE;
	// ... non-critical section
}

# Process 1
while (TRUE) {
	// ... non-critical section
	lock[1] = TRUE;
	while(lock[0] == TRUE) {
		if (turn == 0) {
		lock[1] = FALSE;
		while(turn == 0)
			; //loop
		lock[1] = TRUE;
		
		}
	}
	critical_section_1();
	turn = 0;
	lock[1] = FALSE;
	// ... non-critical section
}
```

###### Peterson’s algorithm

```c
#define N 2                // number of processes
int turn;                  // whose turn is it?
int interested[N];         // initially all FALSE

void enter_region(int process) {
    int other = 1 - process;          // the other process
    interested[process] = TRUE;       // express interest
    turn = process;                   // let the other go first
    while (turn == process && interested[other] == TRUE)
        ;                             // busy wait
}

void leave_region(int process) {
    interested[process] = FALSE;      // done with the critical section
}
```

###### The TSL (Test-and-Set Lock) Instruction


- `TSL REGISTER, LOCK` performs two operations atomically[^1]:
	- Reads the value of memory word `LOCK` into a register (`REGISTER`).
	- Writes a nonzero value (typically 1) into `LOCK`.
	
- a shared variable `lock` that can be either:
	- `0` → unlocked (no process in critical region)
	- `1` → locked (a process is in its critical region)


```
enter_region:
    TSL REGISTER, LOCK      ; read lock and set it to 1
    CMP REGISTER, #0        ; was it 0 before?
    JNE enter_region        ; if not, lock was already set, so try again
    RET                     ; critical region entered

leave_region:
    MOVE LOCK, #0           ; release the lock
    RET
```


###### XCHG Instruction

```
enter_region:
    MOVE REGISTER, #1
    XCHG REGISTER, LOCK     ; atomically swap
    CMP REGISTER, #0
    JNE enter_region
    RET

leave_region:
    MOVE LOCK, #0
    RET
```


#### sleep and wakeup

- _busy waiting_ solutions (like Peterson, TSL and XCHG) indeed ensure mutual exclusion. however they rely on busy waiting (a process that cannot enter its critical region keeps executing a loop, repeatedly checking if it can enter) which is inefficient (1. wastes CPU time, and 2. can cause some variant of the _priority inversion problem_, if high priority process is busy waiting and low priority process never gets CPU time to exit the critical section).


#####  The Producer–Consumer (Bounded Buffer) Problem

- problem definition:
	- Two processes share a fixed-size buffer of size `N`:
		- Producer inserts items into the buffer.
		- Consumer removes items from the buffer.
		- `int count` tracks the number of items in the buffer.
	- constraints:
		- Producer must wait if the buffer is full (`count == N`)
		- Consumer must wait if the buffer is empty (`count == 0`)

###### Naive solution (using sleep & wakeup)


```c
// Producer
while (TRUE) {
	item = produce();
	if (count == N) sleep();
	insert(item);
	count++;
	if (count == 1) wakeup(consumer);
}


// Consumer
while (TRUE) {
	if (count == 0) sleep();
	remove();
	count--;
	if (count == N-1) wakeup(producer);
	consume(item);
}
```

- issue: lost wakeup
	- buffer is empty
	- consumer checks `count == 0` → true, intends to sleep, but not yet executed `sleep()`.
	- (scheduler switches to the producer)
	- producer inserts an item, sets `count = 1`, executes `wakeup(consumer)`, but since the consumer isn’t yet asleep, the wakeup signal is lost.
	- (scheduler switches to the consumer)
	- consumer executes `sleep()` and blocks forever
	- (scheduler switches to the producer)
	- producer fills the buffer and sleeps too
	- outcome ⇒ both are asleep forever. deadlock.

###### Semaphore (Dijkstra 1965)

-  a new abstract data type, a **semaphore** is an integer variable $S$ with two operations, where each of them is atomic.
	- **down(S)** (aka: **P** or **wait**. in `pthread`: `int sem_wait(sem_t *)`)
		- if $S>0$, decrement $S$ and continue.
		- if $S=0$, block the process until $S>0$.
	- **up(S)** (aka: **V** or **signal**.  in `pthread`: `int sem_post(sem_t *)`)
		- increment $S$ 
		- if some process(s) are block on $S$, wake up one of them 
- In a **binary semaphore**, the value is numeric:
	- `1` → resource available → `sem_wait` can proceed
	- `0` → resource unavailable → `sem_wait` blocks

###### Solving the Producer–Consumer Problem with Semaphores

```c
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <semaphore.h>
#include <unistd.h>

#define N 100

int buffer[N]; 
int in = 0;
int out = 0;

sem_t mutex;  /* controls access to critical region */
sem_t empty;  /* counts empty buffer slots */
sem_t full;   /* counts full buffer slots */

void insert_item(int item) {
    buffer[in] = item;
    in = (in + 1) % N;
}

int remove_item(void) {
    int item = buffer[out];
    out = (out + 1) % N;
    return item;
}

int produce_item(void) {
    static int next = 0;
    return next++;
}

void consume_item(int item) {
    printf("Consumed item: %d\n", item);
}

void* producer(void* arg) {
    while (1) {
        int item = produce_item();
        sem_wait(&empty);
        sem_wait(&mutex);
        insert_item(item);
        printf("Produced item: %d\n", item);
        sem_post(&mutex);
        sem_post(&full);
        sleep(1);
    }
}

void* consumer(void* arg) {
    while (1) {
        sem_wait(&full);
        sem_wait(&mutex);
        int item = remove_item();
        sem_post(&mutex);
        sem_post(&empty);
        consume_item(item);
        sleep(2);
    }
}

int main(void) {
    pthread_t prod_thread, cons_thread;

    sem_init(&mutex, 0, 1);
    sem_init(&empty, 0, N);
    sem_init(&full, 0, 0);

    pthread_create(&prod_thread, NULL, producer, NULL);
    pthread_create(&cons_thread, NULL, consumer, NULL);

    pthread_join(prod_thread, NULL);
    pthread_join(cons_thread, NULL);

    sem_destroy(&mutex);
    sem_destroy(&empty);
    sem_destroy(&full);

    return 0;
}
```


##### Readers–writers problem

- a shared database accessed by two types of processes
	- Readers: processes that only read data.
	- Writers: processes that modify (write) data.
- constraints:
	- Multiple readers can access the database simultaneously, because reading does not interfere with reading.
	- Writers require exclusive access (i.e., when a writer is writing, no other writer or reader can access the database).

###### solution

```c
// Algorithm for Readers:
down(&mutex);       // Lock rc
rc = rc + 1;        // Increment reader count
if (rc == 1) down(&db); // First reader locks the database
up(&mutex);         // Release rc

read_database();    // Critical section for reading

down(&mutex);       // Lock rc again
rc = rc - 1;        // Decrement reader count
if (rc == 0) up(&db); // Last reader releases the database
up(&mutex);         // Release rc

// Algorithm for Writers:
down(&db);          // Lock database (exclusive)
write_database();   // Critical section for writing
up(&db);            // Release database
```

Issue: writer starvation. if there is a steady stream of readers, a writer may be indefinitely delayed.

Alternative Solution: If a writer is waiting, new readers are blocked behind the writer. Existing readers finish their work, then the writer is allowed to proceed. Once the writer finishes, readers can resume.

#### mutual exclusion (without busy waiting)

##### mutex

- a **lock** (or **mutex**, from mutual exclusion) 
	- possible states:
	- unlocked (available) (0) - critical region is available
		- locked (acquired) (1) - critical region is currently held by some thread
	- operations:
		- `mutex_lock()` - attempts to acquire the lock. If a thread calls `mutex_lock()` when the mutex is already locked, it must wait until it becomes available.
		- `mutex_unlock()` - releases it.

```
mutex_lock:
    TSL REGISTER, MUTEX     ; atomically: copy MUTEX into REGISTER, set MUTEX = 1
    CMP REGISTER, #0        ; was it previously 0 (unlocked)?
    JZE ok                  ; yes → success
    CALL thread_yield       ; no → give CPU to another thread
    JMP mutex_lock          ; try again

ok: RET

mutex_unlock:
    MOVE MUTEX, #0          ; set MUTEX = 0 (unlock)
    RET
```

- (mutexes implemented in user space are efficient only for threads within a single process. for processes (which have separate address spaces, so they cannot directly share mutexes) we need a synchronization object resides in kernel memory or provide shared memory segments or shared files.)
- (efficiency problem: while the mutex solution aviods the wastes CPU cycles like busy waiting, it has to switch between the user space and the kernel which is expensive. (we could choose the mutex blocking approche when there is a high contention, and the busy waiting approche in case of low contention, but, the amount of contention is usually unpredictable). to solve this tradeoff problem, linux introduces **futexes** (fast user-space mutexes) to combine the best of both worlds).
- #todo condition variables

##### monitor


#### Message passing

- **message passing** is a method of IPC where processes or threads communicate by sending and receiving _messages_ rather than sharing memory.
- MPI (Message Passing Interface)

#### barrier

- **barrier** - a group of threads “wait at the barrier” until the last one arrives, then all continue simultaneously.
- A **memory barrier** (or **memory fence**) ensures that all memory operations before the barrier _complete_ before any operations after the barrier begin.

[^1]: Atomicity means no other CPU can access or modify `LOCK` between the read and the write. The processor ensures this by locking the memory bus during the operation.


