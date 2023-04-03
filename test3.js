/**
 * Cho dãy số A. Có bao nhiêu cặp n số không trùng nhau, 
 * liệt kê các cặp số đó. Ví dụ: A = 1,2,3. Khi n = 2 thì kết quả có 3 cặp số, 
 * danh sách: 1&2, 1&3, 2&3. 
 * Khi n = 3 thì kết quả có 1 cặp số là 1,2,3.
 */

const A = [1, 2, 7, 4 , 5];
const n = 4;
const pairs = findPairs(A, n);

function findPairs(A, n) {
    const arr = [];
    if (n === 1) {
      for (let i = 0; i < A.length; i++) {
        arr.push([A[i]]);
      }
    } else {
      for (let i = 0; i < A.length; i++) {
        const subArr = findPairs(A.slice(i+1), n-1);
        for (let j = 0; j < subArr.length; j++) {
          arr.push([A[i], ...subArr[j]]);
        }
      }
    } 
    return arr;
}  
console.log(`Số cặp ${n} số khác nhau là ${pairs.length}`);
console.log("Các cặp số là: ", pairs);
 