function tinhLuong() {
    var luong = parseInt(document.getElementById("luong").value);
    var hsluong = parseFloat(document.getElementById("hsluong").value);
    var luongThang = luong * hsluong;
    var luongNhanVien = document.getElementById("1");

    var regex = /^[0-9]+$/; 
// ^ là một ký tự đặc biệt trong biểu thức chính quy và chỉ định rằng mẫu phải khớp với đầu chuỗi. Nghĩa là chuỗi phải bắt đầu bằng mẫu được đặc tả sau dấu ^.
// [0-9] là một phạm vi ký tự trong dấu ngoặc vuông []. Trong trường hợp này, phạm vi 0-9 đại diện cho tất cả các chữ số từ 0 đến 9. Nó chỉ cho phép các chữ số từ 0 đến 9 xuất hiện trong chuỗi.
// + là một ký tự đặc biệt trong biểu thức chính quy và chỉ định rằng mẫu phải khớp với một hoặc nhiều ký tự trong phạm vi trước đó. Trong trường hợp này, nó áp dụng cho phạm vi [0-9], cho phép xuất hiện một hoặc nhiều chữ số trong chuỗi. Điều này đảm bảo rằng chuỗi không được để trống và phải chứa ít nhất một chữ số.
// $ là một ký tự đặc biệt trong biểu thức chính quy và chỉ định rằng mẫu phải khớp với cuối chuỗi. Nghĩa là chuỗi phải kết thúc bằng mẫu được đặc tả trước dấu $.
    if (regex.test(luong) && regex.test(hsluong)) {
      luongNhanVien.innerHTML = luongThang;
    } else {
      luongNhanVien.innerHTML = "luong va he so luong phai la so";
    }
    if(luong<0){
            document.getElementById("1").innerHTML = "Luong k dc la so am";
            return; 
    }
  }

  // KHI NHAP SAI THI YEU CAU NGUOI DUNG NHAP LAI