def find_missing_number(arr):
    min_val = min(arr)
    max_val = max(arr)

    expected_count = max_val - min_val + 1
    expected_sum = (min_val + max_val) * expected_count // 2
    actual_sum = sum(arr)

    return expected_sum - actual_sum

user_input = input("Masukkan angka (pisahkan dengan koma): ")

arr = list(map(int, user_input.split(",")))

hasil = find_missing_number(arr)
print("Angka yang hilang adalah:", hasil)
