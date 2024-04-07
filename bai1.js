/*const luong= document.getElementById("input-luong");
const heSoLuong = document.getElementById("input-hsl");
const nut = documen.querySelector(".Nut");*/
function calcLuong() {
    var luong = document.getElementById("input-luong").value;
    var heSoLuong = document.getElementById("input-hsl").value;
    var totalLuong = Number(luong) * Number(heSoLuong);
    let tongluong = totalLuong.toFixed(2);
    document.getElementById("total-luong").innerHTML = tongluong;
}
