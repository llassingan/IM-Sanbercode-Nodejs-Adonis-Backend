"use strict";

var _bootcamp = _interopRequireDefault(require("./libs/bootcamp"));

var _student = _interopRequireDefault(require("./libs/student"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanber = new _bootcamp["default"]("sanbercode");
sanber.createClass("Laravel", "beginner", "abduh");
sanber.createClass("React", "beginner", "abdul");
console.log(sanber.name);
var names = ["regi", "ahmad", "bondra", "iqbal", "putri", "rezky"];
names.map(function (nama, index) {
  var newStud = new _student["default"](nama);
  var kelas = sanber.classes[index % 2].nama; //sesuaikan dengan getter nama kelas

  sanber.register(kelas, newStud);
}); // menampilkan data kelas dan student nya

sanber.classes.forEach(function (kelas) {
  console.log(kelas);
});