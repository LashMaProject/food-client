import Food from "../../data/food.js";

function findFood(name) {
    return Food.find(food => food.name === name);
}

console.log(findFood("Bánh Mì"));

//	•	Trộn đều các nguyên liệu, nhào bột và ủ bột.
// •	Tán bột thành hình chữ nhật, cuộn tròn lại và cắt thành từng ổ bánh.
// •	Nướng bánh trong lò đến khi vàng đều.
