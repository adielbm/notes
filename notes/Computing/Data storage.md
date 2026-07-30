

- **bit** (b) is the smallest unit of data in a computer
- **Byte** (B) is usually 8 bits
	- **Nibble** is 4 bits
- **octet** is 8 bits 
- **Word** is the natural unit of data used by a particular processor design, (in our course, it is 32 bits=4 bytes)
	- **Halfword** is 16 bits
- The **least significant bit** (LSb) is the bit position in a binary integer representing the binary 1s place of the integer.  
- The **most significant bit** (MSb) represents the highest-order place of the binary integer

## Signed Number Representations

-  $n$ is the number of bits allocated to represent an integer
### Unsigned Integer

- range: $0$ to $2^{n}-1$
- If the number of bits is less than $n$, 0s are added to the left of the binary integer so that there is a total of $n$ bits. If the number of bits is greater than $n$, the integer cannot be stored. A condition referred to as **overflow** will occur. (and the computer keeps the rightmost n-bits, and drops the rest of leftmost bits)
### Sign–magnitude

-  A signed number is represented by the bit pattern corresponding to the sign of the number for the **sign bit** (often the MSb, set to 0 for a positive number and to 1 for a negative number), and the **magnitude** of the number (or absolute value) for the remaining bits
- range: $−(2^{n−1} − 1)$ to $(2^{n−1} − 1)$
- Sign–magnitude has two representations of $0$: `000...000` $(+0)$ and `100...000` $(−0)$
- Overflow in sign-and-magnitude representation #todo 

### Ones' complement

- The **ones' complement** of a binary number is obtained by inverting all bits in the binary representation of the number (i.e., changing all 0s to 1s and all 1s to 0s)
	- The name _one's complement_ comes from the fact that the sum of a binary number and its one's complement is a string of all 1s (i.e., $2^n - 1$ for an $n$-bit number)
- A **ones' complement system** (or **ones' complement arithmetic**) (of  bits) represents negative numbers using the one's complement of their corresponding positive numbers.
	- It has two representations of $0$: `000...000` $(+0)$ and `111...111` $(−0)$
	- Its range is $−(2^{n−1} − 1)$ to $(2^{n−1} − 1)$
- The **one's complement addition** of $m$ binary integers of $n$ bits each is performed as follows: (the sum must lie within the range $−(2^{n−1} − 1)$ to $(2^{n−1} − 1)$; otherwise, overflow occurs)
	- The $m$ integers are added as if they were unsigned integers: $S=\sum_{i=1}^{m} x_i$.
	- If there is a carry out of the MSb, it is added to the LSb of the result (this is called an **end-around carry**). If this produces another carry out of the MSb, the process is repeated until there is no carry out of the MSb (the result is $S'=S \mod (2^n - 1)$).
	- The result $S'$ is expressed in one's complement representation.


### Two's complement

- for taking the two’s complement of an integer in binary, we copy bits from the right until a 1 is copied, Then, we flip the rest of the bits.  
- An alternative way to take the two’s complement of an integer is to first take the one’s complement and then add 1 to the result 
- range: $−(2^{n−1})$ to $(2^{n−1} − 1)$
- **Storing** an integer in two’s complement format 
	- The absolute value of the integer is changed to an n-bit binary.   
		- If the integer is positive or zero, it is stored as it is: 
		- if it is negative, the computer takes  the two’s complement of the integer and then stores it.  
- **Retrieving** an integer in two’s complement format If the leftmost bit is 1, the computer applies the two’s complement operation to the integer. If the leftmost bit is 0, no operation is applied

> Comparison tables https://en.wikipedia.org/wiki/Signed_number_representations#Comparison_table

## Real Numbers
### Fixed-point representation 

### Floating-point representation 




# Signed binary numbers
#### 4-bit 

| Binary | Unsigned | Two's complement | Sign–magnitude | One's complement |
| ------ | -------- | ---------------- | -------------- | ---------------- |
| 0000   | 0        | 0                | 0              | 0                |
| 0001   | 1        | 1                | 1              | 1                |
| 0010   | 2        | 2                | 2              | 2                |
| 0011   | 3        | 3                | 3              | 3                |
| 0100   | 4        | 4                | 4              | 4                |
| 0101   | 5        | 5                | 5              | 5                |
| 0110   | 6        | 6                | 6              | 6                |
| 0111   | 7        | 7                | 7              | 7                |
| 1000   | 8        | -8               | -0             | -7               |
| 1001   | 9        | -7               | -1             | -6               |
| 1010   | 10       | -6               | -2             | -5               |
| 1011   | 11       | -5               | -3             | -4               |
| 1100   | 12       | -4               | -4             | -3               |
| 1101   | 13       | -3               | -5             | -2               |
| 1110   | 14       | -2               | -6             | -1               |
| 1111   | 15       | -1               | -7             | -0               |
#### 8-bit

| Binary | Unsigned | Two's complement | Sign–magnitude | One's complement |
| ------ | -------- | ---------------- | -------------- | ---------------- | 
| 00000000 | 0        | 0                | 0                | 0                |
| 00000001 | 1        | 1                | 1                | 1                |
| $\vdots$ | $\vdots$ | $\vdots$         | $\vdots$         |  $\vdots$         |
| 01111110 | 126      | 126              | 126              | 126              |
| 01111111 | 127      | 127              | 127              | 127              |
| 10000000 | 128      | -128             | -0               | -127             |
| 10000001 | 129      | -127             | -1               | -126             |
| $\vdots$ | $\vdots$ | $\vdots$         | $\vdots$         | $\vdots$         |
| 11111110 | 254      | -2               | -126             | -1 |
| 11111111 | 255      | -1               | -127             | -0 |




