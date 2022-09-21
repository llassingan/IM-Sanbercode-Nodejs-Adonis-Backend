"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writedata = exports.readdata = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var path = 'data.json';

var readdata = function readdata() {
  _fs["default"].readFile(path, function (err, data) {
    if (err) console.log(err);
    console.log(JSON.parse(data));
  }); // tanpa "../" karena path nya relatif terhadap index.js bukan callabck.js

};

exports.readdata = readdata;

var writedata = function writedata(datanew) {
  _fs["default"].readFile(path, function (err, data) {
    if (err) console.error(err);
    var dataobj = JSON.parse(data);
    dataobj.push(datanew);

    _fs["default"].writeFile(path, JSON.stringify(dataobj), {
      encoding: 'utf-8'
    }, function (err) {
      if (err) console.log(err);
    });
  });
};

exports.writedata = writedata;