function minimal(a, b) {
  // jika nilai a dan nilai b sama, maka kembalikan nilai a nya
	if (a === b) {
    return a;
  }

  // menggabungkan nilai a dan b kedalam satu array
  let spread = [a, b];
  
  // mengambil pointer index 0
  for (let i = 0; i < spread.length; i++) {
    // mengambil pointer index 1
    for (let j = i+1; j < spread.length; j++) {
      // cek apakah pointer index 0 < pointer index 1
      if (spread[i] < spread[j]) {
        return spread[i]; // kembalikan nilai pointer ke-0
      }
      // jika gagal, kembalikan nilai pointer ke-1
      return spread[j];
    }
  }
}

console.log(minimal(1102, 1119))