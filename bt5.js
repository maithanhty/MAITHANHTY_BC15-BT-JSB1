/**
 * đầu vào
 * tạo biến so
 * 
 * xử lí:
 * tạo biến so_hang_donvi = so % 10;
 * tạo biến so_hang_chuc = so / 10
 * tạo biến tong = so_hang_donvi + so_hang_chuc;
 * 
 * đầu ra:
 * tong
 */

var so;
so = 65;

var so_hang_donvi = so % 10;
var so_hang_chuc = so / 10;
so_hang_donvi = Math.floor(so_hang_donvi);
so_hang_chuc = Math.floor(so_hang_chuc);
var tong = so_hang_donvi + so_hang_chuc;

console.log("tổng 2 số lưu kí: ", tong)