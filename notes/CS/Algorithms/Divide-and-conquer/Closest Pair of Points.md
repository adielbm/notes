
```python
import math

def dist(p1, p2):
    return math.sqrt(((p2[1]-p1[1])**2)+((p2[0]-p1[0])**2))

def closest_brute_force(P):
    min_dist = float("inf")
    p1 = None
    p2 = None
    for i in range(len(P)):
        for j in range(i+1, len(P)):
            d = dist(P[i], P[j])
            if d < min_dist:
                min_dist = d
                p1 = P[i]
                p2 = P[j]
    return p1, p2, min_dist


def rec(X, Y):
    n = len(X)
    if n <= 3:
        return closest_brute_force(X)
    else:
        midpoint = x[n//2]
        X_l = x[:n//2]
        X_r = x[n//2:]
        Y_l = []
        Y_r = []
        for point in Y:
            Y_l.append(point) if (point[0] <= midpoint[0]) else Y_r.append(point)
        (p1_l, p2_l, d_l) = rec(X_l, Y_l)
        (p1_r, p2_r, d_r) = rec(X_r, Y_r)
        (p1, p2, d) = (p1_l, p2_l, d_l) if (d_l < d_r) else (p1_r, p2_r, d_r)
        in_band = [point for point in y if midpoint[0]-d < point[0] < midpoint[0]+d]
        for i in range(len(in_band)):
            for j in range(i+1, min(i+7, len(in_band))):
                d = dist(in_band[i], in_band[j])
                if d < d:
                    print(in_band[i], in_band[j])
                    (p1, p2, d) = (in_band[i], in_band[j], d)
        return p1, p2, d

def closest(P):
    X = sorted(P, key=lambda point: point[0])
    Y = sorted(P, key=lambda point: point[1])
    return rec(X, Y)
```

