// var check

// check email
function check1(email) {
  return /^\S+@\S+.\S+$/.test(email);
}
function dangki() {
  // mã
  var check = true;
  var ma = document.getElementById("masinhvien").value;
  if (ma == "") {
    document.getElementById("loimasinhvien").innerText = "xin mời nhập lại";
    document.getElementById("masinhvien").style.background = "yellow"
    check = false;
  } else {
    document.getElementById("loimasinhvien").innerText = "";
    document.getElementById("masinhvien").style.background = "white"
  }
  // họ và tên
  var ten = document.getElementById("hovaten").value;
  if (ten == "") {
    document.getElementById("hovaten").style.background = "yellow"
    document.getElementById("loihoten").innerText = "xin mời nhập tên";
    check = false;
  } else {
    document.getElementById("hovaten").style.background = "white"
    document.getElementById("loihoten").innerText = "";
  }
  // email;
  var email = document.getElementById("email").value;
  if (email == "") {
    document.getElementById("email").style.background = "yellow"
    document.getElementById("loiemail").innerText = "xin mời nhập email";
    check = false;
  } else if (!check1(email)) {
    document.getElementById("email").style.background = "yellow"
    document.getElementById("loiemail").innerText = "lỗi email";
    check = false;
  } else {
    document.getElementById("loiemail").innerText = "";
    document.getElementById("email").style.background = "white"
  }
  // giới tính
  var gioiTinh = document.getElementsByName("gioitinh");
  if (!gioiTinh[0].checked && !gioiTinh[1].checked) {
    document.getElementById("loigioitinh").innerText = "Xin mời chọn lại";
    check = false;
  } else {
    document.getElementById("loigioitinh").innerText = "";
  }
  // sở thích
  var sothich = document.getElementsByName("sothich");

  if (!sothich[0].checked && !sothich[1].checked && !sothich[2].checked &&! sothich[3].checked && !sothich[4].checked) {
    document.getElementById("loisothich").innerText = "xin mời chọn sở thích";
    check = false;
  } else {
    document.getElementById("loisothich").innerText = "";
  }
  // quốc tịch
  var quocTich = document.getElementById("cbbquoctich").value;
  if (quocTich == 0) {
    document.getElementById("loiquoctich").innerText = "Xin mời nhập";
    check = false;
  } else {
    document.getElementById("loiquoctich").innerText = "";
  }
  // ghi chú
  var ghichu = document.getElementById("ghichu");
  if(ghichu.value < 200){
    document.getElementById("loighichu").innerText = "ghi chú >200 kí tự"
    document.getElementById("ghichu").style.background = "yellow"
    check = false;
  }else{
    document.getElementById("ghichu").style.background = "white"
    document.getElementById("loighichu").innerText = ""
    
  }
  if (check == true){
    alert("Thành công");
  } else {
    return false;
  }
  
}


