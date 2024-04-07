function displayDate(){
    let currentDay = new Date();
    let day = currentDay.getDay();
    let month=currentDay.getMonth()+1;// trong js , cac thang se hien thi tu 0-11 ( lech 1 so vs thang thuc)
    let year=currentDay.getFullYear();
    let hour=currentDay.getHours();
    let min=currentDay.getMinutes();

    let day_in_a_week = ['Chủ nhật','Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7']; // khai bao 1 mang
    let date_time = day_in_a_week[currentDay.getDay()] // ham getDay tra ve tu [0,6] tuong ung voi cac thu trong mang
    +", " + day +"/"+ month + "/" + year + ", "
    + hour +":" + min ;
    document.getElementById("time").innerHTML = date_time;
}
function addFood(){
    var table = document.getElementById("table");
    var table_value = table.value;
    var ban,sum;
    switch(table_value){
        case "1":
            ban=document.getElementById("ban1");
            sum=document.getElementById("tong_tien_ban1");
            break;
        case "2":
            ban=document.getElementById("ban2");
            sum=document.getElementById("tong_tien_ban2");
            break;
        case "3":
            ban=document.getElementById("ban3");
            sum=document.getElementById("tong_tien_ban3");
            break;
    } 
    var food = document.getElementById("food");
    var food_value = food.value; //=> no chi hien thi value thoi, dung de in slCell
    var food_text=food.options[food.selectedIndex].text; // dung de in ten mon an thay vi value
    var tableRow = ban.insertRow(1); // insert vao hang t2
    var foodCell =tableRow.insertCell(0) // insert vao o thu 1 cua hang can insert
    var slCell = tableRow.insertCell(1);
    var priceCell = tableRow.insertCell(2);
    var deleteButtonCell = tableRow.insertCell(3);
    foodCell.innerHTML = food_text;
    // slCell.innerHTML = "<input type='number' value='1' min='1' style='width:30px' onchange='updatePrice(this)'>";
    switch(food_value){   
        case "bun_bo": 
            priceCell.innerHTML=20000;
            break;
        case "hu_tieu":
            priceCell.innerHTML= 18000;
            break;
        case "banh_canh":
            priceCell.innerHTML=17000;
            break;
        case "pho_bo":
            priceCell.innerHTML=19000;
            break;
        case "nui":
            priceCell.innerHTML= 15000;
            break;
        case "banh_my_thit":
            priceCell.innerHTML=12000;
            break;
        case "banh_cuon":
            priceCell.innerHTML=15000; 
            break;
    }
    priceCell.setAttribute("original-price", priceCell.innerHTML); // gan gia tri ban dau cho thuoc tinh "original-price"
    slCell.innerHTML = "<input type='number' value='1' min='1' style='width:30px' onchange='updatePriceOfAFood(this)'>"; // su kien onchange de cap nhat gia tien khi thay doi so luong
    deleteButtonCell.innerHTML = "<button onclick='deleteRow(this.parentNode.parentNode)'>Xóa</button>"; // this.parentNode de cap den cell can xoa, this.parentNode la de xoa button, this.parentNode la de xoa ptu cha cua button (xoa nguyen dong)
    updateTotal();
}
function deleteRow(row) { // tham chieu den row can xoa
        row.parentNode.removeChild(row); //removeChild(row) la 1 pthuc cua ptu cha (row.parentNode), dc dung de xoa ptu con khoi cay
        updateTotal();
}
function updatePriceOfAFood(input) {
    var row = input.parentNode.parentNode; // Lay ptu cha cua input(SL)
    var priceCell = row.cells[2]; // Cot gia tien
    var original_price = parseFloat(priceCell.getAttribute("original-price")); // Gia tien ban dau
    var quantity = parseInt(input.value); // Số lượng mới
    
    var newPrice = original_price * quantity; // Tính giá tiền mới
    
    priceCell.innerHTML = newPrice; // Cập nhật giá tiền mới
   
    updateTotal(); // Cập nhật tổng tiền
}
function updateTotal() {
    var ban1Total = calculateTableTotal("ban1");
    var ban2Total = calculateTableTotal("ban2");
    var ban3Total = calculateTableTotal("ban3");
    document.getElementById("tong_tien_ban1").innerHTML = ban1Total+'đ';
    document.getElementById("tong_tien_ban2").innerHTML = ban2Total+'đ';
    document.getElementById("tong_tien_ban3").innerHTML = ban3Total+'đ';
}
function calculateTableTotal(tableId) {
    var tableTotal = 0;
    var table = document.getElementById(tableId);
    var tableRows = table.getElementsByTagName("tr");
    for (var i = 1; i < tableRows.length - 1; i++) { // Vong lap bat dau tu hang thu 2, va ket thuc o hang tren "tong tien"
        var cells = tableRows[i].getElementsByTagName("td"); // lay tat ca cac cell element cua hang i 
        if (cells.length > 2) { // đảm bảo rằng mỗi hàng có ít nhất 3 ô, vì mình đang truy cập ô thứ 3 để lấy giá,
            //nếu k có điều kiện thì nếu 1 hàng chỉ có 2 ô, nó sẽ truy xuất đến ô thứ 3 tức là undefined
            var priceText = cells[2].textContent; // gán giá trị văn bản (không phải HTML) của ô thứ ba trong hàng hiện tại vào biến priceText
            var price = parseFloat(priceText); //chuyển đổi chuỗi priceText thành một số thực (floating-point number). 
            tableTotal += price;      
        }
    }
    return tableTotal;
}
function billPage(tableId){ // tham so truyen vao la id "ban1" "ban2" "ban3"
    var newWindow = window.open('hoadon.html'); // Đợi trang web mới tải xong để tránh lỗi  
    newWindow.onload = function() {
        // In thông tin nv + tgian
        var employeeInfo = document.getElementById("employee").innerHTML;
        var timeInfor = document.getElementById("time").innerHTML;
        newWindow.document.getElementById("employee_in4").innerHTML = employeeInfo;      
        newWindow.document.getElementById("date_of_bill").innerHTML=timeInfor;
        // in bàn 
        var tableNumber;
        switch (tableId) {
            case "ban1":
                tableNumber = "Số 1"; // in so ban 
                break;
            case "ban2":
                tableNumber = "Số 2";
                break;
            case "ban3":
                tableNumber = "Số 3";
                break;
        }
        newWindow.document.getElementById("number_of_table").innerHTML = tableNumber; 
        // in bảng hóa đơn
        var table = document.getElementById(tableId); 
        var tableRows= table.getElementsByTagName("tr"); // khai báo mangr tableRows với giá trị là các hàng trong bảng
       
        var total = 0; // Khởi tạo biến tổng tiền
        var rowsHtml = ""; // Biến để lưu trữ các hàng mới
        for (var i = 1; i < tableRows.length - 1; i++) { // bắt đầu duyệt với bắt đầu là hàng thứ 2 của bảng (hàng thức ăn đầu tiên) kết thúc là hàng hóa đơn cuối
            var cells = tableRows[i].getElementsByTagName("td"); // mỗi lần lặp, sẽ có biến cells lưu trữ các ô của hàng
                rowsHtml += "<tr>"; // bắt đầu tạo 1 hàng mới
                for (var j = 0; j < cells.length-1; j++) { 
                    
                    if (j == 1) { // Ô chứa input số lượng thì ta truy suất dựa liệu = cách lấy value, nếu dùng textContent sẽ k in ra đc
                        rowsHtml += "<td>" + cells[j].querySelector("input").value + "</td>";
                    }  
                    
                    else { // nếu là các ô món ăn thì tiến hành in text ra 
                        rowsHtml += "<td>" + cells[j].textContent + "</td>";
                    } // phải đặt else ở giưa bởi vì nếu đặt else ở cuối thì phải đến khi j==2 không đúng 
                    //thì else mới đc thực thi, nó sẽ bỏ qua việc xủ ly trường hợp j==1 => k đúng
                    
                    if (j == 2) { // Nếu là ô chứa giá tiền
                        total += parseFloat(cells[j].textContent); // chuyển đổi thành số thực và Cộng dồn vào tổng tiền
                    }                   
                }
                rowsHtml += "</tr>"; // kết thúc hàng trong chuỗi rowsHtml
        }            
        newWindow.document.getElementById("bill_table").innerHTML += rowsHtml; // Cập nhật nội dung HTML của bảng mới một lần sau vòng lặp      
        newWindow.document.getElementById("bill_total").textContent = total+'đ';    // Hiển thị tổng tiền trên bảng hóa đơn    
    };    
}
