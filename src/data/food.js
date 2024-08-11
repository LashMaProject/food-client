const Food = [
    {
        name: "Bánh Bèo",
        name2: "Banh Beo",
        describe: "Loại bánh mì đặc trưng của Việt Nam, thường dùng để kẹp các loại nhân như pate, chả lụa, thịt nướng, rau sống.",
        ingredients: [
            "Bột mì",
            "Men nở",
            "Đường",
            "Muối",
            "Sữa",
            "Bơ",
        ]

    },
    {
        name: "Bánh Bột Lọc",
        describe: "Loại bánh mì đặc trưng của Việt Nam, thường dùng để kẹp các loại nhân như pate, chả lụa, thịt nướng, rau sống.",
        ingredients: [
            "Bột mì",
            "Men nở",
            "Đường",
            "Muối",
            "Sữa",
            "Bơ",
        ]

    }

]

function findFood(name) {
    return Food.find(food => food.name === name);
}


console.log(findFood("Banh Beo"));

//	•	Trộn đều các nguyên liệu, nhào bột và ủ bột.
// •	Tán bột thành hình chữ nhật, cuộn tròn lại và cắt thành từng ổ bánh.
// •	Nướng bánh trong lò đến khi vàng đều.
