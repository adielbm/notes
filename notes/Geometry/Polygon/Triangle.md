
- A **triangle** (symbol $△$) is the union of three line segments that are determined by three noncollinear points.

- All triangles are convex
- In a triangle, the sum of the measures of the interior angles is $180^\circ$
- **The Triangle Inequality** - The length of each side in a triangle is less than the sum of the lengths of the other sides.
- If $a$, $b$, $c$ are positive real numbers each of which is less than the sum of the other two, then you can build a triangle whose side lengths are $a$, $b$, and $c$.

| Triangle      |                                                                |
| ------------- | -------------------------------------------------------------- |
| Area          | $A=\frac{h_{b}b}{2}=\sqrt{p(p-a)(p-b)(p-c)}=rp=\frac{abc}{4R}$ |
| Base          | $b$                                                            |
| Height        | $h_{b}$                                                        |
| Sides Length  | $a,b,c$                                                        |
| Semiperimeter | $p=\frac{a+b+c}{2}$                                            |
| Perimeter     | $P=a+b+c$                                                      |
| Inradius      | $\displaystyle{r=\frac{A}{p}}$                                 |
| Circumradius  | $R=\frac{abc}{4A}$                                            |


- The **incircle** (or **inscribed circle**) of a triangle is the largest circle that can be contained in the triangle; it touches (is tangent to) the three sides. 
	- The center of the incircle is a triangle center called the triangle's incenter
- The **circumcircle** (or **circumscribed circle**) of a triangle is a circle that passes through all three vertices. 
	- The center of this circle is called the **circumcenter** of the triangle 
	- Its radius is called the **circumradius**


## Triangle Centers

|                                        | Intersect / Centered | Trilinear Coordinates  |
| -------------------------------------- | ------------------ | ---------------------- |
| Angle bisectors and incircle           | $I$ - Incenter     | $1:1:1$                |
| Medians                                | $G$ - Centroid     | $bc:ca:ab$             |
| Perpendicular bisectors & circumcircle | $O$ - Circumcenter | $\cos A:\cos B:\cos C$ |
| Altitudes                              | $H$ - Orthocenter  | $\sec A:\sec B:\sec C$ |


# Triangle Classification 
### Triangles Classified by Congruent Sides

#### Scalene triangle

- **Scalene triangle** - None of Congruent Sides

#### Isosceles triangle

- **Isosceles triangle** - Two of Congruent Sides
	- In an isosceles triangle, the base angles are equal to each other.
	- If two angles in a triangle are equal in size, then the opposite sides are equal in length.
	- A triangle is isosceles if and only if two of its angles are equal to each other
	- Let $\triangle{ABC}$ be an isosceles triangle, suppose $\overline{AB} = \overline{AC}$. then the altitude, median, and angle bisector from the vertex $A$ all coincide

#### Equilateral triangle

- **Equilateral triangle** - Three of Congruent Sides
	- In a triangle, all of whose sides are equal to each other, all the angles are also equal to each other.
	- Each angle of an equiangular triangle measures 60°


| Equilateral triangle |                                                                          |
| -------------------- | ------------------------------------------------------------------------ |
| Angle                | $60^{\circ}=\frac{\pi}{3}$                                               |
| Area                 | $\displaystyle A=\frac{\sqrt{ 3 }}{4}a^2={\frac {3{\sqrt {3}}}{4}}R^{2}$ |
| Height               | $h=\frac{\sqrt{ 3 }}{2}a$                                                |
| Sides Length         | $a=b=c$                                                                  |
| Permiter             | $P=3a$                                                                   |
| Inradius             | $r=\frac{\sqrt{ 3 }}{6}a=\frac{R}{2}=\frac{h}{3}$                        |
| Circumradius         | $R=\frac{a}{\sqrt{ 3 }}=\frac{2h}{3}$                                    |
| Apothem                     | $\displaystyle\frac{h}{3}$                                                                         |

### Triangles Classified by Angles

- **Right triangle** - One right angle

	- **Pythagoras theorem** - In a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the lengths of the perpendiculars: $a^2 + b^2 = c^2$
	- The acute angles of a right triangle are complementary.
	- The area of a right triangle with legs of lengths $a$ and $b$ is given by $\frac{ab}{2}$.


| Right Triangle |                      |
| -------------- | -------------------- |
| Area           | $A=\frac{ab}{2}$     |
| Legs           | $a,b$                |
| Hypotenuse     | $c=\sqrt{ a^2+b^2 }$ |
| Sides Length   | $a,b,c$              |
| Semiperimeter  | $p=\frac{a+b+c}{2}$  |
| Perimeter      | $P=a+b+c$            |
| Inradius       | $r=$                 |
| Circumradius   |  $R=$                    |


- Equiangular - All angles congruent
- Acute - All angles acute
- Obtuse - One obtuse angle

# Line Segments

- A **median** of a triangle is a line segment joining a vertex to the midpoint of the opposite side, thus bisecting that side
- An **angle bisector** is a straight line drawn from the vertex of a triangle to its opposite side in such a way, that it divides the angle into two equal or congruent angles.
- An **altitude** of a triangle is a line segment through a vertex and perpendicular to a line containing the side opposite the vertex.
	- The three altitudes in a triangular triangle (or their continuations) meet at one point.
- The **perpendicular bisector** of a line segment is a line which meets the segment at its midpoint perpendicularly.

- The three perpendicular bisectors of the sides of a triangle are concurrent
- The three altitudes of a triangle are concurrent.
- The three medians of a triangle are concurrent at a point that is two-thirds the distance from any vertex to the midpoint of the opposite side.
# Congruence $\cong$

- Triangle Congruence Theorem
	- **SAS** (side-angle-side): If two pairs of sides of two triangles are equal in length, and the included angles are equal in measurement, then the triangles are congruent.
	- **SSS** (side-side-side): If three pairs of sides of two triangles are equal in length, then the triangles are congruent.
	- **ASA** (angle-side-angle): If two pairs of angles of two triangles are equal in measurement, and the included sides are equal in length, then the triangles are congruent.
	- **SSA** (side-side-angle) If two triangles equal in size to two sides and the angle opposite the larger side, then the triangles are congruent.

# Similarity $\sim$

- Given the triangles $\triangle A'B'C'$ and $\triangle ABC$
	- If $\frac{\overline{AB}}{\overline{A'B'}}=\frac{\overline{BC}}{\overline{B'C'}}=\frac{\overline{AC}}{\overline{A'C'}}$ then $\triangle ABC \sim \triangle A'B'C'$
	- If it holds that the angles are equal: $\sphericalangle{A}=\sphericalangle{A'}, \sphericalangle{B}=\sphericalangle{B'}, \sphericalangle{C}=\sphericalangle{C'}$ then $\triangle ABC \sim \triangle A'B'C'$