/**
 * No. 1 Hitung bilangan ganjil
 * @param n: A number to be calculated
 * @returns The number of odd numbers in the given number
 */
function hitungBilanganGanjil(n) {
  if (!Number.isFinite(n)) return "Error: `n` must be a number"
    return n % 2 === 0 ? n/2 : (n + 1) / 2;
}
console.log(hitungBilanganGanjil(11)); // 6
console.log(hitungBilanganGanjil(10)); // 5

/**
 * No. 2 Cek tahun kabisat
 * @param tahun: A year to be checked
 * @returns boolean whether the year is a leap year or not
 */
function cekTahunKabisat(tahun) {
  if (!Number.isFinite(tahun)) return "Error: `tahun` must be a number"
    return tahun % 4 === 0
}
console.log(cekTahunKabisat(2024)); // true

/**
 * No. 3 Hitung faktorial
 * @param n: A number to be calculated
 * @returns The factorial of the given number
 */
function hitungFaktorial(n) {
  if (!Number.isFinite(n)) return "Error: `n` must be a number"
  let ans = 1;
  for (i = 1; i<= n; i++) {
    ans *= i 
  }
  return ans
}
console.log(hitungFaktorial(5)); // 120


/**
 * No. 4 Cari bilangan prima
 * @param n: A number to be searched
 * @returns An array of prime numbers up to the given number
 */
function cariBilanganPrima(n) {
  if (!Number.isFinite(n)) return "Error: `n` must be a number"
  /**
   * Checks if a number is a prime number
   * @param {number} num The number to be checked
   * @returns {boolean} Whether the number is a prime number or not
   */
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
  
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
  
    return true;
  }
  const ans = Array(n).fill(0).map((_, i) => i + 1);
  return ans.filter(num => isPrime(num))
}
console.log(cariBilanganPrima(20)); // [2, 3, 5, 7, 11, 13, 17, 19]


/**
 * No. 5 Hitung jumlah digit
 * @param angka: A number to be calculated
 * @returns The number of digits in the given number
 */
function hitungJumlahDigit(angka) {
  if (!Number.isFinite(angka)) return "Error: `angka` must be a number"
  let ans = 0;
  while (angka > 0) {
    let lastDigit = angka % 10
    ans += lastDigit
    angka = Math.floor(angka/10)
  }
  return ans
}
console.log(hitungJumlahDigit(51)); // 6


/**
 * No. 6 Cek palindrom
 * Checks if a string is a palindrome
 * @param {string} kata The string to be checked
 * @returns {boolean} Whether the string is a palindrome or not
 */
function cekPalindrom(kata) {
  let kataInString = String(kata);
  let l = 0;
  let r = kataInString.length - 1;
  while (l !== r) {
    if (kataInString[l] !== kataInString[r]) {
      return false;
    }
    l++;
    r--;
  } 
  return true
}
console.log(cekPalindrom("kata")); // false
console.log(cekPalindrom("katak")); // true

/**
 * No. 7 Hitung pangkat
 * @param {number} angka A number to be calculated
 * @param {number} pangkat The power of the given number
 * @returns {number} The result of the given number with the given power
 */
function hitungPangkat(angka, pangkat) {
  if (!Number.isFinite(angka) && !Number.isFinite(pangkat)) return "Error: `angka` and `pangkat` must be a number"
  return angka ** pangkat
}
console.log(hitungPangkat(2, 5)); // 32


/**
 * No. 8 Deret Fibonacci
 * @param {number} n Number of sequences of Fibonacci
 * @returns {Array<number>} An array of Fibonacci sequences with the given length
 */
function deretFibonacci(n) {
  if (!Number.isFinite(n)) return "Error: `n` must be a number"
  let fibonacci = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci;
}

console.log(deretFibonacci(5)); // [0, 1, 1, 2, 3]
/**
 * No. 9 Hitung jumlah kata
 * @param kalimat: A statement that will be counted the number of words
 * @returns NUmber of words in the statement.
 */
function hitungJumlahKata(kalimat) {
  return String(kalimat).split(" ").length
}
console.log(hitungJumlahKata("Saya suka belajar JavaScript")); // 4

/**
 * No. 10 Cari bilangan terbesar
 * @param {Array<number>} arr An array of numbers
 * @returns {number} The largest number in the array
 */
function cariBilanganTerbesar(arr) {
  if (!Array.isArray(arr)) return "Error: `arr` must be an array"
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(cariBilanganTerbesar([1, 2, 3, 4, 5])); // 5

/**
 * No. 11 Hitung rata-rata
 * @param {Array<number>} arr An array of numbers
 * @returns {number} The average of the numbers in the array
 */
function hitungRataRata(arr) {
  if (!Array.isArray(arr)) return "Error: `arr` must be an array"
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}
console.log(hitungRataRata([1, 2, 3, 4, 5])); // 3  

/**
 * No. 12 Hitung jumlah vokal
 * @param {string} kata The string to be counted the number of vowels
 * @returns {number} The number of vowels in the string
 */
function hitungJumlahVokal(kata) {
  let kataInString = String(kata);
  let jumlahVokal = 0;
  const vokal = ['a', 'i', 'u', 'e', 'o'];
  for (let i = 0; i < kataInString.length; i++) {
    if (vokal.includes(kataInString[i].toLowerCase())) {
      jumlahVokal++;
    }
  }
  return jumlahVokal;
}
console.log(hitungJumlahVokal("Saya suka belajar JavaScript")); // 10

/**
 * No. 13 Cari faktor bilangan
 * @param n: A number to be calculated
 * @returns An array of numbers that are factors of the given number
 */
function cariFaktorBilangan(n) {
  if (!Number.isFinite(n)) return "Error: `n` must be a number"
  let ans = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      ans.push(i);
    }
  }
  return ans
}
console.log(cariFaktorBilangan(12)); // [ 1, 2, 3, 4, 6, 12 ]

/**
 * No. 14 Konversi suhu
 * @param {number} suhu A number to be converted
 * @param {string} satuan The unit of the given number
 * @returns {number} The converted number
 */
function konversiSuhu(suhu, satuan) {
  if (!Number.isFinite(suhu)) return "Error: `suhu` must be a number"
  if (satuan === "C") {
    return (suhu * 9/5) + 32;
  } else if (satuan === "F") {
    return (suhu - 32) * 5/9;
  } else {
    return "Error: `satuan` must be 'C' or 'F'";
  }
}
console.log(konversiSuhu(100, "C")); // 212

/**
 * No. 15 Hitung jumlah karakter unik
 * @param {string} str A string to be counted the number of unique characters
 * @returns {number} The number of unique characters in the string
 */
function hitungKarakterUnik(str) {
  if (typeof str !== "string") return "Error: `str` must be a string"
  const uniqueChars = new Set(str);
  return uniqueChars.size;
}
console.log(hitungKarakterUnik("hello")); // 4

/**
 * No. 16 Hitung kemunculan kata
 * @param {string} kalimat A sentence in which to count occurrences of the word
 * @param {string} kata The word to be counted
 * @returns {number} The number of times the word appears in the sentence
 */
function hitungKemunculanKata(kalimat, kata) {
  if (typeof kalimat !== "string" && typeof kata !== "string") return "Error: `kalimat` and `kata` must be a string"
  const words = kalimat.split(" ");
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === kata) {
      count++;
    }
  }
  return count;
}
console.log(hitungKemunculanKata("Saya suka makan nasi, saya juga suka minum air", "suka")); // 2

/**
 * No. 17 Cari bilangan ganjil terbesar
 * @param {Array<number>} arr An array of numbers
 * @returns {number} The largest odd number in the array
 */
function cariBilanganGanjilTerbesar(arr) {
  if (!Array.isArray(arr)) return "Error: `arr` must be an array"
  let maxOdd = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      if (maxOdd === null || arr[i] > maxOdd) {
        maxOdd = arr[i];
      }
    }
  }
  return maxOdd;
}
console.log(cariBilanganGanjilTerbesar([1, 2, 3, 4, 5])); // 5

/**
 * No. 18 Hitung jumlah digit genap
 * @param {number} angka A number to be calculated
 * @returns {number} The number of even digits in the given number
 */
function hitungJumlahDigitGenap(angka) {
  if (!Number.isFinite(angka)) return "Error: `angka` must be a number"
  let count = 0;
  while (angka > 0) {
    let digit = angka % 10;
    if (digit % 2 === 0) {
      count++;
    }
    angka = Math.floor(angka / 10);
  }
  return count;
}
console.log(hitungJumlahDigitGenap(1234567890)); // 5

/**
 * No. 19 Cari bilangan muncul sekali
 * @param {Array<number>} arr An array of numbers
 * @returns {Array<number>} An array of numbers that only appear once in the given array
 */
function cekAnagram(kata1, kata2) {
  if (typeof kata1 !== "string" && typeof kata2 !== "string") return "Error: `kata1` and `kata2` must be a string"
  const sortedKata1 = kata1.split("").sort().join("");
  const sortedKata2 = kata2.split("").sort().join("");
  return sortedKata1 === sortedKata2;
}
console.log(cekAnagram("listen", "silent")); // true
console.log(cekAnagram("hello", "world")); // false

/**
 * No. 20 Hitung huruf kapital
 * @param {string} kalimat A sentence to be counted the number of capital letters
 * @returns {number} The number of capital letters in the sentence
 */
function hitungHurufKapital(kalimat) {
  if (typeof kalimat !== "string") return "Error: `kalimat` must be a string"
  let count = 0;
  for (let i = 0; i < kalimat.length; i++) {
    if (kalimat[i] === kalimat[i].toUpperCase() && kalimat[i] !== " ") {
      count++;
    }
  }
  return count;
}
console.log(hitungHurufKapital("Saya Suka Belajar JavaScript")); // 4

/**
 * No. 21 Cari bilangan hilang
 * @param {Array<number>} arr An array of numbers
 * @returns {number} The missing number in the sequence
 */
function cariBilanganHilang(arr) {
  if (!Array.isArray(arr)) return "Error: `arr` must be an array"
  const n = arr.length + 1;
  const total = (n * (n + 1)) / 2;
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return total - sum;
}
console.log(cariBilanganHilang([1, 2, 3, 5])); // 4

/**
 * No. 22 Hitung jumlah hari
 * @param {Date} tanggal1 The first date
 * @param {Date} tanggal2 The second date
 * @returns {number} The number of days between the two dates
 */
function hitungJumlahHari(tanggal1, tanggal2) {
  if (!(tanggal1 instanceof Date) && !(tanggal2 instanceof Date)) return "Error: `tanggal1` and `tanggal2` must be a Date object"
  const timeDiff = Math.abs(tanggal2 - tanggal1);
  const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return dayDiff;
}
console.log(hitungJumlahHari(new Date("2023-01-01"), new Date("2023-12-31"))); // 30

/**
 * No. 23 Hitung kata unik
 * @param {string} kalimat A sentence to be counted the number of unique words
 * @returns {number} The number of unique words in the sentence
 */
function hitungKataUnik(kalimat) {
  if (typeof kalimat !== "string") return "Error: `kalimat` must be a string"
  const words = kalimat.split(" ");
  const uniqueWords = new Set(words);
  return uniqueWords.size;
}
console.log(hitungKataUnik("saya suka belajar javascript")); // 4

/**
 * No. 24 Cari bilangan muncul sekali
 * @param {Array<number>} arr An array of numbers
 * @returns {Array<number>} An array of numbers that only appear once in the given array
 */
function cariBilanganMunculSekali(arr) {
  if (!Array.isArray(arr)) return "Error: `arr` must be an array"
  const countMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (countMap[arr[i]]) {
      countMap[arr[i]]++;
    } else {
      countMap[arr[i]] = 1;
    }
  }
  const result = [];
  for (const key in countMap) {
    if (countMap[key] === 1) {
      result.push(Number(key));
    }
  }
  return result;
}
console.log(cariBilanganMunculSekali([1, 2, 3, 4, 5, 1, 2])); // [3, 4, 5]

/**
 * No. 25 Hitung jumlah karakter
 * @param {string} str A string to be counted the number of characters
 * @returns {number} The number of characters in the string
 */
function hitungKemunculanKarakter(str) {
  // Tulis kode di sini
  if (typeof str !== "string") return "Error: `str` must be a string"
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]]) {
      charCount[str[i]]++;
    } else {
      charCount[str[i]] = 1;
    }
  }
  return charCount;
}
console.log(hitungKemunculanKarakter("hello")); // { h: 1, e: 1, l: 2, o: 1 }

/**
 * No. 26 Hitung kemunculan karakter
 * @param {string} str A string to be counted the number of characters
 * @returns {Object<string, number>} An object with key as the character and value as the number of times it appears in the string
 */
function hitungKombinasi(n, r) {
  if (!Number.isFinite(n) && !Number.isFinite(r)) return "Error: `n` and `r` must be a number"
  const faktorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  };
  const kombinasi = faktorial(n) / (faktorial(r) * faktorial(n - r));
  return kombinasi;
}

console.log(hitungKombinasi(5, 2)); // 10







