

# Digital electronics

- transistor
	- A **transistor** is a semiconductor device that can amplify or switch current
		- **BJT** (bipolar junction transistor)
			- The **base** is the control terminal
			- The **collector** is the high-voltage terminal
			- The **emitter** is the low-voltage terminal
			- Type of BJT:
				- **NPN** (negative-positive-negative)
				- **PNP** (positive-negative-positive)
		- **FET** (field-effect transistor) 




##### Figure: An NPN transistor as a switch

#todo

```tex
\usepackage{color,graphicx,circuitikz}
\begin{document}
\begin{circuitikz}[american, scale=0.7, every node/.style={transform shape}]
\draw (0,0) node[npn](npn){};
\draw (npn.B) to[R, -o] ++(-2,0) node[left] {$V_{\mathrm{in}}$};
\draw (npn.C) to[short, -o] ++(0,0) node[above] {$V_{\mathrm{cc}}$};
\draw (npn.E) to[R, -] ++(0,-2) node[ground] {};
\draw (npn.E) to[short, -o] ++(0.5,0) node[right] {$V_{\mathrm{out}}$};
\end{circuitikz}	
\end{document}
```




## Digital signal processing

- The difference between the original continuous analog signal and its digital approximation is called the **quantization error**
- The **resolution** (or **bit depth**) is the number of bits or values for the voltage of each sample (=measurement)
- The **sampling rate** is the number times per second the original analog voltage is measured ("sampled")
- **ADC** (analog-to-digital converter) is a device that converts a continuous analog signal to a discrete digital signal
- **DAC** (digital-to-analog converter) is a device that converts a digital signal to an analog signal
- bandwidth, Spectral band, frequency band #todo


