## PROBLEM 1
# Solution 1
def arrayCheck(nums):
    for i in range(len(nums)-2):
        if [1, 2, 3] == nums[i:i+3]:
            return True
    return False

# Solution 2
def arrayCheck(nums):
    for i in range(len(nums)-2):
        if (nums[i] == 1) and (nums[i+1] == 2) and (nums[i+2] == 3):
            return True
    return False

print("=== PROBLEM 1 ANS ===")
print(arrayCheck([1, 1, 2, 3, 1])) # True
print(arrayCheck([1, 1, 2, 4, 1])) # False
print(arrayCheck([1, 1, 2, 1, 2, 3])) # True


## PROBLEM 2
# Solution 1
def stringBits(str):
    return ''.join([str[i] for i in range(len(str)) if i % 2 == 0])

# Solution 2
def stringBits(str):
    return str[::2]

print("=== PROBLEM 2 ANS ===")
print(stringBits('Hello')) # 'Hlo'
print(stringBits('Hi')) # 'H'
print(stringBits('Heeololeo')) # 'Hello'


## PROBLEM 3
# Solution 1
def end_other(a, b):
    return (a[-len(b):].lower() == b.lower()) or (b[-len(a):].lower() == a.lower())

# Solution 2
def end_other(a, b):
    return b.lower().endswith(a.lower()) or a.lower().endswith(b.lower())

print("=== PROBLEM 3 ANS ===")
print(end_other('Hiabc', 'abc')) # True
print(end_other('AbC', 'HiaBc')) # True
print(end_other('abc', 'abXabc')) # True


## PROBLEM 4
def doubleChar(str):
    return ''.join([i*2 for i in str])

print("=== PROBLEM 4 ANS ===")
print(doubleChar('The')) # 'TThhee'
print(doubleChar('AAbb')) # 'AAAAbbbb'
print(doubleChar('Hi-There')) # 'HHii--TThheerree'


## PROBLEM 5
def no_teen_sum(a, b, c):
    return fix_teen(a) + fix_teen(b) + fix_teen(c)

# Solution 1 - fix_teen
def fix_teen(n):
    return 0 if (13 <= n <= 14) or (17 <= n <= 19) else n

# Solution 2 - fix_teen
def fix_teen(n):
    return 0 if n in [13, 14, 17, 18, 19] else n

print("=== PROBLEM 5 ANS ===")
print(no_teen_sum(1, 2, 3)) # 6
print(no_teen_sum(2, 13, 1)) # 3
print(no_teen_sum(2, 1, 14)) # 3


## PROBLEM 6
def count_evens(nums):
    return sum([1 for i in nums if i % 2 == 0])

print("=== PROBLEM 6 ANS ===")
print(count_evens([2, 1, 2, 3, 4])) # 3
print(count_evens([2, 2, 0])) # 3
print(count_evens([1, 3, 5])) # 0
