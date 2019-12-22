"use strict";

var cov_njsw6chan = function () {
  var path = "C:\\Users\\Edin\\Desktop\\Internet Explorer\\Projects\\reactiflux - Discord - IRC\\discord-irc\\lib\\errors.js";
  var hash = "036fa7732a0bc8b89cfcde34a1f7f3be861acb67";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Edin\\Desktop\\Internet Explorer\\Projects\\reactiflux - Discord - IRC\\discord-irc\\lib\\errors.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 3,
          column: 19
        }
      },
      "1": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 4,
          column: 37
        }
      },
      "2": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 5,
          column: 65
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 2,
            column: 3
          }
        },
        loc: {
          start: {
            line: 2,
            column: 23
          },
          end: {
            line: 6,
            column: 3
          }
        },
        line: 2
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 5,
            column: 19
          },
          end: {
            line: 5,
            column: 64
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 5,
            column: 19
          },
          end: {
            line: 5,
            column: 26
          }
        }, {
          start: {
            line: 5,
            column: 30
          },
          end: {
            line: 5,
            column: 64
          }
        }],
        line: 5
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
    hash: "036fa7732a0bc8b89cfcde34a1f7f3be861acb67"
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
exports.ConfigurationError = void 0;

class ConfigurationError extends Error {
  constructor(message) {
    cov_njsw6chan.f[0]++;
    cov_njsw6chan.s[0]++;
    super(message);
    cov_njsw6chan.s[1]++;
    this.name = 'ConfigurationError';
    cov_njsw6chan.s[2]++;
    this.message = (cov_njsw6chan.b[0][0]++, message) || (cov_njsw6chan.b[0][1]++, 'Invalid configuration file given');
  }

}

exports.ConfigurationError = ConfigurationError;