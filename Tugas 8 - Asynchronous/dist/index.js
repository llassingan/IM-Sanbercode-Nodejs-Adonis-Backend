"use strict";

var _bootcamp = _interopRequireDefault(require("./lib/bootcamp.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var args = process.argv.slice(2);
var input = args[1];

switch (args[0]) {
  case "register":
    _bootcamp["default"].register(input);

    break;

  case "login":
    _bootcamp["default"].login(input);

    break;

  case "addsiswa":
    _bootcamp["default"].addSiswa(input);

    break;

  default:
    break;
}