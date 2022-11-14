function chonmucgia(){
    // lấy ra giá đơn giá là mảng 700, .....
    var arrDonGia = document.getElementsByName("dongia");
    // lưu mức giá đc chọn
    var mucGiaChon = document.getElementById("mucgia");
    // gán cho biến cái mục giá được chọn
    giaDuocChon = mucGiaChon.value;
    for(let i= 0 ; i< arrDonGia.length ;  i++){
        // ép giá trị lấy ra từ vị trí thứ i innerText
        gia = parseFloat(arrDonGia[i].innerText);
        // tìm thấy giá mà nhỏ hơn mục giá chọn thì hiện
        // lớn hơn thì ẩn bằng display none
            if(gia < giaDuocChon || giaDuocChon == -1){
                arrDonGia[i].parentNode.style.display = ""
            }else{
                arrDonGia[i].parentNode.style.display = "none"    
            }   
    }
    tongtien();
}

function checkbox(i){
    // gán hết số lượng vào mảng
    // 0-5,1-10......
    var arrSoLuong = document.getElementsByName("soluong");
    // chuyển trạng thái
    arrSoLuong[i].disabled = !arrSoLuong[i].disabled;

    // nếu là true là thay đổi giá trị của số lươnhj và thành tiền
    if(arrSoLuong[i].disabled == true){
        arrSoLuong[i].value = 0;
        arrSoLuong[i].parrentnode.nextElementSibling.innerText="";
    }
    tongtien();
}

// this đối tươngh=j sự kiện đang diễn ra
// vd kích vào input thì lấy giá trị của tk trước input.
function thanhtien(ip){
        var soLuong = ip.value;
        // lấy ra innertext phía trước nó ra ngoài phía node cha td
        var layDonGia = ip.parentNode.previousElementSibling.innerText;
        // gán cho thằng sau là thằng thành tiền
        ip.parentNode.nextElementSibling.innerText = soLuong * layDonGia;
        tongtien();
}

function tongtien(){
        tongTien =0 ;
        // lấy hết giá trị của thành tiền gán vào trong mảng
        var arrThanhTien = document.getElementsByName("thanhtien");
        for(let i=0 ; i< arrThanhTien.length ; i++){
            if(arrThanhTien[i].parentNode.style.display==""){
                tien = arrThanhTien[i].innerText;
                tongTien += Number(tien);
            }     
        }
        document.getElementById("tinhtong").innerText = tongTien;
}

