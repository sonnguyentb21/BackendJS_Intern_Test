/**
 * Cho dãy số tự nhiên A. 
 * Cài đặt chương trình sắp xếp dãy số A từ nhỏ đến lớn 
 * và loại bỏ số không phải là số nguyên tố.
 */

const A = [1,4,7,5,6,15,2,14,19]

//Sắp xếp dãy số a từ nhỏ tới lớn dùng hàm sort() trong JS
A.sort((a,b) => a - b );

// Hàm kiểm tra số nguyên tố
function isPrime(num) {
    if(num < 2){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
}
// Lọc ra các số nguyên tố trong mảng A dùng hàm filter()
const primes = A.filter((num) => isPrime(num));
console.log('Dãy số A được sắp xếp theo thứ tự từ nhỏ đến lớn: ', A);
console.log('Dãy số nguyên tố trong mảng A: ', primes);
