
// Hàm tính điểm trung bình 3 môn
function tinhDiemTB(toan, ly, hoa) {
    return (toan + ly + hoa) / 3;
}

// Hàm xếp loại học tập
function xepLoai(diemTB) {
    if (diemTB >= 8) {
        return "Giỏi";
    } else if (diemTB >= 6.5) {
        return "Khá";
    } else if (diemTB >= 5) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}

// Xuất các hàm ra ngoài
module.exports = {
    tinhDiemTB,
    xepLoai
};
