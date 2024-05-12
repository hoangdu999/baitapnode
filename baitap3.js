// 1. Cho một mảng các số nguyên. Sử dụng forEach để in ra mỗi phần tử trong mảng.
const arr = [1, 2, 3, 4];
// arr.forEach((item) => {
//   console.log(item);
// });

// 2. Cho một mảng các số nguyên.
// Sử dụng map để tạo một mảng mới chứa bình phương của mỗi s

// const arr = [1, 2, 3, 4];
// const arr2 = arr.map((item) => {
//   return item * item;
// });
// console.log(arr2);

// 3. Cho một mảng các số nguyên. Sử dụng filter để tạo một mảng mới chứa các số lẻ.
// const arr2 = arr.filter((item) => item % 2 != 0);
// console.log(arr2);

// 4. Cho một mảng các số nguyên. Sử dụng every để kiểm tra
// xem tất cả các số có phải là số dương không.
// const allPositive = arr.every((item) => {
//   item > 0;
// });

// console.log(allPositive);

// 5. Cho một mảng các số nguyên. Sử dụng some để kiểm tra xem
// có số âm nào trong mảng không.
// const hasNegative = arr.some((item) => {
//   return item < 0;
// });
// console.log(hasNegative);

// 6. Cho một mảng các chuỗi. Sử dụng indexOf để tìm vị trí đầu tiên
// của một chuỗi cụ thể trong mảng.
const string = ["apple", "banana", "cherry", "date", "banana", "dating"];
// const index = string.indexOf("banana");
// console.log(index);

// 7. Cho một mảng các số nguyên. Sử dụng lastIndexOf để tìm vị trí cuối cùng
// của một số cụ thể trong mảng.

// const index = arr.lastIndexOf(1);
// console.log(index);

// 8. Cho một mảng các số nguyên. Sử dụng find để tìm số đầu tiên lớn hơn 10 trong mảng.
// const index = arr.find((x) => x > 10);
// console.log(index);

// 9. Cho một mảng các số nguyên. Sử dụng includes để kiểm tra xem số 5 có trong mảng không.

// const index = arr.includes(5);
// console.log(index);

// 10. Cho một mảng các số nguyên. Sử dụng reduce để tính tổng của các số trong mảng.
// const sum = arr.reduce((x, y) => x + y, 0);
// console.log(sum);

// Bài tập về Truthy, Falsy:
// 1. Viết một hàm kiểm tra xem một giá trị cho trước có phải là "truthy" hay không.
// function isTruthy(value) {
//   return !!value;
// }

// console.log(isTruthy(0));

// Bài tập về Spread Operator và Rest Parameter:

// 1. Viết một hàm nhận vào hai mảng và trả về một mảng mới chứa tất cả
//  các phần tử từ hai mảng gộp lại. Sử dụng spread operator để làm điều này.

// function mergeArrays(array1, array2) {
//   return [...array1, ...array2];
// }
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const mergedArray = mergeArrays(array1, array2);
// console.log(mergedArray);

// 2. Viết một hàm nhận vào nhiều tham số và trả về tổng của tất cả các tham số. Sử dụng rest
// parameter để cho phép hàm nhận vào số lượng tham số không xác định trước.
// function sum(...numbers) {
//   return numbers.reduce((total, current) => total + current, 0);
// }
// const totalSum = sum(1, 2, 3, 4, 5);
// console.log(totalSum);

// Bài tập vận dụng:
// 1. Cho 1 chuỗi ký tự, đếm số lần xuất hiện của từng ký tự
// function countCharacters(str) {
//   const charCount = {};
//   for (const char of str) {
//     if (charCount[char]) {
//       charCount[char]++;
//     } else {
//       charCount[char] = 1;
//     }
//   }
//   return charCount;
// }
// const result = countCharacters("hello world");
// console.log(result);

// 2. Tìm chuỗi con dài nhất không chứa ký tự trùng lặp
// Viết một hàm nhận vào một chuỗi và trả về độ dài của chuỗi con dài nhất mà không chứa bất kỳ ký tự nào được lặp lại.

function countCharacters(str) {
  let check = 0;
  const charCount = {};
  for (const char of str) {
    if (charCount[char]) {
      check = 1;
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  return check;
}
// const result = countCharacters("hello world");
// console.log(result);
var maxstring = "";
for (let index = 0; index < string.length; index++) {
  if (
    countCharacters(string[index]) == 0 &&
    string[index].length > maxstring.length
  ) {
    maxstring = string[index];
  }
}
console.log(maxstring);
