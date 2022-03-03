// Tinh luong nhan vien
document.getElementById("btnSalary").onclick = function () {
  const PAY = 100000;
  var day = document.getElementById("day").value;
  var salary = day * PAY;
  var currentFormat = new Intl.NumberFormat("vn-VN", { style: "currency", currency: "VND" });
  var vnd = currentFormat.format(salary);
  document.getElementById("footerSalary").innerHTML = "<div>Tiền lương của nhân viên là: " + vnd + "</div>";
};

// Tinh gia tri trung binh
document.getElementById("btnAverage").onclick = function () {
  var num1 = document.getElementById("num1").value * 1;
  var num2 = document.getElementById("num2").value * 1;
  var num3 = document.getElementById("num3").value * 1;
  var num4 = document.getElementById("num4").value * 1;
  var num5 = document.getElementById("num5").value * 1;
  var average = (num1 + num2 + num3 + num4 + num5) / 5;
  document.getElementById("footerAverage").innerHTML = "<div>Giá trị trung bình của 5 số là: " + average + "</div>";
};

// Quy doi tien
document.getElementById("btnConvert").onclick = function () {
  const RATE = 23500;
  var usd = document.getElementById("usd").value;
  var vnd = usd * RATE;
  var currentFormat = new Intl.NumberFormat("vn-VN", { style: "currency", currency: "VND" });
  var format = currentFormat.format(vnd);
  document.getElementById("footerConvert").innerHTML = "<div>Số tiền quy đổi là: " + format + "</div>";
};

// Tinh chu vi, dien tich HCN
document.getElementById("btnRectangle").onclick = function () {
  var long = document.getElementById("long").value * 1;
  var short = document.getElementById("short").value * 1;
  var s = long * short;
  var c = (long + short) * 2;
  document.getElementById("footerRectangle").innerHTML = "<div>Diện tích HCN là: " + s + "</div>" + "<br>" + "<div>Chu vi HCN là: " + c + "</div>";
};

// Tinh tong 2 ky so
document.getElementById("btnSum").onclick = function () {
  var num = document.getElementById("number").value;
  var e1 = Math.floor(num / 10);
  var e2 = num % 10;
  var sum = e1 * 1 + e2 * 1;
  document.getElementById("footerSum").innerHTML = "<div>Tổng 2 ký số là: " + sum + "</div>";
};
