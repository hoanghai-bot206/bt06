
// Import các hàm từ file xulyDiem.js
const { tinhDiemTB, xepLoai } = require('./xulyDiem');

// Danh sách 3 sinh viên
const students = [
    {
        hoten: "Nguyễn Hoàng Hải",
        toan: 9,
        ly: 8,
        hoa: 9
    },
    {
        hoten: "Trần Quốc Huy",
        toan: 7,
        ly: 6,
        hoa: 8
    },
    {
        hoten: "Phạm Hoàng Hải",
        toan: 4,
        ly: 5,
        hoa: 4
    }
];

// Hiển thị kết quả
console.log("===== KẾT QUẢ HỌC TẬP SINH VIÊN =====");

students.forEach((student, index) => {

    // Tính điểm trung bình
    const diemTB = tinhDiemTB(
        student.toan,
        student.ly,
        student.hoa
    );

    // Xếp loại học tập
    const loai = xepLoai(diemTB);

    // Hiển thị thông tin
    console.log("\nSinh viên thứ:", index + 1);
    console.log("Họ tên:", student.hoten);
    console.log("Điểm trung bình:", diemTB.toFixed(2));
    console.log("Xếp loại:", loai);
});
