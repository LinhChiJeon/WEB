function Salary() {
    const Luong = document.getElementById("Luong").value;
    const Heso = document.getElementById("HeSoLuong").value;
    const show = document.querySelector("#result");
    // let ketqua = Luong * HeSo;
    // document.getElementsById("result").InnerText= ketqua;
    show.innerText = Luong*Heso;
}


// ko cho người dùng nhập số âm - theo addEventListener
document.getElementById("HeSoLuong").addEventListener("input", function() {
    const HesoInput = parseFloat(this.value);
    if (HesoInput < 0) {
        // Nếu người dùng nhập số âm, xóa giá trị nhập vào
        this.value = "";
    }
})


// không cho người dùng nhập số âm - theo Dom Event
function avoidUser(){
    const NhapLuong = document.getElementById("Luong");
    const Luong = parseFloat(NhapLuong.value);
    if (Luong < 0)
    {
       NhapLuong.value = "";
    }
}

