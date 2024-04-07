function calcLuong() {
    var luong = document.getElementById("input-luong").value;
    var pattern = /^[0-9]+$/;
    // Kiểm tra xem dữ liệu nhập vào có khớp với biểu thức chính quy không
        if (!luong.match(pattern)) {
            alert('Vui lòng nhập số hợp lệ cho lương ');
        return; 
        }
    var heSoLuong = document.getElementById("input-hsl").value;
    var totalLuong = Number(luong) * Number(heSoLuong);
    let tongluong = totalLuong.toFixed(2);
    document.getElementById("total-luong").innerHTML = tongluong;
}