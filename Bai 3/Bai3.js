function updateTime() {
    var today = new Date();
    var days = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    var dayOfWeek = days[today.getDay()];
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    if(day < 10){
        day = '0' + day;
    }
    if (month < 10){
        month = '0' + month;
    }
    var date = day + "/" + month + "/" + year;
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = dayOfWeek +' '+ date + ', ' + time;

    var timeElement = document.querySelector('#Time');
    timeElement.innerHTML = dateTime;
}

// Gọi hàm updateTime mỗi giây để cập nhật thời gian
setInterval(updateTime, 1000);

// Lấy tham chiếu đến các phần tử HTML
var tableSelect = document.getElementById("table_number");
var foodSelect = document.getElementById("food_Name");

// Gắn sự kiện change cho drop-down chọn món ăn
document.addEventListener("DOMContentLoaded", function() {
    var table_Select = document.getElementById("table_number");
    var food_Select =  document.getElementById("food_Name");
    food_Select.addEventListener('change',function(){
        var table_Selected = table_Select.value; //lấy số bàn (1,2,3)
        var food_Selected = food_Select.options[food_Select.selectedIndex].text; //lấy tên món ăn
        var food_Price = food_Select.value; //lấy giá tiền

        //Tham chiếu đến bàn được chọn
        var table_Repceipt = document.querySelector('.table_receipt_' + table_Selected); 
        //Tham chiếu đến nốt cha của total_Money là <tr>
        var totalRow = table_Repceipt.querySelector('.total_Money').parentNode;
        // Tạo một hàng mới
       

  

        //Kiểm tra xem món đã có trong bàn đó hay chưa.
        var existsFood = null;
        var rows = table_Repceipt.getElementsByTagName("tr");
        var newRow = table_Repceipt.insertRow(totalRow.rowIndex);
        

        
        for( var i=0; i<rows.length; i++)
        {
            var cells = rows[i].getElementsByTagName("td");
            if(cells.length > 0 && cells[0].innerHTML === food_Selected)
            {
                existsFood = rows[i];
                break;
            }

        }

        if(existsFood){
            var input_SL = rows[i].querySelector(".sl");
            var input_Price = rows[i].querySelector(".price");
            var current_SL = parseFloat(input_SL.value);
            var current_Price = parseFloat(input_Price.value);
            input_SL.value = current_SL + 1;
            input_Price.value = current_Price + parseFloat(food_Price); 
            //hàm xóa món ăn
            var del_Food = newRow.querySelector('.btn_del');
            
        }
        else {  
            newRow.insertCell(0).innerHTML = food_Selected;
            newRow.insertCell(1).innerHTML = "<input type='text' class='sl' value='1'>";
            newRow.insertCell(2).innerHTML = "<input type='text' class='price' value='" + food_Price + "'>";
            newRow.insertCell(3).innerHTML = food_Price;
            newRow.insertCell(4).innerHTML = "<button class='btn_del'>Xóa</button>" ; // Ô xóa
          

        }
        //Tính tổng tiền
        var totalCell = table_Repceipt.querySelector('.calc');
        calculateTotal(table_Repceipt, totalCell);

        
    });

    //Hàm tính tổng
    
    function calculateTotal(table_Repceipt, totalCell) {
        var priceCells = table_Repceipt.querySelectorAll('.price'); // mảng này chứa giá tiền của các bàn
        var total = 0;

        // Vòng lặp for
        for(i=0;i<priceCells.length; i++){
            var price = parseFloat(priceCells[i].value);
            total += price;
        }
        // Đặt giá trị tổng tiền vào ô tính toán
        totalCell.innerHTML = total;
    };
    
    

 
});
