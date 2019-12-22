#!/usr/bin/env node
"use strict";

var cov_2ehbsbgm52 = function () {
  var path = "C:\\Users\\Edin\\Desktop\\Internet Explorer\\Projects\\reactiflux - Discord - IRC\\discord-irc\\lib\\cli.js";
  var hash = "e5773237c7bd5becae6a6f33edb3dcd8b97448a6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Edin\\Desktop\\Internet Explorer\\Projects\\reactiflux - Discord - IRC\\discord-irc\\lib\\cli.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 21
        },
        end: {
          line: 14,
          column: 68
        }
      },
      "1": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 23,
          column: 3
        }
      },
      "2": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 53
        }
      },
      "3": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 22,
          column: 5
        }
      },
      "4": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 83
        }
      },
      "5": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 16
        }
      },
      "6": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 33,
          column: 25
        }
      },
      "7": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 37,
          column: 48
        }
      },
      "8": {
        start: {
          line: 36,
          column: 23
        },
        end: {
          line: 36,
          column: 49
        }
      },
      "9": {
        start: {
          line: 37,
          column: 7
        },
        end: {
          line: 37,
          column: 48
        }
      },
      "10": {
        start: {
          line: 39,
          column: 23
        },
        end: {
          line: 39,
          column: 75
        }
      },
      "11": {
        start: {
          line: 40,
          column: 17
        },
        end: {
          line: 41,
          column: 56
        }
      },
      "12": {
        start: {
          line: 42,
          column: 2
        },
        end: {
          line: 42,
          column: 29
        }
      }
    },
    fnMap: {
      "0": {
        name: "readJSONConfig",
        decl: {
          start: {
            line: 13,
            column: 9
          },
          end: {
            line: 13,
            column: 23
          }
        },
        loc: {
          start: {
            line: 13,
            column: 34
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 13
      },
      "1": {
        name: "run",
        decl: {
          start: {
            line: 26,
            column: 9
          },
          end: {
            line: 26,
            column: 12
          }
        },
        loc: {
          start: {
            line: 26,
            column: 15
          },
          end: {
            line: 43,
            column: 1
          }
        },
        line: 26
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        }, {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        }],
        line: 18
      },
      "1": {
        loc: {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 37,
            column: 48
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 37,
            column: 48
          }
        }, {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 37,
            column: 48
          }
        }],
        line: 36
      },
      "2": {
        loc: {
          start: {
            line: 40,
            column: 17
          },
          end: {
            line: 41,
            column: 56
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 41,
            column: 4
          },
          end: {
            line: 41,
            column: 25
          }
        }, {
          start: {
            line: 41,
            column: 28
          },
          end: {
            line: 41,
            column: 56
          }
        }],
        line: 40
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
      "11": 0,
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "e5773237c7bd5becae6a6f33edb3dcd8b97448a6"
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

var _fs = _interopRequireDefault(require("fs"));

var _commander = _interopRequireDefault(require("commander"));

var _path = _interopRequireDefault(require("path"));

var _checkEnv = _interopRequireDefault(require("check-env"));

var _stripJsonComments = _interopRequireDefault(require("strip-json-comments"));

var _lodash = require("lodash");

var helpers = _interopRequireWildcard(require("./helpers"));

var _errors = require("./errors");

var _package = require("../package.json");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readJSONConfig(filePath) {
  cov_2ehbsbgm52.f[0]++;
  const configFile = (cov_2ehbsbgm52.s[0]++, _fs.default.readFileSync(filePath, {
    encoding: 'utf8'
  }));
  cov_2ehbsbgm52.s[1]++;

  try {
    cov_2ehbsbgm52.s[2]++;
    return JSON.parse((0, _stripJsonComments.default)(configFile));
  } catch (err) {
    cov_2ehbsbgm52.s[3]++;

    if (err instanceof SyntaxError) {
      cov_2ehbsbgm52.b[0][0]++;
      cov_2ehbsbgm52.s[4]++;
      throw new _errors.ConfigurationError('The configuration file contains invalid JSON');
    } else {
      cov_2ehbsbgm52.b[0][1]++;
      cov_2ehbsbgm52.s[5]++;
      throw err;
    }
  }
}

function run() {
  cov_2ehbsbgm52.f[1]++;
  cov_2ehbsbgm52.s[6]++;

  _commander.default.version(_package.version).option('-c, --config <path>', 'Sets the path to the config file, otherwise read from the env variable CONFIG_FILE.').parse(process.argv); // If no config option is given, try to use the env variable:


  cov_2ehbsbgm52.s[7]++;

  if (!_commander.default.config) {
    cov_2ehbsbgm52.b[1][0]++;
    cov_2ehbsbgm52.s[8]++;
    (0, _checkEnv.default)(['CONFIG_FILE']);
  } else {
    cov_2ehbsbgm52.b[1][1]++;
    cov_2ehbsbgm52.s[9]++;
    process.env.CONFIG_FILE = _commander.default.config;
  }

  const completePath = (cov_2ehbsbgm52.s[10]++, _path.default.resolve(process.cwd(), process.env.CONFIG_FILE));
  const config = (cov_2ehbsbgm52.s[11]++, (0, _lodash.endsWith)(process.env.CONFIG_FILE, '.js') ? (cov_2ehbsbgm52.b[2][0]++, require(completePath)) : (cov_2ehbsbgm52.b[2][1]++, readJSONConfig(completePath)));
  cov_2ehbsbgm52.s[12]++;
  helpers.createBots(config);
}

var _default = run;
exports.default = _default;