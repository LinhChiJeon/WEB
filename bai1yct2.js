/*function validateInput() {
    var luongInput = document.getElementById('input-luong').value;
    // Kiểm tra xem giá trị nhập vào có phải là số không
    if (isNaN(luongInput) || luongInput <= 0 ) {
        document.getElementById('error-message').style.display = 'block'; // Hiển thị thông báo lỗi
        document.getElementById('input-luong').value = ''; // Xóa giá trị nhập sai
        document.getElementById('input-luong').focus(); // Di chuyển con trỏ văn bản vào ô nhập liệu
    } else {
        document.getElementById('error-message').style.display = 'none'; // Ẩn thông báo lỗi nếu nhập đúng
    }
}*/
function calcLuong() {
    var luong = document.getElementById("input-luong").value;
    var heSoLuong = document.getElementById("input-hsl").value;
    if (isNaN(luong) || luong <= 0 ) {
        alert('Vui lòng nhập số hợp lệ cho lương ');
        return;
    } 
    
        var totalLuong = Number(luong) * Number(heSoLuong);
        let tongluong = totalLuong.toFixed(2);
        document.getElementById("total-luong").innerHTML = tongluong;
    //var heSoLuong = document.getElementById("input-hsl").value;
    //var totalLuong = Number(luong) * Number(heSoLuong);
    //let tongluong = totalLuong.toFixed(2);
    
}
