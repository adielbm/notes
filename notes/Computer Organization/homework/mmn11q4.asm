# MMN 11 - Q4 (Capitalize a String)
# Register Usage:
# $t0 - Current character
# $t1 - Flag for uppercase after period
# $t3 - Pointer to current character
# $s0 - Base address of string
# $a0 - Character to print
# $v0 - System call code

.data
str: .asciiz "hyunDAi aNd Kia. tHe bEST sMartwatChEs. learning a NEW langUage."
.text
.globl main

main:
    li $t1, 1           # Flag for uppercase after period
    la $s0, str         # Load base address of string
    move $t3, $s0       # Copy of base address to pointer

process_string:
    # Load next character
    lb $t0, ($t3)       # Load byte from current address
    beqz $t0, end       # If null terminator, end program

    # Check if character is a period
    beq $t0, 46, handle_period

    # if space, print as is
    beq $t0, 32, print_as_is

    # Determine uppercase or lowercase based on $t1 flag
    beq $t1, 1, make_uppercase
    beq $t1, 0, make_lowercase

make_uppercase:
    # Reset uppercase flag
    li $t1, 0                  
    
    # If it's upper already, print as is
    blt $t0, 97, print_as_is
    bgt $t0, 122, print_as_is
    
    # otherwise, convert to uppercase and print
    addi $a0, $t0, -32         
    li $v0, 11
    syscall
    j continue

make_lowercase:
    # If it's lower already, print as is
    blt $t0, 65, print_as_is   
    bgt $t0, 90, print_as_is

    # otherwise, make lowercase and print
    addi $a0, $t0, 32          
    li $v0, 11
    syscall
    j continue

handle_period:
    # Print period
    li $v0, 11
    move $a0, $t0
    syscall
    li $t1, 1 # turn on uppercase flag
    j continue

print_as_is:
    li $v0, 11
    move $a0, $t0
    syscall
    j continue

continue: # move to next character
    addi $t3, $t3, 1           
    j process_string

end: # exit program
    li $v0, 10
    syscall