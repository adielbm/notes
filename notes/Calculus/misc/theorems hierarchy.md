
### textbook

- BW theorem (3.32)
- Fermat's Theorem (8.4)
- (5.37 & 8.4) => Rolle's Theorem (8.5)
- MVT-Lagrange (8.6)
- MVT-Cauchy's (8.9)
- Darboux's theorem (8.10)
- Supremum-Charact (3.9)
- (5.35 & 3.32 & 3.25 & 5.27 & 3.9) => EVT-Weierstrass-2 (5.37)
- IVT (5.31)


```mermaid
graph TD;

  a1.52(Completeness Axiom - A1.52);
  1.60(Archimedean property);
  2.32(Squeeze - Sequences - 2.32)
  3.32(BW Theorem - 3.32);
  3.6(Least-upper-bound property 3.6);
  3.9(Supremum-Charact - 3.9);
  3.16(Monotone Convergence Theorem 3.16);
  3.22(Cantor's Lemma 3.22);
  3.27(subsequential limits 3.27);
  3.36(Cauchy's Convergence Test 3.36);
  4.41;
  5.27(Continuous-Charact 5.27);
  5.29(Bolzano's Theorem 5.29);
  5.31(IVT 5.31);
  5.32(Brouwer 5.32);
  5.35(Boundedness-Weierstrass-1 - 5.35);
  5.37(EVT-Weierstrass-2 - 5.37);
  5.48(Heine-Cantor theorem);
  7.12;
  8.3;
  8.4(Fermat's Theorem - 8.4);
  8.5(Rolle's Theorem - 8.5);
  8.6(MVT-Lagrange - 8.6);
  8.7(8.7);
  8.9(MVT-Cauchy's - 8.9);
  8.10(Darboux's theorem - 8.10);
  8.21(1st Derivative Test - Exterme);
  8.23(2nd Derivative Test - Exterme);


  a1.52 ==> 1.60;
  8.6 ==> 8.17 ==> 8.18 ==> 8.21;
  8.24 & 8.21 ==> 8.23;

  8.6 ==> 8.7;
  8.5 ==> 8.6;
  8.5 ==> 8.9;

  2.32 ==> 5.48;
  5.31  ==> 5.32;
  3.22 & 5.27 ==> 5.29;
  5.29 ==> 5.31;
  3.32 & 5.27 ==> 5.35;
  7.12 & 4.41 ==> 8.4;
  a1.52 <==> 3.6;
  3.6 ==> 3.16;
  2.32 ==> 3.27;
  3.27 & 3.32 ==> 3.36;
  3.16 & 2.32 ==> 3.22;
  5.37 & 8.4 ==> 8.5;
  5.35 & 3.32 & 5.27 & 3.25 & 3.9 ==> 5.37;
  3.22 ==> 3.32;
  5.37 & 8.3 ==> 8.10;
```
