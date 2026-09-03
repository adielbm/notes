
# Fields

- **defensive programming**
- **computer security** (or **cybersecurity**)
- **Information security** (or **infosec**)
- **internet security**
- [[cryptography]]

# Properties and goals

- **CIA triad** 
	- **confidentiality** (חיסיון, סודיות)
	- **integrity** (כלילות, שלמות)
	- **availability** (זמינות)
- **authentication** (אימות)
- **authorization** (הרשאה)
- **non-repudiation** (אי-התכחשות)
- security (אבטחה)
- reliability (אמינות)
- privacy (פרטיות)
- secrecy (סודיות)
- anonymity 
- validation (תיקוף)
- verification (אימות)
- sanitization (סניטציה)

# misc. 

- **security policy** (מדיניות אבטחה)
- **business logic** (or **domain logic**)
- **code audit**
- white-box testing
- black-box testing
- **input validation** (or **data validation**)
- **security through obscurity**

# Threats

- **threat** (איום)
- **vulnerability** (פְּגִיעוּת, חולשת אבטחה, פרצת אבטחה)
	- design vulnerability
	- implementation vulnerability
	- operational vulnerability
- **exploit** (or *exploiting*) (נָצְלָה, ניצול חולשה)
- computer hacking
- **[[#cyberattacks|cyberattack]]**
- binary exploitation
	- **pwn** –  "An exploit in computer security, especially relating to machine code." (Wiktionary)
- information leakage
- **bug** (תֶּקֶל, באג)
- **mitigation** (אִפְחוּת)
- **malware** (**malicious software**)
	- **computer virus**
	- **computer worm**
	- **spyware** (**spying software**) (רוגלה)
	- **trojan horse** (or **trojan**)

## Cyberattacks

### memory vulnerabilities

- **buffer overflow** (גלישת חוצץ)
	- types:
		- **stack buffer overflow** (or **stack buffer overrun**)
		- **heap overflow** (or **heap overrun** or **heap smashing**)
	- buffer overflow protection
	- **canaries** (or **canary words** or **stack cookies**)
	- **bounds checking**
	- see also: 
		- **memory corruption**
		- [[Computing/index|stack overflow]]
		- **return-to-libc**
- see also:
	- [[addressing#ARP|ARP spoofing]]
- use-after-free (UAF)
- double free
- time of check time of use (TOCTOU)
- **control-flow integrity** (**CFI**)

- heap spraying
- code injection
- **SQL injection** (**SQLi**)
- **cross-site scripting** (**XSS**)
### network and communication vulnerabilities

- **spoofing attack** (התחזות)
	- threat to: confidentiality 
- **eavesdropping** (ציתות, האזנת סתר)
	- **sniffing attack**
	- threat to: confidentiality
- **denial-of-service attack** (**DoS attack**)
	- threat to: availability
	- **SYN flood**
		- **SYN cookie**
	- **distributed denial-of-service attack** (**DDoS attack**)
- **man-in-the-middle (MITM) attack**
	- threat to: confidentiality and integrity
- **session hijacking** (or **cookie hijacking**)
	- threat to: confidentiality and integrity

