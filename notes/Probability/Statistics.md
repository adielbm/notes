The sample space of an experiment, denoted by S, is the set of all possible outcomes of that experiment.
Suppose p(x) depends on a quantity that can be assigned any one of a number of possible values, with each different value determining a different probability distribution. Such a quantity is called a parameter of the distribution. The collection of all probability distributions for different values of the parameter is called a family of probability distributions.

# Population

- (**population**) sample space $\Omega$
- (**population size**) $N$ or $\infty$.
- (**population random variable**) $X:\Omega\to\mathbb{R}$
- (**population distribution**) The distribution of $X$
- (**parameter** $\theta$) A fixed (unknown usually) value on which the population distribution depends.

# Sample 

- A **random sample** (of **sample size** $n$) is a set of i.i.d random variables $X_1,\ldots,X_n$ (**observations**) distributed as $X$. 
	- (e.g.9.1) For each $i=1,\ldots,n$, $E[X_i]=\mu$. 
	- $\{x_1,\ldots,x_n\}$ (observed data values, realizations)
		- The joint PMF $p(x_1,\ldots,x_n)$ is called the **sample distribution** of $X_1,\ldots,X_n$
			- (9.3) $\displaystyle p(x_1,\ldots,x_n)=\prod_{i=1}^{n}p(x_i)$.
			- (Similar holds for the continuous case with PDF $f(x)$). 

- A random variable $T=T(X_1,\ldots,X_{n})$ is called a **statistic** if:
	- $T$ is a function of $X_1,\ldots,X_{n}$, and
	- $T$ does not depend on any unknown parameters.
- An **estimator** (אומד) (of an unknown parameter $\theta$) is a statistic denoted by $\hat{\theta}$ or $T$, that is used to estimate $\theta$.
	- (For any given $x_1,\ldots,x_{n}$ observed values) $T=T(x_1,\ldots,x_{n})$ is called an **estimate** (אומדן) of the parameter $\theta$.
	- $|T-\theta|$ is called the **error** of the estimate.
	- The **bias** of an estimator $\hat{\theta }$ is defined as $\mathrm{Bias}(\hat\theta)=E[\hat\theta]-\theta$.
		- An estimator $\hat\theta$ is called an **unbiased estimator** of $\theta$ if $\mathrm{Bias}(\hat\theta)=0$.
			- If $\hat\theta$ is an unbiased estimator of $\theta$, then $g(\hat\theta)$ is an unbiased estimator of $g(\theta)$ for any linear function $g$. 
		- An estimator $\hat\theta$ is called a **biased estimator** of $\theta$ if $\mathrm{Bias}(\hat\theta)\neq 0$.
	- The **mean squared error** (MSE) of an estimator $T$ of $\theta$ is defined as $\mathrm{MSE}(T,\theta)=E[(T-\theta)^2]$.
		- $\mathrm{MSE}(T,\theta)=\mathrm{Var}(T)+(\mathrm{Bias}(T))^2$ 
		- An estimator $T_2$ is **better** than $T_2$ (of the same parameter $\theta$) if $\mathrm{MSE}(T_2,\theta)<\mathrm{MSE}(T_1,\theta)$.
		- If $T_1$ and $T_2$ are unbiased estimators of $\theta$, then:
			- $\mathrm{Var}(T_1)<\mathrm{Var}(T_2)\implies \mathrm{MSE}(T_1,\theta)<\mathrm{MSE}(T_2,\theta)$.


- Let $X_1,\ldots,X_n$ be a random sample from a population with pmf/pdf $f(x;\theta)$ with unknown parameter $\theta$.
	- The **likelihood function** (of given realizations $x_1,\ldots,x_n$) is a function of $\theta$ defined by $L(\theta)=f(x_1,\ldots,x_n;\theta)$.
	- $\ell(\theta)=\log L(\theta)$ is the **log-likelihood function**.
	- An estimator $T=T(X_1,\ldots,X_n)$ is called a **maximum likelihood estimator** (MLE) of $\theta$ if $\displaystyle\hat{\theta}=\arg\max_{\theta}L(\theta)$, or equivalently, if for all $L(\hat{\theta})\geq L(\theta)$ for all $\theta$. 



# Examples

- The statistic $\displaystyle\bar{X}=\frac{1}{n}\sum_{i=1}^{n}X_i$ is called the **sample mean** of $X_1,\ldots,X_n$.
	- (9.8) $E[\bar{X}]=E[X_i]=\mu$ for all $i$. (i.e. the expectation of the sample mean $\bar{X}$ is equal to the population mean $\mu$ and to the expectation of any $X_i$). 
	- The sample mean $\hat{\mu}=\bar{X}$ is an unbiased estimator of $\mu$. (the population mean $\mu$). 
	- $\mathrm{Var}(\bar{X})=\frac{\sigma^2}{n}$ (i.e. the variance of the sample mean $\bar{X}$ is equal to the population variance $\sigma^2$ divided by the sample size $n$).
- The statistic $\displaystyle S^2=\frac{1}{n-1}\sum_{i=1}^{n}(X_i-\bar{X})^2$ is called the **sample variance** of $X_1,\ldots,X_n$, and $S$ is the called **sample standard deviation**.
	- (9.10) $\hat\sigma^2=\displaystyle S^2$ is an unbiased estimator population variance of $\sigma^2$ (unknown mean $\mu$)
	- (9.11) $\displaystyle S^2=\frac{1}{n-1}\left( \sum_{i=1}^{n}X_{i}^2-n\bar{X}^2 \right)$
- (9.9) If $\mu$ is known, then the statistic $\displaystyle S^2=\frac{1}{n}\sum_{i=1}^{n}(X_i-\mu)^2$ (denoted also by $\hat\sigma ^2$) is an unbiased estimator of the population variance $\sigma^2$. 



