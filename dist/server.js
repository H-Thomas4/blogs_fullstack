/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/config/index.ts":
/*!************************************!*\
  !*** ./src/server/config/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar dotenv = __webpack_require__(/*! dotenv */ \"../../../../node_modules/dotenv/lib/main.js\");\r\ndotenv.config();\r\nexports.default = {\r\n    mysql: {\r\n        user: process.env.DB_USER,\r\n        password: process.env.DB_PASS,\r\n        host: process.env.DB_HOST,\r\n        database: process.env.DB_SCHEMA,\r\n        port: 3306\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/config/index.ts?");

/***/ }),

/***/ "./src/server/db/index.ts":
/*!********************************!*\
  !*** ./src/server/db/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Query = void 0;\r\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\r\nvar config_1 = __webpack_require__(/*! ../config */ \"./src/server/config/index.ts\");\r\nvar blogs_1 = __webpack_require__(/*! ./queries/blogs */ \"./src/server/db/queries/blogs.ts\");\r\nvar pool = mysql.createPool(config_1.default.mysql);\r\nvar Query = function (query, values) {\r\n    return new Promise(function (resolve, reject) {\r\n        var sql = mysql.format(query, values);\r\n        pool.query(sql, function (err, results) {\r\n            if (err) {\r\n                reject(err);\r\n            }\r\n            else {\r\n                resolve(results);\r\n            }\r\n        });\r\n    });\r\n};\r\nexports.Query = Query;\r\nexports.default = {\r\n    blogs: blogs_1.default\r\n};\r\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/db/index.ts?");

/***/ }),

/***/ "./src/server/db/queries/blogs.ts":
/*!****************************************!*\
  !*** ./src/server/db/queries/blogs.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar __1 = __webpack_require__(/*! ../ */ \"./src/server/db/index.ts\");\r\nvar all = function () {\r\n    return __1.Query('SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id = blogs.authorid');\r\n};\r\nvar one = function (id) {\r\n    return __1.Query('SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id = blogs.authorid WHERE blogs.id = ?', [id]);\r\n};\r\nvar insert = function (newBlog) {\r\n    return __1.Query('INSERT INTO blogs SET ?', newBlog);\r\n};\r\nvar update = function (editedBlog, id) {\r\n    return __1.Query('UPDATE blogs SET ? WHERE id = ?', [editedBlog, id]);\r\n};\r\nvar destroy = function (id) { return __1.Query('DELETE FROM blogs WHERE id = ?', [id]); };\r\nexports.default = {\r\n    all: all,\r\n    one: one,\r\n    insert: insert,\r\n    update: update,\r\n    destroy: destroy\r\n};\r\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/db/queries/blogs.ts?");

/***/ }),

/***/ "./src/server/routes/blogs.ts":
/*!************************************!*\
  !*** ./src/server/routes/blogs.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar db_1 = __webpack_require__(/*! ../db */ \"./src/server/db/index.ts\");\r\nvar router = express_1.Router();\r\n/*GET / api/blogs */\r\nrouter.get('/:blogid?', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var blogid, blog, blogs, error_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                blogid = Number(req.params.blogid);\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 6, , 7]);\r\n                if (!blogid) return [3 /*break*/, 3];\r\n                return [4 /*yield*/, db_1.default.blogs.one(blogid)];\r\n            case 2:\r\n                blog = (_a.sent())[0];\r\n                res.json(blog);\r\n                return [3 /*break*/, 5];\r\n            case 3: return [4 /*yield*/, db_1.default.blogs.all()];\r\n            case 4:\r\n                blogs = _a.sent();\r\n                res.json(blogs);\r\n                _a.label = 5;\r\n            case 5: return [3 /*break*/, 7];\r\n            case 6:\r\n                error_1 = _a.sent();\r\n                console.log(error_1);\r\n                res.status(500).json({ msg: 'YOU F$%ked UP!', error: error_1 });\r\n                return [3 /*break*/, 7];\r\n            case 7: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n/*POST / api/blogs */\r\n//Requst Body { title: string, content: string,}/\r\nrouter.post('/:blogid', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var newBlog, results, error_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                newBlog = req.body;\r\n                newBlog.authorid = 1;\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 3, , 4]);\r\n                return [4 /*yield*/, db_1.default.blogs.insert(newBlog)];\r\n            case 2:\r\n                results = _a.sent();\r\n                res.json({ msg: 'Blog created', id: results.insertId });\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                error_2 = _a.sent();\r\n                console.log(error_2);\r\n                res.status(500).json({ msg: 'YOU F$%ked UP!', error: error_2 });\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n// PUT/api/blogs/1 */\r\n//Requst Body { title: string, content: string,}/\r\nrouter.put('/:blogid', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var blogid, editedBlog, results, error_3;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                blogid = Number(req.params.blogid);\r\n                editedBlog = req.body;\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 3, , 4]);\r\n                return [4 /*yield*/, db_1.default.blogs.update(editedBlog, blogid)];\r\n            case 2:\r\n                results = _a.sent();\r\n                res.json(results);\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                error_3 = _a.sent();\r\n                console.log(error_3);\r\n                res.status(500).json({ msg: 'YOU F$%ked UP!', error: error_3 });\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n// Delete/api/blogs/1 */\r\nrouter.delete('/:blogid', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var blogid, results, error_4;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                blogid = Number(req.params.blogid);\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 3, , 4]);\r\n                return [4 /*yield*/, db_1.default.blogs.destroy(blogid)];\r\n            case 2:\r\n                results = _a.sent();\r\n                res.json(results);\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                error_4 = _a.sent();\r\n                console.log(error_4);\r\n                res.status(500).json({ msg: 'YOU F$%ked UP!', error: error_4 });\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes/blogs.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar blogs_1 = __webpack_require__(/*! ./blogs */ \"./src/server/routes/blogs.ts\");\r\nvar router = express_1.Router();\r\nrouter.use('/blogs', blogs_1.default);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar morgan = __webpack_require__(/*! morgan */ \"../../../../node_modules/morgan/index.js\");\r\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\r\nvar app = express();\r\napp.use(express.static('public'));\r\napp.use(morgan('dev'));\r\napp.use(express.json());\r\napp.use('/api', routes_1.default);\r\nvar port = process.env.PORT || 3000;\r\napp.listen(port, function () { return console.log(\"Server listening on port: \" + port); });\r\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/server.ts?");

/***/ }),

/***/ "../../../../node_modules/basic-auth/index.js":
/*!****************************************************!*\
  !*** ../../../../node_modules/basic-auth/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/*!\n * basic-auth\n * Copyright(c) 2013 TJ Holowaychuk\n * Copyright(c) 2014 Jonathan Ong\n * Copyright(c) 2015-2016 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar Buffer = __webpack_require__(/*! safe-buffer */ \"safe-buffer\").Buffer\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = auth\nmodule.exports.parse = parse\n\n/**\n * RegExp for basic auth credentials\n *\n * credentials = auth-scheme 1*SP token68\n * auth-scheme = \"Basic\" ; case insensitive\n * token68     = 1*( ALPHA / DIGIT / \"-\" / \".\" / \"_\" / \"~\" / \"+\" / \"/\" ) *\"=\"\n * @private\n */\n\nvar CREDENTIALS_REGEXP = /^ *(?:[Bb][Aa][Ss][Ii][Cc]) +([A-Za-z0-9._~+/-]+=*) *$/\n\n/**\n * RegExp for basic auth user/pass\n *\n * user-pass   = userid \":\" password\n * userid      = *<TEXT excluding \":\">\n * password    = *TEXT\n * @private\n */\n\nvar USER_PASS_REGEXP = /^([^:]*):(.*)$/\n\n/**\n * Parse the Authorization header field of a request.\n *\n * @param {object} req\n * @return {object} with .name and .pass\n * @public\n */\n\nfunction auth (req) {\n  if (!req) {\n    throw new TypeError('argument req is required')\n  }\n\n  if (typeof req !== 'object') {\n    throw new TypeError('argument req is required to be an object')\n  }\n\n  // get header\n  var header = getAuthorization(req)\n\n  // parse header\n  return parse(header)\n}\n\n/**\n * Decode base64 string.\n * @private\n */\n\nfunction decodeBase64 (str) {\n  return Buffer.from(str, 'base64').toString()\n}\n\n/**\n * Get the Authorization header from request object.\n * @private\n */\n\nfunction getAuthorization (req) {\n  if (!req.headers || typeof req.headers !== 'object') {\n    throw new TypeError('argument req is required to have headers property')\n  }\n\n  return req.headers.authorization\n}\n\n/**\n * Parse basic auth to object.\n *\n * @param {string} string\n * @return {object}\n * @public\n */\n\nfunction parse (string) {\n  if (typeof string !== 'string') {\n    return undefined\n  }\n\n  // parse header\n  var match = CREDENTIALS_REGEXP.exec(string)\n\n  if (!match) {\n    return undefined\n  }\n\n  // decode user pass\n  var userPass = USER_PASS_REGEXP.exec(decodeBase64(match[1]))\n\n  if (!userPass) {\n    return undefined\n  }\n\n  // return credentials object\n  return new Credentials(userPass[1], userPass[2])\n}\n\n/**\n * Object to represent user credentials.\n * @private\n */\n\nfunction Credentials (name, pass) {\n  this.name = name\n  this.pass = pass\n}\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/../../../../node_modules/basic-auth/index.js?");

/***/ }),

/***/ "../../../../node_modules/dotenv/lib/main.js":
/*!***************************************************!*\
  !*** ../../../../node_modules/dotenv/lib/main.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* @flow */\n/*::\n\ntype DotenvParseOptions = {\n  debug?: boolean\n}\n\n// keys and values from src\ntype DotenvParseOutput = { [string]: string }\n\ntype DotenvConfigOptions = {\n  path?: string, // path to .env file\n  encoding?: string, // encoding of .env file\n  debug?: string // turn on logging for debugging purposes\n}\n\ntype DotenvConfigOutput = {\n  parsed?: DotenvParseOutput,\n  error?: Error\n}\n\n*/\n\nconst fs = __webpack_require__(/*! fs */ \"fs\")\nconst path = __webpack_require__(/*! path */ \"path\")\n\nfunction log (message /*: string */) {\n  console.log(`[dotenv][DEBUG] ${message}`)\n}\n\nconst NEWLINE = '\\n'\nconst RE_INI_KEY_VAL = /^\\s*([\\w.-]+)\\s*=\\s*(.*)?\\s*$/\nconst RE_NEWLINES = /\\\\n/g\nconst NEWLINES_MATCH = /\\n|\\r|\\r\\n/\n\n// Parses src into an Object\nfunction parse (src /*: string | Buffer */, options /*: ?DotenvParseOptions */) /*: DotenvParseOutput */ {\n  const debug = Boolean(options && options.debug)\n  const obj = {}\n\n  // convert Buffers before splitting into lines and processing\n  src.toString().split(NEWLINES_MATCH).forEach(function (line, idx) {\n    // matching \"KEY' and 'VAL' in 'KEY=VAL'\n    const keyValueArr = line.match(RE_INI_KEY_VAL)\n    // matched?\n    if (keyValueArr != null) {\n      const key = keyValueArr[1]\n      // default undefined or missing values to empty string\n      let val = (keyValueArr[2] || '')\n      const end = val.length - 1\n      const isDoubleQuoted = val[0] === '\"' && val[end] === '\"'\n      const isSingleQuoted = val[0] === \"'\" && val[end] === \"'\"\n\n      // if single or double quoted, remove quotes\n      if (isSingleQuoted || isDoubleQuoted) {\n        val = val.substring(1, end)\n\n        // if double quoted, expand newlines\n        if (isDoubleQuoted) {\n          val = val.replace(RE_NEWLINES, NEWLINE)\n        }\n      } else {\n        // remove surrounding whitespace\n        val = val.trim()\n      }\n\n      obj[key] = val\n    } else if (debug) {\n      log(`did not match key and value when parsing line ${idx + 1}: ${line}`)\n    }\n  })\n\n  return obj\n}\n\n// Populates process.env from .env file\nfunction config (options /*: ?DotenvConfigOptions */) /*: DotenvConfigOutput */ {\n  let dotenvPath = path.resolve(process.cwd(), '.env')\n  let encoding /*: string */ = 'utf8'\n  let debug = false\n\n  if (options) {\n    if (options.path != null) {\n      dotenvPath = options.path\n    }\n    if (options.encoding != null) {\n      encoding = options.encoding\n    }\n    if (options.debug != null) {\n      debug = true\n    }\n  }\n\n  try {\n    // specifying an encoding returns a string instead of a buffer\n    const parsed = parse(fs.readFileSync(dotenvPath, { encoding }), { debug })\n\n    Object.keys(parsed).forEach(function (key) {\n      if (!Object.prototype.hasOwnProperty.call(process.env, key)) {\n        process.env[key] = parsed[key]\n      } else if (debug) {\n        log(`\"${key}\" is already defined in \\`process.env\\` and will not be overwritten`)\n      }\n    })\n\n    return { parsed }\n  } catch (e) {\n    return { error: e }\n  }\n}\n\nmodule.exports.config = config\nmodule.exports.parse = parse\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/../../../../node_modules/dotenv/lib/main.js?");

/***/ }),

/***/ "../../../../node_modules/morgan/index.js":
/*!************************************************!*\
  !*** ../../../../node_modules/morgan/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/*!\n * morgan\n * Copyright(c) 2010 Sencha Inc.\n * Copyright(c) 2011 TJ Holowaychuk\n * Copyright(c) 2014 Jonathan Ong\n * Copyright(c) 2014-2017 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = morgan\nmodule.exports.compile = compile\nmodule.exports.format = format\nmodule.exports.token = token\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar auth = __webpack_require__(/*! basic-auth */ \"../../../../node_modules/basic-auth/index.js\")\nvar debug = __webpack_require__(/*! debug */ \"debug\")('morgan')\nvar deprecate = __webpack_require__(/*! depd */ \"depd\")('morgan')\nvar onFinished = __webpack_require__(/*! on-finished */ \"on-finished\")\nvar onHeaders = __webpack_require__(/*! on-headers */ \"../../../../node_modules/on-headers/index.js\")\n\n/**\n * Array of CLF month names.\n * @private\n */\n\nvar CLF_MONTH = [\n  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',\n  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'\n]\n\n/**\n * Default log buffer duration.\n * @private\n */\n\nvar DEFAULT_BUFFER_DURATION = 1000\n\n/**\n * Create a logger middleware.\n *\n * @public\n * @param {String|Function} format\n * @param {Object} [options]\n * @return {Function} middleware\n */\n\nfunction morgan (format, options) {\n  var fmt = format\n  var opts = options || {}\n\n  if (format && typeof format === 'object') {\n    opts = format\n    fmt = opts.format || 'default'\n\n    // smart deprecation message\n    deprecate('morgan(options): use morgan(' + (typeof fmt === 'string' ? JSON.stringify(fmt) : 'format') + ', options) instead')\n  }\n\n  if (fmt === undefined) {\n    deprecate('undefined format: specify a format')\n  }\n\n  // output on request instead of response\n  var immediate = opts.immediate\n\n  // check if log entry should be skipped\n  var skip = opts.skip || false\n\n  // format function\n  var formatLine = typeof fmt !== 'function'\n    ? getFormatFunction(fmt)\n    : fmt\n\n  // stream\n  var buffer = opts.buffer\n  var stream = opts.stream || process.stdout\n\n  // buffering support\n  if (buffer) {\n    deprecate('buffer option')\n\n    // flush interval\n    var interval = typeof buffer !== 'number'\n      ? DEFAULT_BUFFER_DURATION\n      : buffer\n\n    // swap the stream\n    stream = createBufferStream(stream, interval)\n  }\n\n  return function logger (req, res, next) {\n    // request data\n    req._startAt = undefined\n    req._startTime = undefined\n    req._remoteAddress = getip(req)\n\n    // response data\n    res._startAt = undefined\n    res._startTime = undefined\n\n    // record request start\n    recordStartTime.call(req)\n\n    function logRequest () {\n      if (skip !== false && skip(req, res)) {\n        debug('skip request')\n        return\n      }\n\n      var line = formatLine(morgan, req, res)\n\n      if (line == null) {\n        debug('skip line')\n        return\n      }\n\n      debug('log request')\n      stream.write(line + '\\n')\n    };\n\n    if (immediate) {\n      // immediate log\n      logRequest()\n    } else {\n      // record response start\n      onHeaders(res, recordStartTime)\n\n      // log when response finished\n      onFinished(res, logRequest)\n    }\n\n    next()\n  }\n}\n\n/**\n * Apache combined log format.\n */\n\nmorgan.format('combined', ':remote-addr - :remote-user [:date[clf]] \":method :url HTTP/:http-version\" :status :res[content-length] \":referrer\" \":user-agent\"')\n\n/**\n * Apache common log format.\n */\n\nmorgan.format('common', ':remote-addr - :remote-user [:date[clf]] \":method :url HTTP/:http-version\" :status :res[content-length]')\n\n/**\n * Default format.\n */\n\nmorgan.format('default', ':remote-addr - :remote-user [:date] \":method :url HTTP/:http-version\" :status :res[content-length] \":referrer\" \":user-agent\"')\ndeprecate.property(morgan, 'default', 'default format: use combined format')\n\n/**\n * Short format.\n */\n\nmorgan.format('short', ':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms')\n\n/**\n * Tiny format.\n */\n\nmorgan.format('tiny', ':method :url :status :res[content-length] - :response-time ms')\n\n/**\n * dev (colored)\n */\n\nmorgan.format('dev', function developmentFormatLine (tokens, req, res) {\n  // get the status code if response written\n  var status = headersSent(res)\n    ? res.statusCode\n    : undefined\n\n  // get status color\n  var color = status >= 500 ? 31 // red\n    : status >= 400 ? 33 // yellow\n      : status >= 300 ? 36 // cyan\n        : status >= 200 ? 32 // green\n          : 0 // no color\n\n  // get colored function\n  var fn = developmentFormatLine[color]\n\n  if (!fn) {\n    // compile\n    fn = developmentFormatLine[color] = compile('\\x1b[0m:method :url \\x1b[' +\n      color + 'm:status\\x1b[0m :response-time ms - :res[content-length]\\x1b[0m')\n  }\n\n  return fn(tokens, req, res)\n})\n\n/**\n * request url\n */\n\nmorgan.token('url', function getUrlToken (req) {\n  return req.originalUrl || req.url\n})\n\n/**\n * request method\n */\n\nmorgan.token('method', function getMethodToken (req) {\n  return req.method\n})\n\n/**\n * response time in milliseconds\n */\n\nmorgan.token('response-time', function getResponseTimeToken (req, res, digits) {\n  if (!req._startAt || !res._startAt) {\n    // missing request and/or response start time\n    return\n  }\n\n  // calculate diff\n  var ms = (res._startAt[0] - req._startAt[0]) * 1e3 +\n    (res._startAt[1] - req._startAt[1]) * 1e-6\n\n  // return truncated value\n  return ms.toFixed(digits === undefined ? 3 : digits)\n})\n\n/**\n * total time in milliseconds\n */\n\nmorgan.token('total-time', function getTotalTimeToken (req, res, digits) {\n  if (!req._startAt || !res._startAt) {\n    // missing request and/or response start time\n    return\n  }\n\n  // time elapsed from request start\n  var elapsed = process.hrtime(req._startAt)\n\n  // cover to milliseconds\n  var ms = (elapsed[0] * 1e3) + (elapsed[1] * 1e-6)\n\n  // return truncated value\n  return ms.toFixed(digits === undefined ? 3 : digits)\n})\n\n/**\n * current date\n */\n\nmorgan.token('date', function getDateToken (req, res, format) {\n  var date = new Date()\n\n  switch (format || 'web') {\n    case 'clf':\n      return clfdate(date)\n    case 'iso':\n      return date.toISOString()\n    case 'web':\n      return date.toUTCString()\n  }\n})\n\n/**\n * response status code\n */\n\nmorgan.token('status', function getStatusToken (req, res) {\n  return headersSent(res)\n    ? String(res.statusCode)\n    : undefined\n})\n\n/**\n * normalized referrer\n */\n\nmorgan.token('referrer', function getReferrerToken (req) {\n  return req.headers.referer || req.headers.referrer\n})\n\n/**\n * remote address\n */\n\nmorgan.token('remote-addr', getip)\n\n/**\n * remote user\n */\n\nmorgan.token('remote-user', function getRemoteUserToken (req) {\n  // parse basic credentials\n  var credentials = auth(req)\n\n  // return username\n  return credentials\n    ? credentials.name\n    : undefined\n})\n\n/**\n * HTTP version\n */\n\nmorgan.token('http-version', function getHttpVersionToken (req) {\n  return req.httpVersionMajor + '.' + req.httpVersionMinor\n})\n\n/**\n * UA string\n */\n\nmorgan.token('user-agent', function getUserAgentToken (req) {\n  return req.headers['user-agent']\n})\n\n/**\n * request header\n */\n\nmorgan.token('req', function getRequestToken (req, res, field) {\n  // get header\n  var header = req.headers[field.toLowerCase()]\n\n  return Array.isArray(header)\n    ? header.join(', ')\n    : header\n})\n\n/**\n * response header\n */\n\nmorgan.token('res', function getResponseHeader (req, res, field) {\n  if (!headersSent(res)) {\n    return undefined\n  }\n\n  // get header\n  var header = res.getHeader(field)\n\n  return Array.isArray(header)\n    ? header.join(', ')\n    : header\n})\n\n/**\n * Format a Date in the common log format.\n *\n * @private\n * @param {Date} dateTime\n * @return {string}\n */\n\nfunction clfdate (dateTime) {\n  var date = dateTime.getUTCDate()\n  var hour = dateTime.getUTCHours()\n  var mins = dateTime.getUTCMinutes()\n  var secs = dateTime.getUTCSeconds()\n  var year = dateTime.getUTCFullYear()\n\n  var month = CLF_MONTH[dateTime.getUTCMonth()]\n\n  return pad2(date) + '/' + month + '/' + year +\n    ':' + pad2(hour) + ':' + pad2(mins) + ':' + pad2(secs) +\n    ' +0000'\n}\n\n/**\n * Compile a format string into a function.\n *\n * @param {string} format\n * @return {function}\n * @public\n */\n\nfunction compile (format) {\n  if (typeof format !== 'string') {\n    throw new TypeError('argument format must be a string')\n  }\n\n  var fmt = String(JSON.stringify(format))\n  var js = '  \"use strict\"\\n  return ' + fmt.replace(/:([-\\w]{2,})(?:\\[([^\\]]+)\\])?/g, function (_, name, arg) {\n    var tokenArguments = 'req, res'\n    var tokenFunction = 'tokens[' + String(JSON.stringify(name)) + ']'\n\n    if (arg !== undefined) {\n      tokenArguments += ', ' + String(JSON.stringify(arg))\n    }\n\n    return '\" +\\n    (' + tokenFunction + '(' + tokenArguments + ') || \"-\") + \"'\n  })\n\n  // eslint-disable-next-line no-new-func\n  return new Function('tokens, req, res', js)\n}\n\n/**\n * Create a basic buffering stream.\n *\n * @param {object} stream\n * @param {number} interval\n * @public\n */\n\nfunction createBufferStream (stream, interval) {\n  var buf = []\n  var timer = null\n\n  // flush function\n  function flush () {\n    timer = null\n    stream.write(buf.join(''))\n    buf.length = 0\n  }\n\n  // write function\n  function write (str) {\n    if (timer === null) {\n      timer = setTimeout(flush, interval)\n    }\n\n    buf.push(str)\n  }\n\n  // return a minimal \"stream\"\n  return { write: write }\n}\n\n/**\n * Define a format with the given name.\n *\n * @param {string} name\n * @param {string|function} fmt\n * @public\n */\n\nfunction format (name, fmt) {\n  morgan[name] = fmt\n  return this\n}\n\n/**\n * Lookup and compile a named format function.\n *\n * @param {string} name\n * @return {function}\n * @public\n */\n\nfunction getFormatFunction (name) {\n  // lookup format\n  var fmt = morgan[name] || name || morgan.default\n\n  // return compiled format\n  return typeof fmt !== 'function'\n    ? compile(fmt)\n    : fmt\n}\n\n/**\n * Get request IP address.\n *\n * @private\n * @param {IncomingMessage} req\n * @return {string}\n */\n\nfunction getip (req) {\n  return req.ip ||\n    req._remoteAddress ||\n    (req.connection && req.connection.remoteAddress) ||\n    undefined\n}\n\n/**\n * Determine if the response headers have been sent.\n *\n * @param {object} res\n * @returns {boolean}\n * @private\n */\n\nfunction headersSent (res) {\n  // istanbul ignore next: node.js 0.8 support\n  return typeof res.headersSent !== 'boolean'\n    ? Boolean(res._header)\n    : res.headersSent\n}\n\n/**\n * Pad number to two digits.\n *\n * @private\n * @param {number} num\n * @return {string}\n */\n\nfunction pad2 (num) {\n  var str = String(num)\n\n  // istanbul ignore next: num is current datetime\n  return (str.length === 1 ? '0' : '') + str\n}\n\n/**\n * Record the start time.\n * @private\n */\n\nfunction recordStartTime () {\n  this._startAt = process.hrtime()\n  this._startTime = new Date()\n}\n\n/**\n * Define a token function with the given name,\n * and callback fn(req, res).\n *\n * @param {string} name\n * @param {function} fn\n * @public\n */\n\nfunction token (name, fn) {\n  morgan[name] = fn\n  return this\n}\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/../../../../node_modules/morgan/index.js?");

/***/ }),

/***/ "../../../../node_modules/on-headers/index.js":
/*!****************************************************!*\
  !*** ../../../../node_modules/on-headers/index.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
eval("/*!\n * on-headers\n * Copyright(c) 2014 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = onHeaders\n\n/**\n * Create a replacement writeHead method.\n *\n * @param {function} prevWriteHead\n * @param {function} listener\n * @private\n */\n\nfunction createWriteHead (prevWriteHead, listener) {\n  var fired = false\n\n  // return function with core name and argument list\n  return function writeHead (statusCode) {\n    // set headers from arguments\n    var args = setWriteHeadHeaders.apply(this, arguments)\n\n    // fire listener\n    if (!fired) {\n      fired = true\n      listener.call(this)\n\n      // pass-along an updated status code\n      if (typeof args[0] === 'number' && this.statusCode !== args[0]) {\n        args[0] = this.statusCode\n        args.length = 1\n      }\n    }\n\n    return prevWriteHead.apply(this, args)\n  }\n}\n\n/**\n * Execute a listener when a response is about to write headers.\n *\n * @param {object} res\n * @return {function} listener\n * @public\n */\n\nfunction onHeaders (res, listener) {\n  if (!res) {\n    throw new TypeError('argument res is required')\n  }\n\n  if (typeof listener !== 'function') {\n    throw new TypeError('argument listener must be a function')\n  }\n\n  res.writeHead = createWriteHead(res.writeHead, listener)\n}\n\n/**\n * Set headers contained in array on the response object.\n *\n * @param {object} res\n * @param {array} headers\n * @private\n */\n\nfunction setHeadersFromArray (res, headers) {\n  for (var i = 0; i < headers.length; i++) {\n    res.setHeader(headers[i][0], headers[i][1])\n  }\n}\n\n/**\n * Set headers contained in object on the response object.\n *\n * @param {object} res\n * @param {object} headers\n * @private\n */\n\nfunction setHeadersFromObject (res, headers) {\n  var keys = Object.keys(headers)\n  for (var i = 0; i < keys.length; i++) {\n    var k = keys[i]\n    if (k) res.setHeader(k, headers[k])\n  }\n}\n\n/**\n * Set headers and other properties on the response object.\n *\n * @param {number} statusCode\n * @private\n */\n\nfunction setWriteHeadHeaders (statusCode) {\n  var length = arguments.length\n  var headerIndex = length > 1 && typeof arguments[1] === 'string'\n    ? 2\n    : 1\n\n  var headers = length >= headerIndex + 1\n    ? arguments[headerIndex]\n    : undefined\n\n  this.statusCode = statusCode\n\n  if (Array.isArray(headers)) {\n    // handle array case\n    setHeadersFromArray(this, headers)\n  } else if (headers) {\n    // handle object case\n    setHeadersFromObject(this, headers)\n  }\n\n  // copy leading arguments\n  var args = new Array(Math.min(length, headerIndex))\n  for (var i = 0; i < args.length; i++) {\n    args[i] = arguments[i]\n  }\n\n  return args\n}\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/../../../../node_modules/on-headers/index.js?");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("debug");;

/***/ }),

/***/ "depd":
/*!***********************!*\
  !*** external "depd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("depd");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("mysql");;

/***/ }),

/***/ "on-finished":
/*!******************************!*\
  !*** external "on-finished" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("on-finished");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "safe-buffer":
/*!******************************!*\
  !*** external "safe-buffer" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("safe-buffer");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.ts");
/******/ 	
/******/ })()
;