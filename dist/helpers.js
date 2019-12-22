"use strict";

var cov_1wtq6905nu = function () {
  var path = "C:\\Users\\Edin\\Desktop\\Internet Explorer\\Projects\\reactiflux - Discord - IRC\\discord-irc\\lib\\helpers.js";
  var hash = "f3898f622681f096e6a3e0480ef4b57619f3d28b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Edin\\Desktop\\Internet Explorer\\Projects\\reactiflux - Discord - IRC\\discord-irc\\lib\\helpers.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 15
        },
        end: {
          line: 10,
          column: 17
        }
      },
      "1": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 25,
          column: 3
        }
      },
      "2": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 18,
          column: 7
        }
      },
      "3": {
        start: {
          line: 15,
          column: 18
        },
        end: {
          line: 15,
          column: 33
        }
      },
      "4": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 20
        }
      },
      "5": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 21
        }
      },
      "6": {
        start: {
          line: 19,
          column: 9
        },
        end: {
          line: 25,
          column: 3
        }
      },
      "7": {
        start: {
          line: 20,
          column: 16
        },
        end: {
          line: 20,
          column: 35
        }
      },
      "8": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 18
        }
      },
      "9": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 19
        }
      },
      "10": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 35
        }
      },
      "11": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 27,
          column: 14
        }
      }
    },
    fnMap: {
      "0": {
        name: "createBots",
        decl: {
          start: {
            line: 9,
            column: 16
          },
          end: {
            line: 9,
            column: 26
          }
        },
        loc: {
          start: {
            line: 9,
            column: 39
          },
          end: {
            line: 28,
            column: 1
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 14,
            column: 23
          },
          end: {
            line: 14,
            column: 24
          }
        },
        loc: {
          start: {
            line: 14,
            column: 35
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 14
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        }, {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        }],
        line: 13
      },
      "1": {
        loc: {
          start: {
            line: 19,
            column: 9
          },
          end: {
            line: 25,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 19,
            column: 9
          },
          end: {
            line: 25,
            column: 3
          }
        }, {
          start: {
            line: 19,
            column: 9
          },
          end: {
            line: 25,
            column: 3
          }
        }],
        line: 19
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "f3898f622681f096e6a3e0480ef4b57619f3d28b"
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
exports.createBots = createBots;

var _lodash = _interopRequireDefault(require("lodash"));

var _bot = _interopRequireDefault(require("./bot"));

var _errors = require("./errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Reads from the provided config file and returns an array of bots
 * @return {object[]}
 */
function createBots(configFile) {
  cov_1wtq6905nu.f[0]++;
  const bots = (cov_1wtq6905nu.s[0]++, []); // The config file can be both an array and an object

  cov_1wtq6905nu.s[1]++;

  if (Array.isArray(configFile)) {
    cov_1wtq6905nu.b[0][0]++;
    cov_1wtq6905nu.s[2]++;
    configFile.forEach(config => {
      cov_1wtq6905nu.f[1]++;
      const bot = (cov_1wtq6905nu.s[3]++, new _bot.default(config));
      cov_1wtq6905nu.s[4]++;
      bot.connect();
      cov_1wtq6905nu.s[5]++;
      bots.push(bot);
    });
  } else {
    cov_1wtq6905nu.b[0][1]++;
    cov_1wtq6905nu.s[6]++;

    if (_lodash.default.isObject(configFile)) {
      cov_1wtq6905nu.b[1][0]++;
      const bot = (cov_1wtq6905nu.s[7]++, new _bot.default(configFile));
      cov_1wtq6905nu.s[8]++;
      bot.connect();
      cov_1wtq6905nu.s[9]++;
      bots.push(bot);
    } else {
      cov_1wtq6905nu.b[1][1]++;
      cov_1wtq6905nu.s[10]++;
      throw new _errors.ConfigurationError();
    }
  }

  cov_1wtq6905nu.s[11]++;
  return bots;
}