function Salary() {
    const Luong = document.getElementById("Luong").value;
    const Heso = document.getElementById("HeSoLuong").value;
    const show = document.querySelector("#result");

    // let ketqua = Luong * HeSo;
    // document.getElementsById("result").InnerText= ketqua;
    show.innerText = Luong*Heso;
}





//Thông báo khi người dùng nhập sai Lương
function attentionSalary(){
    const NhapLuong = document.getElementById("Luong");
    const Luong = parseFloat(NhapLuong.value)
    if(Luong < 0){
        NhapLuong.value = "";
        alert("Nhập lương không hợp lệ");
    }
}

//Thông báo khi người dùng nhập sai hệ số lương
function attentionHeso(){
    const NhapHeSo = document.getElementById("HeSoLuong");
    const inputHeSo = parseFloat(NhapHeSo.value);
    if(inputHeSo < 0){
        NhapHeSo.value = "";
        alert("Nhập hệ số lương không hợp lệ");
    }
}