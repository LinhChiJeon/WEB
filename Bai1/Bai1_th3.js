function Salary() {
    const Luong = document.getElementById("Luong").value;
    const Heso = document.getElementById("HeSoLuong").value;
    const show = document.querySelector("#result");

    // let ketqua = Luong * HeSo;
    // document.getElementsById("result").InnerText= ketqua;
    show.innerText = Luong*Heso;
}

//Dùng biểu thức chính quy ngăn người dùng nhập
 function regexLuong(){
    const NhapLuong = document.getElementById("Luong");
    const Luong = NhapLuong.value;

    //Số đầu tiên có thể từ 0-9 hoạc rỗng (dấu *), trong dấu ngoặc đơn là có thể dấu, hoặc . rồi đến 1 số từ 0- 9 . Và dấu? ở ngoài nghĩa ra có thể có hoặc không.
    const regex = /^[0-9]+([,.][0-9]+)?$/;

    if (!regex.test(Luong)) {

        NhapLuong.value = "";
        // alert("Nhập hệ số lương không hợp lệ");
    }
 }

 function regexHeSoLuong(){
    const NhapHeSoLuong = document.getElementById("HeSoLuong");
    const HeSo = HeSoLuong.value;

    //Số đầu tiên có thể từ 0-9 hoạc rỗng (dấu *), trong dấu ngoặc đơn là có thể dấu, hoặc . rồi đến 1 số từ 0- 9 . Và dấu? ở ngoài nghĩa ra có thể có hoặc không.
    const regex = /^[0-9]+([.,][0-9]+)?$/
    if (!regex.test(HeSo)) {

        HeSoLuong.value = "";
        // alert("Nhập hệ số lương không hợp lệ");
    }
 }