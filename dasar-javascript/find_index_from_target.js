function findIndex(nums, target) {
  // telusuri seluruh angka yang ada di array nums
	for (let i = 0; i < nums.length; i++) {
    // jika target sama dengan nums[i]
    if (target === nums[i]) {
      return i; // kembalikan index nya
    }
  }
  // jika target tidak ditemukan, kembalikan -1
  return -1;
}

console.log(findIndex([10,2,3,5,9,7], 9))