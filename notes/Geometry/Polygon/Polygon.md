
- A **polygon** is a closed plane figure whose sides are line segments that intersect only at the endpoints.
- A **diagonal of a polygon** is a line segment that joins two nonconsecutive vertices
	- The total number of diagonals $D$ in a polygon of $n$ sides is given by the formula $D=\frac{n(n-3)}{2}$

- The **perimeter of a polygon** is the sum of the lengths of all sides of the polygon.
- The sum of the measures of the exterior angles of a polygon, one at each vertex, is 360°

- An **inscribed circle** (also called an **incircle**) is a circle that is tangent to each of the polygon's sides. 


| Polygon              | Formula |
| -------------------- | ------- |
| # of Sides, Vertices | $n$     |


# Classification

## Number of sides

- Polygons are primarily classified by the number of sides.
	- 3 Sides - [[Triangle]]
	- 4 Sided - [[Quadrilateral]]

## Convexity and intersection

### Convex Polygon

- A **convex polygon** is a polygon that every internal angle is strictly less than 180 degrees
	- A polygon is convex if and only if for every two points in the polygon, the segment connecting them is found in the polygon.
- The sum $S$ of the measures of the interior angles of a polygon with $n$ sides is given by $S=(n-2)\cdot180^\circ$. Note that $n>2$ for any polygon.

> for Regular Convex Polygon see below

### Non-convex

Non-convex: a line may be found which meets its boundary more than twice. Equivalently, there exists a line segment between two boundary points that passes outside the polygon.

### Simple

- The boundary of the polygon does not cross itself. 
- All convex polygons are simple.

### Concave

Non-convex and simple.

## Equality and symmetry

### Equiangular Polygon

 - all corner angles are equal.
### Equilateral Polygon

- all edges are of the same length.
### Regular Polygon

- A **regular polygon** is a polygon that is both equilateral and equiangular.
	- All regular simple polygons are convex. 
	- Regular polygons having the same number of sides are similar


| Regular Polygon               | Formula                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------- |
| Internal angle                | $\displaystyle\frac{{(n-2)}\pi}{n}$                                             |
| Area of Polygon               | $A_{p}=\frac{1}{2}aP=\frac {1}{4}ns^{2} \cot(\frac {\pi}{n})$                   |
| Perimeter                     | $P=ns$                                                                          |
| # of Sides, Vertices          | $n$                                                                             |
| Side Length                   | $s=\frac{P}{n}$                                                                 |
| Apothem                       | $\displaystyle  a={\frac {s}{2\tan {\frac {\pi }{n}}}}=R\cos {\frac {\pi }{n}}$ |
| Circumradius & Polygon Radius | $R={\frac {s}{2\sin \left({\frac {\pi }{n}}\right)}}={\frac {a}{\cos \left({\frac {\pi }{n}}\right)}}$                                                               |

#### Convex Regular Polygon

| Convex Regular Polygon | Formula |
| ---- | ---- |
| Area | $\displaystyle  A={\tfrac {1}{2}}nsa={\tfrac {1}{2}}pa={\tfrac {1}{4}}ns^{2}\cot \left({\tfrac {\pi }{n}}\right)=na^{2}\tan \left({\tfrac {\pi }{n}}\right)={\tfrac {1}{2}}nR^{2}\sin \left({\tfrac {2\pi }{n}}\right)$ |

### Cyclic Polygon

- A **cyclic polygon** is a polygon with vertices upon which a circle can be circumscribed.
- Since every triangle has a circumcircle, every triangle is cyclic.

### Tangential Polygon

- A **tangential polygon**, also known as a **circumscribed polygon**, is a convex polygon that contains an inscribed circle (also called an incircle). 
	- All triangles are tangential, as are all regular polygons with any number of sides
	- A convex polygon has an incircle if and only if all of its internal angle bisectors are concurrent. This common point is the incenter (the center of the incircle)

- odd number of sides: all sides are equal if and only if all angles are equal (so the polygon is regular). 
- even number of sides: it has all sides equal if and only if the alternate angles are equal (that is, angles A, C, E, ... are equal, and angles B, D, F, ... are equal)


| Tangential Polygon |                                   |
| ------------------ | --------------------------------- |
| Inradius           | $\displaystyle  r={\frac {A}{p}}$ |
| semiperimter       | $p$                                  |
| sides              | $a_1, ..., a_n$                   |
