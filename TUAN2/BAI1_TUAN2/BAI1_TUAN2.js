function tinhLuong(){
    let luong=parseFloat(document.getElementById("luong").value);
    let hsLuong=parseFloat(document.getElementById("hsluong").value);
    let luongNhanVien = luong * hsLuong;
    document.getElementById("1").innerHTML = luongNhanVien; //thuc hien lenh in ket qua o ptu co id ="1"  
    if(luong<0||hsLuong<0){
        document.getElementById("1").innerHTML ="Luong hoac hs luong khong duoc la so am";
    }
    if(isNaN(luong)||isNaN(hsLuong)){
        document.getElementById("1").innerHTML ="Vui long nhap luong hoac he so luong";
    }
}
// NGAN NGUOI DUNG NHAP SAI