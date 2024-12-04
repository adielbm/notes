.data
array: .byte -128, 127, -127, -128, 0, -0, 100, -100, 32, -32
prompt: .asciiz "In what base to print (2-10)?"
buffer: .space 32
sep: .asciiz " "
newline: .asciiz "\n"
minus: .asciiz "-"

# msg
msg_sign: .asciiz "print_array_sign: "
msg_unsign: .asciiz "print_array_unsign: "
msg_sign_sum: .asciiz "sign_sum: "
msg_unsign_sum: .asciiz "unsign_sum: "

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
    
    # Print array signed
    li $v0, 4
    la $a0, msg_sign
    syscall
    la $s1, array        # Load address of the array
    li $s2, 10           # Set the number of elements in the array
    jal print_array_sign # Print array in the specified base
    li $v0, 4
    la $a0, newline
    syscall

    # Print array unsigned
    li $v0, 4
    la $a0, msg_unsign
    syscall
    la $s1, array        # Load address of the array
    li $s2, 10           # Set the number of elements in the array
    jal print_array_unsign # Print array in the specified base
    li $v0, 4
    la $a0, newline
    syscall


    # Print sum of array (signed)
    li $v0, 4
    la $a0, msg_sign_sum
    syscall
    la $s1, array        # Load address of the array
    jal sign_sum # Print sum of array
    li $v0, 4
    la $a0, newline
    syscall

    # Print sum of array (unsigned)
    li $v0, 4
    la $a0, msg_unsign_sum
    syscall
    la $s1, array        # Load address of the array
    jal unsign_sum # Print sum of array
    li $v0, 4
    la $a0, newline
    syscall

    # Exit
    li $v0, 10           # Exit syscall
    syscall

# Print a number in the given base
# args: $a1 = base, $a3 = number
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

print_array_unsign_LOOP:
    lbu $a3, 0($s1)       # Load number from array
    move $a1, $s0         # Move base to $a1
    jal print_base        # Print number in base
    # print sep
    li $v0, 4            
    la $a0, sep
    syscall
    addi $s1, $s1, 1      # Move to next element in array
    subi $s2, $s2, 1      # Decrement counter
    bnez $s2, print_array_unsign_LOOP # Continue until all elements are printed 
    lw $ra, 0($sp)        # Restore return address
    jr $ra

# print_array_sign: Print the array with a sign
print_array_sign:
    # allocate stack space and save return address
    addi $sp, $sp, -4     
    sw $ra, 0($sp)        
print_array_sign_LOOP:
    lb $a3, 0($s1)        # Load number from array
    move $a1, $s0         # Move base to $a1
    bgez $a3, print_POS # Check if the number is positive, if not:
    # Print "-" sign syscall
    li $v0, 4             
    la $a0, minus
    syscall
    neg $a3, $a3          # Convert to positive value
print_POS:
    jal print_base        # Print absolute value in base
print_sign_next:
    # Print separator
    li $v0, 4            
    la $a0, sep
    syscall
    addi $s1, $s1, 1      # Move to next element in array
    subi $s2, $s2, 1      # Decrement counter
    bnez $s2, print_array_sign_LOOP # Continue until all elements are printed 
    lw $ra, 0($sp)        # Restore return address
    addi $sp, $sp, 4      # Restore stack
    jr $ra

unsign_sum:
    li $a2, 1 # flag for unsigned
    # stack space allocation
    addi $sp, $sp, -4
    sw $ra, 0($sp)
    # call sign_sum
    jal sign_sum
    # restore return address and stack pointer
    lw $ra, 0($sp)
    addi $sp, $sp, 4
    # return to caller
    jr $ra

# sign_sum: Print the sum of the array
# args: 
#    $s1 = array address
#    $a2 = is_unsigned ? 1 : 0  
# $t0 = sum, $t1 = loop counter, $t2 = loop condition, $t3 = array element address, $t4 = array element
sign_sum:
    li $t0, 0           # Initialize sum
    li $t1, 0           # Initialize loop counter
sign_sum_LOOP:
    slti $t2, $t1, 10   # Check if $t1 < 10
    beq $t2, $zero, sign_sum_ENDLOOP # Exit loop if $t1 >= 10
    add $t3, $s1, $t1   # Calculate address of array element
    beqz $a2, SIGNED_MODE # If $a2 == 0, use signed mode
    lbu $t4, 0($t3)     # Load unsigned byte into $t4
    j ADD_TO_SUM
SIGNED_MODE:
    lb $t4, 0($t3)      # Load signed byte into $t4
ADD_TO_SUM:
    addu $t0, $t0, $t4  # Add element to sum
    addi $t1, $t1, 1    # Increment loop counter
    j sign_sum_LOOP     # Continue loop
sign_sum_ENDLOOP:
    addi $sp, $sp, -4   # Allocate stack space
    sw $ra, 0($sp)      # Save return address
    move $a3, $t0       # Move sum to $a3
    move $a1, $s0       # Move base to $a1
    bgez $a3, sign_sum_POS # If sum is positive, jump
    bnez $a2, sign_sum_POS # If unsigned, jump
    li $v0, 4           # Print "-" sign syscall
    la $a0, minus
    syscall
    neg $a3, $a3        # Convert sum to positive
sign_sum_POS:
    jal print_base      # Print sum in the specified base
    lw $ra, 0($sp)      # Restore return address
    addi $sp, $sp, 4    # Deallocate stack space
    jr $ra              # Return to caller
