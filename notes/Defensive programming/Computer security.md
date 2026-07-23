

- **computer security** (or **cybersecurity**)
- **Information security** (or **infosec**)
	- **CIA triad**
		- **confidentiality**
		- **integrity**
		- **availability**
	- **authentication**
	- **non-repudiation**



- **security policy** (מדיניות אבטחה)
- **code audit**
- white-box testing
- black-box testing

- **input validation** (or **data validation**)


https://chatgpt.com/c/6a500666-f4dc-83ed-81da-77d4cd7c68bc

- **threat** (איום)
- **vulnerability** (פְּגִיעוּת, חולשת אבטחה, פרצת אבטחה)
	- design vulnerability
	- implementation vulnerability
	- operational vulnerability
- **exploit** (or *exploiting*) (נָצְלָה, ניצול חולשה)
- **bug** (תֶּקֶל, באג)
- **mitigation** (אִפְחוּת)
- security
- reliability (אמינות)
- privacy


- **business logic** (or **domain logic**)


- **cyberattack**
	- **spoofing attack** (התחזות) (threat to confidentiality) 
	- **eavesdropping** (threat to confidentiality)
	- **denial-of-service attack** (**DoS attack**) (threat to availability)
		- **SYN flood**
			- **SYN cookie**
		- **distributed denial-of-service attack** (**DDoS attack**)
	- **man-in-the-middle (MITM) attack** (threat to both confidentiality and integrity)
	- **session hijacking** (or **cookie hijacking**)
	- **sniffing attack**
- **buffer overflow** (גלישת חוצץ)
	- types:
		- **stack buffer overflow** (or **stack buffer overrun**)
		- **heap overflow** (or **heap overrun** or **heap smashing**)
	- buffer overflow protection
	- **canaries** (or **canary words** or **stack cookies**)
	- **bounds checking**

- see also:
	- [[addressing#ARP|ARP spoofing]]

# Cryptography


- **cryptanalysis**
	- **brute-force attack** (or **exhaustive key search**)



- **cipher** (or **cypher**) (צופן)

- **key** (מפתח הצפנה)
- **encryption** (הצפנה)
- **decryption** (פענוח)
- **plaintext** (טקסט גלוי)
- **ciphertext** (טקסט מוצפן)


- **symmetric-key** (or **symmetric**) **cryptography**
	- **shared key** (or **secret key**)
- **public-key** (or **asymmetric**) **cryptography**
	- **public key**
	- **private key**


- **Diffie–Hellman** (**DH**) **key exchange**
	- Alice and Bob publicly agree on a prime $p$ and a base $g$ (which is a primitive root modulo $p$)
	- Alice's private key: $a$
	- Bob's private key: $b$
	- Alice's public key: $A=g^a \bmod p$
	- Bob's public key: $B=g^b \bmod p$
	- Secret shared key: $s=A^b \bmod p = B^a \bmod p = g^{ab} \bmod p$


- A **cryptographic hash function** (**CHF**) is a hash function $h:\{0,1\}^* \rightarrow \{0,1\}^n$ that satisfies the following properties:
	- (pre-image resistance) for a given **hash value** $y$, it is computationally infeasible to find any input $x$ such that $h(x) = y$
	- (second pre-image resistance) for a given input $x_1$, it is computationally infeasible to find another input $x_2$ such that $x_1 \neq x_2$ and $h(x_1) = h(x_2)$
	- (collision resistance) it is computationally infeasible to find any two distinct inputs $x_1$ and $x_2$ such that $h(x_1) = h(x_2)$
- The output of a CHF is called the **message digest** (or **hash value**) of the input message.


- **digital signature**
	- using message digest (MD)
		- given:
			- both sender and receiver know the CHF $h$
			- the sender has a public-private key pair: $(pk, sk)$ for encryption/decryption functions $E$ and $D$ (such that $E_{pk}(D_{sk}(m)) = m$ for any message $m$)
		- sender:
			- (plaintext) $P$
			- (message digest) $h(P)$
			- (signature) $S = D_{sk}(h(P))$
			- (sends to receiver) $(P,S)$ 
		- receiver:
			- computes $h(P)$
			- computes $E_{pk}(S)$
			- verifies that $h(P) = E_{pk}(S)$

- **substitution cipher**
- **Caesar cipher** (or **shift cipher**)

- **one-time pad (OTP)**

- **block cipher**
	- plaintext $P$ of size $n$ bits (block size) 
	- key $K$ of size $k$ (key size)
	- key space: $\{0,1\}^k$
	- ciphertext $C$ of size $n$ bits
	- encryption function: $E(K,P):\{0,1\}^k \times \{0,1\}^n \rightarrow \{0,1\}^n$
	- decryption function: $D(K,C):\{0,1\}^k \times \{0,1\}^n \rightarrow \{0,1\}^n$
	- $E^{-1}(K,C) = D(K,C)$
		- $\forall P \in \{0,1\}^n, K \in \{0,1\}^k: D(K,E(K,P)) = P$
- **block cipher mode of operation**
	- **electronic codebook** (ECB)
	- **cipher block chaining** (CBC)
		- **initialization vector** (**IV**)
	- **counter mode** (CTR)



- **Kerckhoffs's principle**
	- **Shannon's maxim**: _The enemy knows the system_

- **known-plaintext attack** (**KPA**) (התקפת גלוי-ידוע)
- **ciphertext-only attack** (**COA**) (or **known ciphertext attack**)
- **chosen-plaintext attack** (**CPA**) (התקפת גלוי-נבחר)



- **side-channel attack**

---


- **cryptographic protocol**
- **Transport Layer Security** (**TLS**)
- **certificate authority** (or **certification authority**) (**CA**) (רשות אישורים, רשות אישור)
- **public-key certificate** (or **digital certificate** or **identity certificate**)
	- **X.509**
	- **domain validated certificate** (**DV**)
- **public key infrastructure** (**PKI**)
- **registration authority** (RA)
- **validation authority** (VA)
