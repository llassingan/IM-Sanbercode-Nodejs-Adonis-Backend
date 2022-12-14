"use strict";

var _fscallback = require("./lib/fscallback.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var args = process.argv.slice(2);
var command = args[0];

switch (command) {
  case "readdata":
    (0, _fscallback.readdata)();
    break;

  case "writedata":
    var _args$1$split = args[1].split(","),
        _args$1$split2 = _slicedToArray(_args$1$split, 2),
        rawname = _args$1$split2[0],
        rawkelas = _args$1$split2[1];

    var _rawname$split = rawname.split(":"),
        _rawname$split2 = _slicedToArray(_rawname$split, 2),
        key1 = _rawname$split2[0],
        val1 = _rawname$split2[1];

    var _rawkelas$split = rawkelas.split(":"),
        _rawkelas$split2 = _slicedToArray(_rawkelas$split, 2),
        key2 = _rawkelas$split2[0],
        val2 = _rawkelas$split2[1];

    var obj = {};
    obj[key1] = val1;
    obj[key2] = val2;
    (0, _fscallback.writedata)(obj);
    break;

  default:
    break;
}