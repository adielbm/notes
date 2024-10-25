# Numbers

- The least significant bit (**LSb**) is the bit position in a binary integer representing the binary 1s place of the integer.  
- The most significant bit (**MSb**) represents the highest-order place of the binary integer

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

- A negative number is represented by the bit pattern corresponding to the bitwise NOT (i.e. the "complement") of the positive number. Like sign–magnitude representation, ones' complement has two representations of $0$: `000...000` $(+0)$ and `111...111` $(−0)$
- range: $−(2^{n−1} − 1)$ to $(2^{n−1} − 1)$

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

