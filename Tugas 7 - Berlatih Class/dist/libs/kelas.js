"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Kelas = /*#__PURE__*/function () {
  function Kelas(nama, level, instruktur) {
    _classCallCheck(this, Kelas);

    this._nama = nama;
    this._level = level;
    this._students = [];
    this._instruktur = instruktur;
  }

  _createClass(Kelas, [{
    key: "nama",
    get: function get() {
      return this._nama;
    },
    set: function set(nama) {
      this._nama = nama;
    }
  }, {
    key: "level",
    get: function get() {
      return this._level;
    },
    set: function set(level) {
      this._level = level;
    }
  }, {
    key: "instruktur",
    get: function get() {
      return this._instruktur;
    },
    set: function set(instruktur) {
      this._instruktur = instruktur;
    }
  }, {
    key: "student",
    get: function get() {
      return this._students;
    }
  }, {
    key: "addStudent",
    value: function addStudent(nama) {
      this._students.push(nama);
    }
  }]);

  return Kelas;
}();

var _default = Kelas;
exports["default"] = _default;