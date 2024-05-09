// Bài 1: Sắp xếp mảng sau theo thứ tự độ tuổi giảm dần
// const arr = [
//   { name: 'name1', age: 12 },
//   { name: 'name2', age: 20 },
//   { name: 'name3', age: 15 },
//   { name: 'name4', age: 10 },
//   { name: 'name4', age: 27 }
// ]

// arr.sort((a, b) => b.age - a.age);
// console.log(arr);

// Bài 2: Viết code chuyển mảng đã sắp xếp ở bài 1 thành mảng tên
// VD: [‘name4’, ‘name2’, ‘name3’]

// const nameArray = arr.map(item => item.name);
// console.log(nameArray);

// Bài 3: Tạo 1 mảng có 100 phần tử toàn bộ là số 0,
// chuyển mảng vừa tạo thành mảng mới có giá trị từ 0->99,
// lọc ra những số chia hết cho 5 rồi tính tổng những số còn lại
// const arr = new Array(100).fill(0);

// var number = 0;
// for (let index = 0; index < arr.length; index++) {
//   arr[index] += number;
//   number++;
// }

// c2
// const newArr = arr.map((_, index) => index);

// console.log(arr);

// const filter = arr.filter((num) => num % 5 === 0);
// console.log(filter);

// const sum = filter.reduce((total, num) => total + num, 0);
// console.log(sum);





// Bài 4: Cho mảng sau
const arr=[
  { name: 'name1', count: 13 },
  { name: 'name3', count: 23 },
  { name: 'name1', count: 25 },
  { name: 'name2', count: 27 },
  { name: 'name3', count: 30 },
  { name: 'name2', count: 20 }
]

// Viết code nhóm các user có cùng name và cộng tổng số count thành một mảng mới
// VD:
// [
//   { name: 'name1', count: 38 },
//   { name: 'name3', count: 53 },
//   { name: 'name2', count: 47 }
// ]


const countByName = {};
arr.forEach(user => {
  if (countByName[user.name]) {
    countByName[user.name] += user.count;
  } else {
    countByName[user.name] = user.count;
  }
});

const result = Object.keys(countByName).map(name => ({
  name: name,
  count: countByName[name]
}));

console.log(result);
console.log(countByName)
