# Positional numeral system

The value of the number (integer, or rational that has terminating representation in the base $b$) whose base-$b$ representation is $$\displaystyle \pm\Big(\underbrace{a_{k+1}\dots a_{2}a_{1}a_{0}}_{\text{\color{gray}Integer Part}}.\underbrace{a_{-1}a_{-2}\dots a_{-l}}_{\text{\color{gray}Fractional Part}}\Big)_{b}$$ is given by:
$$n=\pm \Big(a_{k+1}\times b^{k+1}+\dots+a_{0}\times b^{0}\Big)+\Big(a_{-1}\times b^{-1}+a_{-2}\times b^{-2}+\dots+a_{-l}\times b^{-l} \Big)$$
where:
- $b$ is the **basis** (or **radix**)
- $D=\{d_{1},d_{2},\dots,d_{b}\}$ is the set of symbols ($\displaystyle  \forall i\colon a_{i}\in D$)
- $k=\lceil {\log_{b}n} \rceil$ is the number of digits to the left of the radix point (the integer part)
- $l$ is the number of digits to the right of the radix point (the fractional part)


- #todo irrational numbers and rational numbers with non-terminating representation


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


#### Binary–hexadecimal conversion

4 binary digits can be represented by 1 hexadecimal digit

#### Binary–octal conversion

3 binary digits can be represented by 1 octal digit

#### Octal–hexadecimal conversion

we can convert octal to binary and then binary to hexadecimal or vice versa

