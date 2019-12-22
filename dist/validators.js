"use strict";

var cov_6wztlqa4 = function () {
  var path = "C:\\Users\\Edin\\Desktop\\Internet Explorer\\Projects\\reactiflux - Discord - IRC\\discord-irc\\lib\\validators.js";
  var hash = "c9f18d6a5c7b035090aa0d03abec0a72f8a0e302";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Edin\\Desktop\\Internet Explorer\\Projects\\reactiflux - Discord - IRC\\discord-irc\\lib\\validators.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 12,
          column: 3
        }
      },
      "1": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 66
        }
      },
      "2": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 17
        }
      }
    },
    fnMap: {
      "0": {
        name: "validateChannelMapping",
        decl: {
          start: {
            line: 9,
            column: 16
          },
          end: {
            line: 9,
            column: 38
          }
        },
        loc: {
          start: {
            line: 9,
            column: 48
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        }, {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        }],
        line: 10
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "c9f18d6a5c7b035090aa0d03abec0a72f8a0e302"
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
exports.validateChannelMapping = validateChannelMapping;

var _lodash = _interopRequireDefault(require("lodash"));

var _errors = require("./errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Validates a given channel mapping, throwing an error if it's invalid
 * @param  {Object} mapping
 * @return {Object}
 */
function validateChannelMapping(mapping) {
  cov_6wztlqa4.f[0]++;
  cov_6wztlqa4.s[0]++;

  if (!_lodash.default.isObject(mapping)) {
    cov_6wztlqa4.b[0][0]++;
    cov_6wztlqa4.s[1]++;
    throw new _errors.ConfigurationError('Invalid channel mapping given');
  } else {
    cov_6wztlqa4.b[0][1]++;
  }

  cov_6wztlqa4.s[2]++;
  return mapping;
}