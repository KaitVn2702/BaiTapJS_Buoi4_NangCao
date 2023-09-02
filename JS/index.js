// Bài Tập 1: Chương Trình Tính Ngày tiếp theo và ngày trước đó
// B1: Xác Định Biến: 
// + Gồm có: Ngày, Tháng Năm,
function findNextAndPrev() {
    // B1: Xác Định Input:
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    // B2: Hướng xử lí:
    let date = new Date(year, month - 1, day);

    let nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + 1);

    let prevDate = new Date(date);
    prevDate.setDate(prevDate.getDate() - 1);
    // B3: Xuất kết quả:
    document.getElementById("result").innerHTML = "Ngày tiếp theo: " + nextDate.getDate() + "/" + (nextDate.getMonth() + 1) + "/" + nextDate.getFullYear() + "<br>" + "Ngày trước đó: " + prevDate.getDate() + "/" + (prevDate.getMonth() + 1) + "/" + prevDate.getFullYear();
}
// -------------------------------------------------------------//
// Bài Tập 2: Chương Trình Khai Tháng Nhập Có Bao Nhiêu Ngày
// B1: Xác Định Biến: 
// + Gồm có: Ngày, Tháng Năm,
function calculate() {
    // B1: Xác Định Input
    var date = new Date(document.getElementById("date").value);
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    // B2: Hướng xử lý: 
    var daysInMonth = new Date(year, month, 0).getDate(); //tạo một đối tượng Date mới với ngày được đặt thành 0. Khi đối số ngày được đặt thành 0, nó sẽ trả về ngày cuối cùng của tháng trước đó. Vì vậy, chúng ta có thể lấy số ngày trong tháng bằng cách lấy giá trị ngày của đối tượng Date mới này.
    // B3: Xuất kết quả
    document.getElementById("result2").innerHTML =
        "Tháng " + month + " năm " + year + " có " + daysInMonth + " ngày.";
}
// ----------------------------------------------------------------//
// Bài Tập 3: Chương Trình Nhập Số Nguyên 3 Chữ Số Và In Ra Cách Đọc

function readNumber() {
    var soNguyen = document.getElementById("soNguyen").value;
    var result3 = document.getElementById("result3");
    var ones = [
        "",
        "một",
        "hai",
        "ba",
        "bốn",
        "năm",
        "sáu",
        "bảy",
        "tám",
        "chín",
    ];
    var tens = [
        "",
        "mười",
        "hai mươi",
        "ba mươi",
        "bốn mươi",
        "năm mươi",
        "sáu mươi",
        "bảy mươi",
        "tám mươi",
        "chín mươi",
    ];
    var hundreds = [
        "không trăm",
        "một trăm",
        "hai trăm",
        "ba trăm",
        "bốn trăm",
        "năm trăm",
        "sáu trăm",
        "bảy trăm",
        "tám trăm",
        "chín trăm",
    ];
    var n = parseInt(soNguyen);
    if (n >= 100 && n <= 999) {
        var h = Math.floor(n / 100);
        var t = Math.floor((n % 100) / 10);
        var o = n % 10;
        result3.innerHTML = `Output: ${hundreds[h]} ${tens[t]} ${ones[o]}`
    } else {
        result3.innerHTML = "Vui lòng nhập số nguyên có 3 chữ số";
    }
}
// --------------------------------------------------------//
// Bài Tập 4: Chương Trình Nhập Tọa Độ Và So Sáng Khoảng Cách
function calculateDistance(x1, y1, z1, x2, y2, z2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2));
}

document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name1 = document.getElementById("name1").value;
    let x1 = document.getElementById("x1").value;
    let y1 = document.getElementById("y1").value;
    let z1 = document.getElementById("z1").value;

    let name2 = document.getElementById("name2").value;
    let x2 = document.getElementById("x2").value;
    let y2 = document.getElementById("y2").value;
    let z2 = document.getElementById("z2").value;

    let name3 = document.getElementById("name3").value;
    let x3 = document.getElementById("x3").value;
    let y3 = document.getElementById("y3").value;
    let z3 = document.getElementById("z3").value;

    let schoolX = document.getElementById("schoolX").value;
    let schoolY = document.getElementById("schoolY").value;
    let schoolZ = document.getElementById("schoolZ").value;

    let distance1 = calculateDistance(x1, y1, z1, schoolX, schoolY, schoolZ);
    let distance2 = calculateDistance(x2, y2, z2, schoolX, schoolY, schoolZ);
    let distance3 = calculateDistance(x3, y3, z3, schoolX, schoolY, schoolZ);

    if (distance1 > distance2 && distance1 > distance3) {
        document.getElementById("result4").innerHTML = name1 + " là sinh viên có khoảng cách từ nhà tới trường xa nhất";
    } else if (distance2 > distance1 && distance2 > distance3) {
        document.getElementById("result4").innerHTML = name2 + " là sinh viên có khoảng cách từ nhà tới trường xa nhất";
    } else {
        document.getElementById("result4").innerHTML = name3 + " là sinh viên có khoảng cách từ nhà tới trường xa nhất";
    }
});