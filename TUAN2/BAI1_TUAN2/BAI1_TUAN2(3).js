
function tinhLuong() {
    let luong = parseFloat(document.getElementById("luong").value);
    let hsLuong = parseFloat(document.getElementById("hsluong").value);
    let luongNhanVien = luong * hsLuong;
    document.getElementById("1").innerHTML = luongNhanVien;
    if(isNaN(luong)||isNaN(hsLuong)){
      document.getElementById("1").innerHTML ="Vui long nhap luong hoac he so luong";
  }
} 
  document.getElementById("luong").oninput = function() { // truy cập đến phần tử có id là "luong", khi ng dùng nhập hoặc xóa ký tự trong"luong",
// biến oninput đc kích hoạt và hàm (function()) được thực thi 
    
    var value = this.value; //đc sử dụng để lấy trị hiện tại của ptu HTML đc gán vào hàm input (lay gtri hiện tại của ptu"luong" và lưu vào biến value)
    if (!/^[0-9]+$/.test(value)) {
      alert("Luong phai la so.");
      this.value = "";
      //Đặt giá trị của phần tử "luong" thành chuỗi rỗng. Điều này xóa giá trị không hợp lệ mà người dùng đã nhập vào trường "luong" 
      //và ngăn người dùng nhập các ký tự không phải số vào trường này.
    }
  };
  document.getElementById("hsluong").oninput = function() {
    var value = this.value;
    if (!/^[0-9]+$/.test(value)) {
      alert("He so luong phai la so.");
      this.value = "";
    }
  };
  // NGAN NGUOI DUNG NHAP SAI BANG REGEX