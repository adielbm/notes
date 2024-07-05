



Exercise Questions

1. What is the problem in the following program:

```c
char *s;

s = (char *) malloc (15);

s = "hello world";

free(s);
```

1. In ANSI C, it is possible to define 3 different variables on the same memory segment under the condition that at any given moment in the program, only one of the three variables is in use.
2. In ANSI C, passing an array as an argument to a function by value is allowed.
3. In ANSI C, any expression type can be used as a logical condition in conditional statements, such as if.
4. Memory space allocated for an automatic static variable is allocated each time the function is entered and released each time the function exits.
5. The memory allocated for a variable temp is 3 bytes.

```c
#define NUM 12

typedef struct {
    unsigned int a:1;
    unsigned int b:1;
} kuku;

kuku temp[NUM];
```

1. Given the following declarations:

```c
char *w[] = {"mno", "pqr", "stuv", "w", NULL}, x, *y=&x, z[]=”mnopqrs”;
```

Assuming the address starts at 4 bytes:

```
- sizeof(w);
- sizeof(*w);
- *(w+4);
- sizeof(x);
- sizeof(y);
- sizeof(*y);
- sizeof(z);
- sizeof(*z);
```

1. In ANSI C, it is possible to pass an array as an argument to a function in order to modify it inside the function without the changes being felt outside the function.
2. When a variable is defined as a register variable, it is **guaranteed** that the access and execution time will be faster.
3. There is no limitation on the number of files a program can open simultaneously.
4. It is desirable to initialize an external variable at the time of its definition, which saves runtime.
5. The standard input file &lt;stdin&gt; is always the keyboard, the standard output file &lt;stdout&gt; is always the screen, and the standard error input file is always the screen.
6. Are the following two lines equivalent:

```c
Pi = (int *) malloc (sizeof (int) * 100);
Pi = (int *) calloc (100, sizeof (int));
```

1. Given the following code segment:

```c
struct type {
    char a;
    int b;
    char c;
    float d;
} t;

char e;
int f;
char g;
float h;
```

Does the condition hold: sizeof(t)==sizeof(e)+sizeof(f)+sizeof(g)+sizeof(h)?

1. In ANSI C, it is possible to open a non-existent file using fopenf.
2. Are the following expressions equivalent:

```c
(*argv)++
*argv++
```

1. Command-line arguments can receive information of any type: integer, string, character, floating-point, single character, etc.
2. Are the following three code segments assigning the same value in C?

| char c; | char c; | char c; |
| --- | --- | --- |
| c = 0; | c = '\0'; | c = 0.0; |

1. Are the following two expressions always equivalent?

```c
(*a)++
*a++
```

1. If a is the name of an array, p points to the beginning of the array, and i is an index, then at any location a[i] can be replaced with *(p+i).
2. At any given moment during program execution, only one file in addition to &lt;stdin&gt; may be open.
3. In ANSI C, operators are evaluated from left to right.
4. The statements exit1 and return1 are equivalent.
5. Is the following program performing as expected?

```c
#include <stdio.h>

float answer;

void main(void) {
    answer = 1/3;
    printf("the value of 1/3 is %f.\n", answer);
}
```

1. Is the following program performing as expected?

```c
#include <stdio.h>

#define FIRST_PART 7
#define CAST_PART 5
#define ALL_PARTS FIRST_PART+LAST_PART

int main(void) {
    printf("the square of all the parts is %d", ALL_PARTS*ALL_PARTS);
    return 0;
}
```

1. Is the following program performing as expected?

```c
#define NUM_OF_CHARS 26
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    char *tmp_word(void);
    printf("word %s\n",tmp_word);
    return 0;
}

Char tmp_word(void) {
    int i;
    char *abc = "abcdefghijklmnopqrstuvwxyz";
    char word[NUM_OF_CHARS+1];
    for (i=0; i<NUM_OF_CHARS+1; i++)
        word[i] = abc[i];
    return (word);
}
```

1. Write a function that takes two integers and performs a simulation of addition.
```