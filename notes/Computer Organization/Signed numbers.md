

## Bit numbering

- **bit** (b) is the smallest unit of data in a computer
- **Byte** (B) is 8 bits
	- **Nibble** is 4 bits
- **Word** is the natural unit of data used by a particular processor design, (in our course, it is 32 bits=4 bytes)
	- **Halfword** is 16 bits

- **Least significant bit (LSB)** is the rightmost bit
- **Most significant bit (MSB)** is the leftmost bit

## Signed numbers

###  Sign–magnitude

- if $0d_2d_3\dots d_n$ is a positive number, then $1d_2d_3\dots d_n$ is the negative of that number
- the most significant bit is the sign bit
- the range is $-2^{n-1}+1$ to $2^{n-1}-1$

### One's complement

- the range is $-2^{n-1}+1$ to $2^{n-1}-1$
- the negative of a number is obtained by inverting all bits
	- example: $5=0101 \implies -5=1010$

### Two's complement

- the range is $-2^{n-1}$ to $2^{n-1}-1$
- If $k=0d_2d_3\dots d_n$ is a positive number, then we can find its negative $-k$ by:
	- invert (flip) each bit (_One's complement_) and add 1 to the result: 
		- example: $5=0101 \implies -5=1010+1=1011$
	- subtract $k$ from $2^n$:
		- example: $5=0101,n=4 \implies 2^4-5=16-5=11 \implies -5=1011$

### signed binary numbers
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




