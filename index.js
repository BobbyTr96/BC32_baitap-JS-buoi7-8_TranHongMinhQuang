let numbers = []; // tạo mảng numbers để gán những giá trị người dùng nhập vào
function themSo() {
  // tạo biến số để lấy giá trị của người dùng , sau nó dùng 'push' để thêm vào mảng numbers
  let so = document.getElementById("num").value * 1;
  numbers.push(so);

  // đầu ra
  document.getElementById("themSo").innerHTML = numbers;
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
      document.getElementById("soDuongNhoNhat").innerHTML = "Không có số dương";
      return;
    }
  }

  // đầu ra
  document.getElementById("soDuongNhoNhat").innerHTML = soDuongNhoNhat;
}

//Bài 5 : Tìm số chẵn cuối cùng
function timSoChanCuoiCung() {
  // tạo 1 biến để chưa số chẵn
  let soChan = "";

  // duyệt mảng tìm số chẵn , nếu là số chẵn thì gán ngược lại cho biến 'soChan' , ta duyệt từ index 0 trở đi
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      soChan = numbers[i];
    }
  }

  /// đầu ra
  document.getElementById("soChanCuoiCung").innerHTML = soChan;
}

// bài 6 ; đổi chỗ
function doiCho() {
  // Dom
  var num1 = document.getElementById("num1").value * 1;
  var num2 = document.getElementById("num2").value * 1;

  // xử lý
  // tạo 1 biến chứa tạm giá trị của mảng vị trí num1
  let place1 = "";
  place1 = numbers[num1];
  numbers[num1] = numbers[num2];
  numbers[num2] = place1;

  // đầu ra
  document.getElementById("doiCho").innerHTML = numbers;
}

//Bài 7 : sắp xếp tăng dần
function tangDan() {
  // dùng hàm 'sort' đưa vào giá trị (a,b) => điều kiện a - b  là nếu a - b mà > 0 thì a lớn hơn b , ngược lại , và hàm tự sắp xếp lại theo yêu cầu
  // (a-b) là sắp xếp từ nhỏ dến lớn
  // (b - a) là sắp xếp từ lớn đến nhỏ
  numbers.sort((a, b) => a - b);

  // đầu ra
  document.getElementById("sapXep").innerHTML = numbers;
}

// bài 8 : tìm số nguyên tố đầu tiên có  trong mảng mà ng dùng nhập vào
function timSnt() {
  // B1 tạo 1 func kiểm tra xem đó có phải là số nguyên tố hay ko

  function kiemTraSnt(n) {
    // tham số "n" = numbers[i]
    // tạo cờ hiệu flag = true thì là số nt , flag =  false thì ko phải snt
flag = true
    // loại bỏ số ko phải snt , số < 2 ko phải snt , nếu ko phải thì sẽ trả ra  giá trị flag = false
    if (n < 2) return (flag = false);
    

    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        flag = false;
        break;
      }
    }
    return flag
  }

  // duyệt mảng để xét từng con số xem nó có phải snt hay ko
  for ( let o = 0 ; o < numbers.length ; o++){
    if(kiemTraSnt(numbers[o])) {
      document.getElementById("timSo").innerHTML = numbers[o]
      break
    }
  }
}

//Bài 9 : kiểm tra số nguyên dùng toán tử Number.isInteger , số nguyên là bao gồm số nguyên âm và số nguyên dương vd : 5 ,  -1 // vd : 5.5 ko phải là số nguyên
  function demSoNguyen(){
    //tạo 1 biến để đếm có bao nhiêu số nguyên trong mảng
    let soNguyen = 0 ;
    // duyệt mảng
    for( let i = 0 ; i < numbers.length ; i++) {
      if (Number.isInteger(numbers[i])) {
        soNguyen++
      }
    }

    // đầu ra
    document.getElementById("demSo").innerHTML = soNguyen
  }


  // bài 10 : đếm số âm và số dương sau đó so sánh
  function soSanh() {
    // tạo 2 biến , 1 cái để đếm số lượng số âm ,  1 cái để đếm số lượng số dương
    let soAm = 0 ;
    let soDuong = 0 ;

    // duyệt mảng bằng vòng lặp 'for' để duyệt từng giá trị trong mảng numbers và kiểm tra xem nó là số âm hay dương , nếu âm thì biến soAm++ , nếu là số dương thì biến  soDuong++
    for( let i=0; i<numbers.length ; i++) {
      if(numbers[i] > 0) {
        soDuong++
      }else if (numbers[i] < 0) {
        soAm++
      }
    }

    if(soDuong === soAm ) {
      document.getElementById("soSanh").innerHTML = "Số Dương " + "="  + " Số âm" ;
    }else if (soDuong > soAm ) {
      document.getElementById("soSanh").innerHTML = "Số Dương " + ">"  + " Số âm" ;
    }else if (soDuong < soAm ) {
      document.getElementById("soSanh").innerHTML = "Số Dương " + "<"  + " Số âm" ;
    }
  }

