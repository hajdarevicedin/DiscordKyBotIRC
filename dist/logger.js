"use strict";

var cov_25289ljg41 = function () {
  var path = "C:\\Users\\Edin\\Desktop\\Internet Explorer\\Projects\\reactiflux - Discord - IRC\\discord-irc\\lib\\logger.js";
  var hash = "ecb5bf9b09e77cb7296b5092cd0494818a8ebac6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Edin\\Desktop\\Internet Explorer\\Projects\\reactiflux - Discord - IRC\\discord-irc\\lib\\logger.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 26
        },
        end: {
          line: 13,
          column: 3
        }
      },
      "1": {
        start: {
          line: 15,
          column: 18
        },
        end: {
          line: 15,
          column: 66
        }
      },
      "2": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 18,
          column: 3
        }
      },
      "3": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 91
        }
      },
      "4": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 70
        }
      },
      "5": {
        start: {
          line: 23,
          column: 15
        },
        end: {
          line: 31,
          column: 2
        }
      }
    },
    fnMap: {
      "0": {
        name: "formatter",
        decl: {
          start: {
            line: 4,
            column: 9
          },
          end: {
            line: 4,
            column: 18
          }
        },
        loc: {
          start: {
            line: 4,
            column: 25
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 4
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 18
          },
          end: {
            line: 15,
            column: 66
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 15,
            column: 19
          },
          end: {
            line: 15,
            column: 31
          }
        }, {
          start: {
            line: 15,
            column: 35
          },
          end: {
            line: 15,
            column: 59
          }
        }, {
          start: {
            line: 15,
            column: 64
          },
          end: {
            line: 15,
            column: 66
          }
        }],
        line: 15
      },
      "1": {
        loc: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        }, {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        }],
        line: 16
      },
      "2": {
        loc: {
          start: {
            line: 25,
            column: 9
          },
          end: {
            line: 25,
            column: 66
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 25,
            column: 50
          },
          end: {
            line: 25,
            column: 57
          }
        }, {
          start: {
            line: 25,
            column: 60
          },
          end: {
            line: 25,
            column: 66
          }
        }],
        line: 25
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "ecb5bf9b09e77cb7296b5092cd0494818a8ebac6"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _winston = _interopRequireWildcard(require("winston"));

var _util = require("util");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function formatter(info) {
  cov_25289ljg41.f[0]++;
  const stringifiedRest = (cov_25289ljg41.s[0]++, (0, _util.inspect)(_objectSpread({}, info, {
    level: undefined,
    message: undefined,
    splat: undefined
  }), {
    depth: null
  }));
  const padding = (cov_25289ljg41.s[1]++, (cov_25289ljg41.b[0][0]++, info.padding) && (cov_25289ljg41.b[0][1]++, info.padding[info.level]) || (cov_25289ljg41.b[0][2]++, ''));
  cov_25289ljg41.s[2]++;

  if (stringifiedRest !== '{}') {
    cov_25289ljg41.b[1][0]++;
    cov_25289ljg41.s[3]++;
    return `${info.timestamp} ${info.level}:${padding} ${info.message} ${stringifiedRest}`;
  } else {
    cov_25289ljg41.b[1][1]++;
  }

  cov_25289ljg41.s[4]++;
  return `${info.timestamp} ${info.level}:${padding} ${info.message}`;
}

const logger = (cov_25289ljg41.s[5]++, _winston.default.createLogger({
  transports: [new _winston.default.transports.Console()],
  level: process.env.NODE_ENV === 'development' ? (cov_25289ljg41.b[2][0]++, 'debug') : (cov_25289ljg41.b[2][1]++, 'info'),
  format: _winston.format.combine(_winston.format.colorize(), _winston.format.timestamp(), _winston.format.printf(formatter))
}));
var _default = logger;
exports.default = _default;