# Positional numeral system

The value of the number $\pm(a_{k+1}\dots a_{2}a_{1}a_{0}.a_{-1}a_{-2}\dots a_{-l})_{b}$ (Note that represents a sequence of digits, not multiplication) is 
 
$$n=\pm \Big(a_{k+1}\times b^{k+1}+\dots+a_{1}\times b^{1}+a_{0}\times b^{0}\Big)+\Big(a_{-1}\times b^{-1}+a_{-2}\times b^{-2}+\dots+a_{-l}\times b^{-l} \Big)$$

- $b$ **basis** (or **radix**)
- $D=\set{d_{1},d_{2},\dots,d_{b}}$ set of symbols ($\displaystyle  \forall i\colon a_{i}\in D$)
- $k=\lceil {\log_{b}n} \rceil$ is the number of digits to the left of the radix point (integer part)
- $l$ is the number of digits to the right of the radix point (fractional part)

- Binary
- Octal	
- Decimal
- Hexadecimal


## Bit numbering

- **bit** (b) is the smallest unit of data in a computer
- **Byte** (B) is 8 bits
	- **Nibble** is 4 bits
- **Word** is the natural unit of data used by a particular processor design, (in our course, it is 32 bits=4 bytes)
	- **Halfword** is 16 bits

- **Least significant bit (LSB)** is the rightmost bit
- **Most significant bit (MSB)** is the leftmost bit

## Signed numbers

- sign–magnitude:
	- if $0d_2d_3\dots d_n$ is a positive number, then $1d_2d_3\dots d_n$ is the negative of that number
	- the most significant bit is the sign bit
	- the range is $-2^{n-1}+1$ to $2^{n-1}-1$
- two's complement:
	- if $0\dots 0 d_i\dots d_n$ is a positive number (where $d_i$ is the leftmost 1 bit), then $1\dots 1 d_i\dots d_n$ is the negative of that number 
	- the range is $-2^{n-1}$ to $2^{n-1}-1$
	- inverse of number in two's complement:
		- method 1
			- 

### 4-bit signed binary numbers

| Binary | Unsigned | Sign–magnitude | Two's complement |
| ------ | -------- | -------------- | ---------------- |
| 0000   | 0        | 0              | 0                |
| 0001   | 1        | 1              | 1                |
| 0010   | 2        | 2              | 2                |
| 0011   | 3        | 3              | 3                |
| 0100   | 4        | 4              | 4                |
| 0101   | 5        | 5              | 5                |
| 0110   | 6        | 6              | 6                |
| 0111   | 7        | 7              | 7                |
| 1000   | 8        | -0             | -8               |
| 1001   | 9        | -1             | -7               |
| 1010   | 10       | -2             | -6               |
| 1011   | 11       | -3             | -5               |
| 1100   | 12       | -4             | -4               |
| 1101   | 13       | -5             | -3               |
| 1110   | 14       | -6             | -2               |
| 1111   | 15       | -7             | -1               |


### 8-bit Two's complement

| Binary | Unsigned | Two's complement |
| ------ | -------- | ---------------- |
| 00000000 | 0        | 0                |
| 00000001 | 1        | 1                |
| $\vdots$ | $\vdots$ | $\vdots$         |
| 01111110 | 126      | 126              |
| 01111111 | 127      | 127              |
| 10000000 | 128      | -128             |
| 10000001 | 129      | -127             |
| $\vdots$ | $\vdots$ | $\vdots$         |
| 11111110 | 254      | -2               |
| 11111111 | 255      | -1               |





## Conversion 

#### Decimal to any base 

##### Converting the integral part 

```
// integer n in base 10 to base b
while n>0
	divide n by b to get quotient and remainder;
	append remainder to the left of the result;
	n=quotient;
```

##### Converting the fractional part 

```
// fractional part n in base 10 to base b
while n>0
	multiply n by b to get integer part and fractional part;
	append integer part to the right of the result;
	n=fractional part;

// note: the fractional part may never become zero, stop when the desired precision is reached
```

#### Any base to decimal conversion 




#### Binary–hexadecimal conversion

4 binary digits can be represented by 1 hexadecimal digit

#### Binary–octal conversion

3 binary digits can be represented by 1 octal digit

#### Octal–hexadecimal conversion

we can convert octal to binary and then binary to hexadecimal or vice versa

# Nonpositional numeral system