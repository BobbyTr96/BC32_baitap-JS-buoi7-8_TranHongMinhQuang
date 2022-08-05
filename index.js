let numbers = []; // tạo mảng numbers để gán những giá trị người dùng nhập vào
function themSo() {
  // tạo biến số để lấy giá trị của người dùng , sau nó dùng 'push' để thêm vào mảng numbers
  let so = document.getElementById("num").value * 1;
  numbers.push(so);
    
  // đầu ra
  document.getElementById("themSo").innerHTML = numbers  ;
}

//Bài 1 :tính tổng số dương
function tinhTong() {
  //  dùng vòng lặp for duyệt mảng numbers để lấy giá trị
  let total = 0; // tạo biến total để hứng kết quả tổng
  let I = " ";
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      total += numbers[i];
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    I += numbers[i] + " ";
  }
  // đầu ra
  document.getElementById("tong").innerHTML =
    " số trong mảng là : " + I + "</br>" + " tổng : " + total;
}

// Bài 2 : đếm số dương
function demSoDuong() {
  //  dùng vòng lặp for duyệt mảng numbers để lấy giá trị
  //tạo biến hứng giá trị số dương
  let soDuong = 0;
  let I = "";
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      soDuong++;
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    I += numbers[i] + " ";
  }

  //đầu ra
  document.getElementById("soDuong").innerHTML =
    " số trong mảng là : " + I + "</br>" + " tổng số dương là : " + soDuong;
}

//Bài 3 ; Tìm số nhỏ nhất
function timSoNhoNhat() {
  //  dùng vòng lặp for duyệt mảng numbers để lấy giá trị
  let nhoNhat = numbers[0]; // cho biến nhoNhat = giá trị đầu tiên của mảng sau đó so sánh nếu giá trị sau nhỏ hơn nó thì gán cho nó giá trị mới vừa đc so sánh
  let I = "";
  // dùng vòng lặp for duyệt mảng
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < nhoNhat) {
      nhoNhat = numbers[i];
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    I += numbers[i] + " ";
  }
  // đầu ra
  //đầu ra
  document.getElementById("soNhoNhat").innerHTML =
    " số trong mảng là : " + I + "</br>" + " số nhỏ nhất  là : " + nhoNhat;
}

//Bài 4 : tìm số dương nhỏ nhất
function timSoDuongNhoNhat() {
  // tạo mảng mới để lấy số dương từ mảng người dùng nhập ban đầu
  let soDuong = [];
  //tạo 1 mảng để tìm số dương nhỏ nhất
  let soDuongNhoNhat = "";
  // dùng vòng lặp để kiếm tra và chỉ lấy số dương đưa vào mảng mới 'soDuong'
  
  for (let a = 0; a < numbers.length; a++) {
    if (numbers[a] > 0) {
      soDuong.push(numbers[a]);
    }
   
     if (soDuong.length > 0) {
      soDuongNhoNhat = soDuong[0];
      for (let i = 0; i < soDuong.length; i++) {
        if (soDuong[i] < soDuongNhoNhat) {
          soDuongNhoNhat = soDuong[i];
        }
      }
    }
    if (soDuong.length === 0) {
        document.getElementById("soDuongNhoNhat").innerHTML = "Không có số dương"
        return
    } 
  }

  // đầu ra
  document.getElementById("soDuongNhoNhat").innerHTML = soDuongNhoNhat;
}

//Bài 5 : Tìm số chẵn cuối cùng
function timSoChanCuoiCung() {
    // tạo 1 biến để chưa số chẵn
    let soChan = "" ;

    // duyệt mảng tìm số chẵn , nếu là số chẵn thì gán ngược lại cho biến 'soChan' , ta duyệt từ index 0 trở đi 
    for(let i = 0 ; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0) {
            soChan = numbers[i]
        }
    }

    /// đầu ra
    document.getElementById("soChanCuoiCung").innerHTML = soChan;
}

// bài 6 ; đổi chỗ
function doiCho() {
    // Dom
    var num1 =document.getElementById("num1").value*1 ;
    var num2 =document.getElementById("num2").value*1 ;

    // xử lý
// tạo 1 biến chứa tạm giá trị của mảng vị trí num1
let place1 = "" ;
place1 = numbers[num1]
numbers[num1] = numbers[num2]
numbers[num2] = place1

// đầu ra
document.getElementById("doiCho").innerHTML = numbers
}