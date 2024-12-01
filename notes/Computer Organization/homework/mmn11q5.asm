.data
array: .byte -5, -4, -3, -2, -1, 0, 1, 2, 3, 4
prompt: .asciiz "In what base to print (2-10)?"
buffer: .space 32
sep: .asciiz ", "
newline: .asciiz "\n"
minus: .asciiz "-"

.text
.globl main

main:
    # Print prompt
    li $v0, 4            
    la $a0, prompt
    syscall

    # Read integer from user input into $v0 
    li $v0, 5
    syscall

    move $t0, $v0        # Store input in $t0
    li $t1, 2
    li $t2, 10
    blt $t0, $t1, main # If input < 2, retry
    bgt $t0, $t2, main # If input > 10, retry

    move $s0, $t0        # Store base

    # Print array unsigned
    la $s1, array        # Load address of the array
    li $s2, 10           # Set the number of elements in the array
    jal print_array_unsign # Print array in the specified base

    # Print newline
    li $v0, 4
    la $a0, newline
    syscall

    # Print array signed
    la $s1, array        # Load address of the array
    li $s2, 10           # Set the number of elements in the array
    jal print_array_sign # Print array in the specified base

    li $v0, 10           # Exit syscall
    syscall

# Print a number in the given base
print_base:
    addi $sp, $sp, -16   # Allocate stack space
    sw $ra, 12($sp)      # Save return address
    sw $a3, 8($sp)       # Save number
    sw $a1, 4($sp)       # Save base

    li $t0, 0            # Initialize loop counter
    la $t1, buffer       # Load buffer address

print_loop:
    divu $a3, $a1        # Divide number by base
    mfhi $t2             # Get remainder in $t2 (mfhi=move from hi)
    mflo $a3             # Update quotient in $a3 (mflo=move from lo)
    addi $t2, $t2, 48    # Convert remainder to ASCII
    sb $t2, 0($t1)       # Store the character (in $t2) in buffer (in $t1)
    addi $t1, $t1, 1     # Move buffer pointer to next position
    addi $t0, $t0, 1     # Increment loop counter
    bnez $a3, print_loop # Continue until number == 0

# Print characters in reverse order
print_reverse:
    subi $t1, $t1, 1     # Move back to last stored character
    lb $a0, 0($t1)       # Load character
    li $v0, 11           # Print character syscall
    syscall
    subi $t0, $t0, 1     # Decrement counter
    bgtz $t0, print_reverse # Continue until all digits are printed

    lw $ra, 12($sp)      # Restore return address
    addi $sp, $sp, 16    # Restore stack
    jr $ra               # Return to caller


# arg: $s1 = array address, $s2 = number of elements
print_array_unsign:
    addi $sp, $sp, -4     # Allocate stack space
    sw $ra, 0($sp)        # Save return address

print_array_unsign_loop:
    lbu $a3, 0($s1)       # Load number from array
    move $a1, $s0         # Move base to $a1
    jal print_base        # Print number in base
    # print sep
    li $v0, 4            
    la $a0, sep
    syscall
    addi $s1, $s1, 1      # Move to next element in array
    subi $s2, $s2, 1      # Decrement counter
    bnez $s2, print_array_unsign_loop # Continue until all elements are printed 
    lw $ra, 0($sp)        # Restore return address
    jr $ra

print_array_sign:
    addi $sp, $sp, -4     # Allocate stack space
    sw $ra, 0($sp)        # Save return address

print_array_sign_loop:
    lb $a3, 0($s1)        # Load number from array
    move $a1, $s0         # Move base to $a1
    bltz $a3, print_negative # Check if the number is negative
    jal print_base        # Print number in base (positive case)
    j print_sign_next     # Skip printing the '-' sign

print_negative:
    li $v0, 4             # Print "-" sign syscall
    la $a0, minus
    syscall
    neg $a3, $a3          # Convert to positive value
    jal print_base        # Print absolute value in base

print_sign_next:
    # Print separator
    li $v0, 4            
    la $a0, sep
    syscall
    addi $s1, $s1, 1      # Move to next element in array
    subi $s2, $s2, 1      # Decrement counter
    bnez $s2, print_array_sign_loop # Continue until all elements are printed 

    lw $ra, 0($sp)        # Restore return address
    addi $sp, $sp, 4      # Restore stack
    jr $ra
