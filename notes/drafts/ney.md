


| tube length | distance of the first hole | open    | closed hole |
| ----------- | -------------------------- | ------- | ----------- |
|             |                            | 440 Hz  | 392 Hz      |
| 71          | 10.4                       | 505 Hz  | 446 Hz      |
| 60.5        | 8.8                        | 570 Hz  | 514 Hz      |
| 59.5        | 7.4                        | 582 Hz  | 530 Hz      |
| 54          | 6.7                        | no data | no data     |
| 50.4        | 6.9                        | 667 Hz  | 660 Hz      |
| 44.5        | 6.4                        | no data | no data     |


# est for target nay (392 Hz closed / 440 Hz open)

#### claude 

| Best estimate             | 95% CI      |                |
| ------------------------- | ----------- | -------------- |
| **x** (tube length)       | **83.4 cm** | 81.0 – 86.3 cm |
| **y** (hole from far end) | **10.7 cm** | 9.7 – 11.9 cm  |

#### gemini

| x                         | y                         |
| ------------------------- | ------------------------- |
| $\approx 81.2 \text{ cm}$ | $\approx 10.5 \text{ cm}$ |
| $\approx 81.3 \text{ cm}$ | $\approx 10.2 \text{ cm}$ |

#### gemini 2

https://gemini.google.com/u/0/app/88587cef56cab3c8

87.5 cm, 12.69 cm


----
# Ahmed, A. M. M. (2024) paper

https://www.sciencepublishinggroup.com/article/10.11648/j.acm.20241301.11


|     | hole         | ratio distance<br>(from the bottom) |
| --- | ------------ | ----------------------------------- |
| Bb  | 7th (back)   | 52.5%                               |
| G   | 6th          | 39%                                 |
| F#  | 5th          | 34.8%                               |
| F   | 4nd          | 30.6%                               |
| Eq  | 3rd          | 22.9%                               |
| Eb  | 2nd          | 18.7%                               |
| D   | 1st (bottom) | 14.5%                               |


### my 71cm ney

|     | hole         | real     | expected by paper |
| --- | ------------ | -------- | ----------------- |
| Bb  | 7th (back)   |          |                   |
| G   | 6th          | 27<br>   | 27.69             |
| F#  | 5th          | 24.3<br> | 24.708            |
| F   | 4nd          | 21.6<br> | 21.726            |
| Eq  | 3rd          | 16<br>   | 16.259            |
| Eb  | 2nd          | 13.2<br> | 13.277            |
| D   | 1st (bottom) | 10.4<br> | 10.295            |
|     |              |          |                   |

----


---
https://claude.ai/chat/1d9ed5fa-6096-4b1b-b302-d29e044dd3a9
# CLAUDE CHAT 

Here's the build using this paper's own method (Table 8 ratios + the two derived equations), combined with basic flute acoustics to get from your target Hz to a starting length.

## Step 1 – Total tube length (all holes closed → 196 Hz)

The paper never gives a formula for turning a _frequency_ into a _length_ — it assumes you already know the target length. A ney acts roughly like a tube open at both ends, so the fundamental follows:

$$L = \frac{v}{2f_0}$$

Using speed of sound v ≈ 343 m/s (20°C) and f₀ = 196 Hz:

**L ≈ 87.5 cm**

(This shifts a bit with temperature: ~86.7 cm at 340 m/s, ~88 cm at 345 m/s — worth knowing since ney pitch drifts with the player's breath/room temperature anyway.)

## Step 2 – Bore diameter (paper's equation: length/34)

$$D = \frac{87.5}{34} \approx 2.57\text{ cm} ;(\text{≈25.7 mm bore})$$

## Step 3 – Hole positions (paper's Table 8 ratios × 87.5 cm)

Measured from the **blowing end**, and also from the **bottom** end for convenience while marking the tube:

|Hole|Ratio|From mouth (cm)|From bottom (cm)|
|---|---|---|---|
|First (bottom)|85.5%|74.81|12.69|
|Second|81.3%|71.14|16.36|
|Third|77.1%|67.46|20.04|
|Fourth|69.4%|60.73|26.78|
|Fifth|65.2%|57.05|30.45|
|Sixth|61.0%|53.38|34.13|
|Seventh (back/thumb)|47.5%|41.56|45.94|

## Sanity check against your second data point

The paper claims a fixed "universal ratio" set (8/9, 5/6, 4/5, 3/4, 5/7, 2/3, 5/9) between the closed note and each hole, regardless of pitch. Applying that to your 196 Hz base:

|Hole|Predicted freq|
|---|---|
|Closed|196.0 Hz|
|**First**|**220.5 Hz**|
|Second|235.2 Hz|
|Third|245.0 Hz|
|Fourth|261.3 Hz|
|Fifth|274.4 Hz|
|Sixth|294.0 Hz|
|Back|352.8 Hz|

Your target of 220 Hz for the first hole lines up almost exactly with the paper's predicted 220.5 Hz — a good sign your two reference points are internally consistent with this model.

## A few caveats worth knowing before cutting

- This is a simplified starting point, not a guarantee of exact pitch. Real tone-hole acoustics depend heavily on hole diameter, chimney height, and wall thickness — none of which this paper's formulas account for. Two identical-length tubes with differently sized holes at the same position won't sound the same.
- In practice, ney makers drill holes slightly smaller/higher than calculated, then ream/enlarge them while checking pitch with a tuner, since enlarging a hole raises its pitch (shortens the effective air column) more predictably than repositioning it.
- Temperature and breath pressure shift pitch by several cents in normal playing, so treat 196/220 Hz as your target "at a comfortable steady blow," not an absolute lab measurement.