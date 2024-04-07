//  document.getElementById("Calc").onclick = function Tinhluong(){
// //      const Luong = document.getElementById("Luong");
//     const Heso = document.getElementById("HeSoLuong");
//     const show = document.querySelector("#result");
//     // let ketqua = Luong * HeSo;
//     // document.getElementsById("result").InnerText= ketqua;
//     show.innerText = (parseFloat(Luong.value)*parseFloat(Heso.value)).toFixed(2);
// };


//cách 2
function Salary() {
    const Luong = document.getElementById("Luong").value;
    const Heso = document.getElementById("HeSoLuong").value;
    const show = document.querySelector("#result");
    // let ketqua = Luong * HeSo;
    // document.getElementsById("result").InnerText= ketqua;
    show.innerText = Luong*Heso;
}





