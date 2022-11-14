var arrAnh = [
  "image/image0.jpg",
  "image/image1.jpg",
  "image/image2.jpg",
  "image/image3.jpg",
];

var chiso=["1/4", "2/4" , "3/4" ,"4/4"]
var index = 0;
function Next() {
  if (index < arrAnh.length - 1) {
    index++;
    document.getElementById("anhshow").src = arrAnh[index];
    document.getElementById("chiso").innerText = chiso[index];
  } else {
    index = 0;
    document.getElementById("anhshow").src = arrAnh[index];
    document.getElementById("chiso").innerText = chiso[index];
  }
}

function Back() {
  if (index > 0) {
    index --;
    document.getElementById("anhshow").src = arrAnh[index];
    document.getElementById("chiso").innerText = chiso[index];
  }else{
    index = arrAnh.length-1 ;
    document.getElementById("anhshow").src = arrAnh[index];
    document.getElementById("chiso").innerText = chiso[index];
  }
}
