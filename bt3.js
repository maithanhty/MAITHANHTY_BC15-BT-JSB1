/**
 * đầu vào:
 * tạo biến usd = 23500;
 * tạo biến soUsd 
 * 
 * xử lí: 
 * tạo biến soTien = soUsd * usd;
 * 
 * đầu ra:
 * soTien
 */

var usd = 23500;
var soUsd;
soUsd = 5;
var soTien = soUsd * usd;

var currentFormat = new Intl.NumberFormat("vn-VN");
var soTien = currentFormat.format(soTien);

console.log("số tiền quy đổi là: ", soTien)