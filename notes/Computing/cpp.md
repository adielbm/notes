based on: https://github.com/mortennobel/cpp-cheatsheet


# general

```cpp
int x = 42;
int* p = &x; // p is a pointer to (address of) int x
int& r=x; // r is a reference to (alias of) int x
const int& cr=x; // read-only reference
int v = *p; // Reads the value at the address (v becomes 42)
*p = 100; // Changes the value at the address of 'x' to 100

```

# functions 

#### argument passing

```cpp
void f(int x) // by value — copies the argument
void f(int &x) // by reference — operates on original, no copy
void f(const int &x) // by const reference — avoids copy, prevents modification.
```

#### return

```cpp
// Return by reference (alias, no copy)
int& get(std::vector<int>& v, int i) { return v[i]; }
get(v, 0) = 5; // modifies original
// Return by value (copy) — no &
int get(std::vector<int>& v, int i) { return v[i]; }
get(v, 0) = 5; // ERROR
// const reference — read-only, no copy
const string& getName() const { return name; }
// operator[] overload
int& operator[](int i) { return data[i]; }
// operator= (chaining)
MyClass& operator=(const MyClass& o) { ...; return *this; }
// operator<< (chaining streams)
ostream& operator<<(ostream& os, const T& obj) { ...; return os; }
int& bad() { int x = 5; return x; }   // dangling reference, undefined behavior
int& safe() { static int x = 5; return x; } // static/member/global are safe to return by ref
```

# arrays

```cpp
int arr[10]; // array of 10 ints (a[0] through a[9])
int a[]={0,1,2}; // Initialized array (or a[3]={0,1,2}; )
int *p = arr; // decay: p points to arr[0]
void f(int arr[]) { // decay: passed as pointer
	std::cout << sizeof(arr); // prints pointer size
} 
void f(int (&arr)[10]) { // reference to array of exactly 10 ints
    std::cout << sizeof(arr); // prints 40 — no decay!
}
```


# dynamic allocation

```cpp
// Single object
int* p = new int; // allocate
int* p = new int(42); // allocate + initialize
*p = 100; // change the memory
delete p; // free memory
p = nullptr; // avoid dangling pointer

// Array
int* arr = new int[10]; // allocate array of 10 ints
delete[] arr; // must use delete[] for arrays
```


# classes

