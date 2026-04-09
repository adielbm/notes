


# CO2

```
C, central, bonds[double-left, double-right]
O, left[C], pairs[top, bottom]
O, right[C], pairs[top, bottom]
```

# H2O

```
O, central, pairs[top-right, top-left]
H, bottom-left[O], bonds[single-top-right]
H, bottom-right[O], bonds[single-top-left]
```

# NH3

```
N, central, pairs[top]
H, left[N], bonds[single-right]
H, bottom[N], bonds[single-top]
H, right[N], bonds[single-left]
```


# N

```
N, central, unpairs[top, bottom, left], pairs[right]
```

# C2H4

```
C, central, bonds[single-top-left, single-bottom-left]
C, right[C1], bonds[single-top-right, single-bottom-right, double-left]
H, top-left[C1]
H, bottom-left[C1]
H, top-right[C2]
H, bottom-right[C2]
```


# CO3^2-

```
#ion[2-]
C, central, bonds[single-left, single-right, double-top]
O, top[C], pairs[right, left]
O, left[C], pairs[top, bottom, left]
O, right[C], pairs[top, bottom, right]
```


