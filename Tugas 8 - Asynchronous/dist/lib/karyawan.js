"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Karyawan = /*#__PURE__*/function () {
  function Karyawan(nama, password, role) {
    _classCallCheck(this, Karyawan);

    this._nama = nama;
    this._password = password;
    this._role = role;

    if (role.toLowerCase() == "trainer") {
      this._student = [];
    }

    this._islogin = false;
  }

  _createClass(Karyawan, [{
    key: "nama",
    get: function get() {
      return this._nama;
    },
    set: function set(newnama) {
      this._nama = newnama;
    }
  }, {
    key: "role",
    get: function get() {
      return this._role;
    },
    set: function set(newrole) {
      this._role = newrole;
    }
  }, {
    key: "password",
    get: function get() {
      return this._password;
    },
    set: function set(newpassword) {
      this._password = newpassword;
    }
  }, {
    key: "islogin",
    get: function get() {
      return this._islogin;
    },
    set: function set(newlogin) {
      this._islogin = newlogin;
    }
  }, {
    key: "student",
    get: function get() {
      return this._student;
    },
    set: function set(student) {
      this._student = student;
    }
  }]);

  return Karyawan;
}();

var _default = Karyawan;
exports["default"] = _default;