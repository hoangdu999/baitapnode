//============================ bt1

// const cart = [
//   {
//     title: "DẾ MÈN PHIÊU LƯU KÝ",
//     price: 50000,
//     quantity: 2,
//   },
//   {
//     title: "KIM ĐỒNG",
//     price: 40000,
//     quantity: 7,
//   },
//   {
//     title: "NGỌN LỬA ĐÊM BA MƯƠI",
//     price: 21000,
//     quantity: 4,
//   },
//   {
//     title: "CÔ BÉ GANH TỊ",
//     price: 27500,
//     quantity: 5,
//   },
// ];
// var sum=0;
// cart.forEach(element => {
//    sum += element.price * element.quantity
// });
// console.log(sum);

// Bài 2: Nhóm các cầu thủ theo quốc gia

// const team = [
//   { name: "Công Phượng", country: "Việt Nam" },
//   { name: "Ronaldo", country: "Portugal" },
//   { name: "Quang Hải", country: "Việt Nam" },
//   { name: "Messi", country: "Argentina" },
//   { name: "Nani", country: "Portugal" },
// ];

// const groupedByCountry = {};

// for (const player of team) {
//   const { name, country } = player;
//   if (!groupedByCountry[country]) {
//     groupedByCountry[country] = [];
//   }
//   groupedByCountry[country].push({ name, country });
// }

// console.log(groupedByCountry);

// Bài 3: Gom các object của posts thành mảng posts
// const topics = [
//   {
//     topic: "ReactJS",
//     posts: [
//       { postID: "id1", title: "title1" },
//       { postID: "id2", title: "title2" },
//     ],
//   },
//   {
//     topic: "Vue.js",
//     posts: [
//       { postID: "id3", title: "title3" },
//       { postID: "id4", title: "title4" },
//     ],
//   },
// ];

// // aray=[];
// // topics.forEach(item=>{
// //   item.posts.forEach(postitem=>{
// //     aray.push(postitem)
// //   })
// // })
// // console.log(aray);

// // c2
// const posts = topics.flatMap(topic => topic.posts);
// console.log(posts);

// Bài 4: Tính tổng và tích của mảng
// const arr = [49, 30, 19, 2, 29];
// var tong =0;
// var tich =1 ;
// arr.forEach(item =>{
//   tong+= item;
//   tich*= item;
// })

// console.log(tong);
// console.log(tich);

// Bài 5: Tìm phần tử khác nhau giữa 2 mảng
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [2, 3, 6];

// const arr3 = [...arr1.filter(item => !arr2.includes(item)), ...arr2.filter(item => !arr1.includes(item))]

// console.log(arr3);




// Bài 6: Làm phẳng mảng
// const arrFlat = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
// const posts = arrFlat.flat(Infinity);
// console.log(posts);


// Bài 7: Đến số lần xuất hiện các phần tử trong mảng
const arrCount = [1, 2, 3, 4, 5, 2, 3, 4, 2, 2, 7, 8, 8];
const countMap = {};

arrCount.forEach(item => {
    if (countMap[item]) {
        countMap[item]++;
    } else {
        countMap[item] = 1;
    }
});

console.log(countMap);

