from itertools import permutations

def generate(nums):
    if len(nums) == 1:
        yield str(nums[0]), nums[0]
        return
    
    for i in range(1, len(nums)):
        left = nums[:i]
        right = nums[i:]
        
        for exp1, val1 in generate(left):
            for exp2, val2 in generate(right):
                yield f"({exp1} + {exp2})", val1 + val2
                yield f"({exp1} - {exp2})", val1 - val2
                yield f"({exp1} * {exp2})", val1 * val2


def find_formula(nums, target):
    for perm in permutations(nums):
        for exp, val in generate(list(perm)):
            if val == target:
                # Bersihkan kurung luar
                if exp.startswith("(") and exp.endswith(")"):
                    exp = exp[1:-1]
                return exp
    return "Tidak ada formula yang cocok."

def input_array():
    raw = input("Masukkan angka (pisahkan dengan spasi): ")
    return list(map(int, raw.split()))

nums = input_array()
target = int(input("Target: "))

print("\nMencari formula...")
hasil = find_formula(nums, target)
print("Output:", hasil)
