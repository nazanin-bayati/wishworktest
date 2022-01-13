"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst dayjs = __webpack_require__(/*! dayjs */ \"dayjs\");\nconst jalaliday = __webpack_require__(/*! jalali-dayjs */ \"jalali-dayjs\");\ndayjs.extend(jalaliday);\nconst numbers = {\n    fa: [\n        '۰',\n        '۱',\n        '۲',\n        '۳',\n        '۴',\n        '۵',\n        '۶',\n        '۷',\n        '۸',\n        '۹'\n    ],\n    ar: [\n        '٠',\n        '١',\n        '٢',\n        '٣',\n        '٤',\n        '٥',\n        '٦',\n        '٧',\n        '٨',\n        '٩'\n    ]\n};\nconst formatNumber = (value, lang, options = {\n})=>{\n    let newValue = value;\n    // show decimals\n    if (options.fraction) {\n        newValue = newValue.toFixed(options.fraction);\n    }\n    // add comma to number\n    if (options.comma) {\n        const parts = newValue.toString().split('.');\n        parts[0] = parts[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');\n        newValue = parts.join('.');\n    }\n    // convert fa number\n    if (lang === 'fa' || lang === 'ar') {\n        newValue = newValue.toString().replace(/\\d/g, (digit)=>numbers[lang][digit]\n        );\n    }\n    return newValue;\n};\nconst formatDatetime = (value, lang, options = {\n    toFormat: 'YYYY-MM-DD'\n})=>{\n    const date = dayjs(value, options.fromFormat);\n    const d = date.locale(lang).format(options.toFormat);\n    return lang === 'fa' ? formatNumber(d, lang) : d;\n};\nmodule.exports = {\n    i18n: {\n        defaultLocale: 'fa',\n        locales: [\n            'fa',\n            'en'\n        ],\n        localeDetection: false\n    },\n    serializeConfig: false,\n    reloadOnPrerender: true,\n    interpolation: {\n        format: (value, format, lang, options)=>{\n            let newOptions = {\n                ...options\n            };\n            const splittedFormat = format.replace(')', '').split('(');\n            const newFormat = splittedFormat[0];\n            const optionsFromFormat = splittedFormat[1];\n            if (optionsFromFormat) {\n                const keyValuePair = optionsFromFormat.split(',');\n                keyValuePair.forEach((item)=>{\n                    const keyValue = item.split(':');\n                    const k = keyValue[0].trim();\n                    const v = keyValue[1].replace(/'/g, '').trim();\n                    newOptions = {\n                        [k]: v,\n                        ...newOptions\n                    };\n                });\n            }\n            if (newFormat === 'number') {\n                return formatNumber(value, lang, newOptions);\n            }\n            if (newFormat === 'datetime') {\n                return formatDatetime(value, lang, newOptions);\n            }\n            return value;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLO1FBQ2IsQ0FBQztJQUNGLENBQUM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2lzaHdvcmt0ZXN0Ly4vaTE4bi5qcz85MzhiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRheWpzID0gcmVxdWlyZSgnZGF5anMnKTtcbmNvbnN0IGphbGFsaWRheSA9IHJlcXVpcmUoJ2phbGFsaS1kYXlqcycpO1xuXG5kYXlqcy5leHRlbmQoamFsYWxpZGF5KTtcblxuY29uc3QgbnVtYmVycyA9IHtcblx0ZmE6IFsn27AnLCAn27EnLCAn27InLCAn27MnLCAn27QnLCAn27UnLCAn27YnLCAn27cnLCAn27gnLCAn27knXSxcblx0YXI6IFsn2aAnLCAn2aEnLCAn2aInLCAn2aMnLCAn2aQnLCAn2aUnLCAn2aYnLCAn2acnLCAn2agnLCAn2aknXSxcbn07XG5cbmNvbnN0IGZvcm1hdE51bWJlciA9ICh2YWx1ZSwgbGFuZywgb3B0aW9ucyA9IHt9KSA9PiB7XG5cdGxldCBuZXdWYWx1ZSA9IHZhbHVlO1xuXG5cdC8vIHNob3cgZGVjaW1hbHNcblx0aWYgKG9wdGlvbnMuZnJhY3Rpb24pIHtcblx0XHRuZXdWYWx1ZSA9IG5ld1ZhbHVlLnRvRml4ZWQob3B0aW9ucy5mcmFjdGlvbik7XG5cdH1cblxuXHQvLyBhZGQgY29tbWEgdG8gbnVtYmVyXG5cdGlmIChvcHRpb25zLmNvbW1hKSB7XG5cdFx0Y29uc3QgcGFydHMgPSBuZXdWYWx1ZS50b1N0cmluZygpLnNwbGl0KCcuJyk7XG5cdFx0cGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpO1xuXHRcdG5ld1ZhbHVlID0gcGFydHMuam9pbignLicpO1xuXHR9XG5cblx0Ly8gY29udmVydCBmYSBudW1iZXJcblx0aWYgKGxhbmcgPT09ICdmYScgfHwgbGFuZyA9PT0gJ2FyJykge1xuXHRcdG5ld1ZhbHVlID0gbmV3VmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9cXGQvZywgZGlnaXQgPT4gbnVtYmVyc1tsYW5nXVtkaWdpdF0pO1xuXHR9XG5cblx0cmV0dXJuIG5ld1ZhbHVlO1xufTtcblxuY29uc3QgZm9ybWF0RGF0ZXRpbWUgPSAodmFsdWUsIGxhbmcsIG9wdGlvbnMgPSB7IHRvRm9ybWF0OiAnWVlZWS1NTS1ERCcgfSkgPT4ge1xuXHRjb25zdCBkYXRlID0gZGF5anModmFsdWUsIG9wdGlvbnMuZnJvbUZvcm1hdCk7XG5cdGNvbnN0IGQgPSBkYXRlLmxvY2FsZShsYW5nKS5mb3JtYXQob3B0aW9ucy50b0Zvcm1hdCk7XG5cdHJldHVybiBsYW5nID09PSAnZmEnID8gZm9ybWF0TnVtYmVyKGQsIGxhbmcpIDogZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRpMThuOiB7XG5cdFx0ZGVmYXVsdExvY2FsZTogJ2ZhJyxcblx0XHRsb2NhbGVzOiBbJ2ZhJywgJ2VuJ10sXG5cdFx0bG9jYWxlRGV0ZWN0aW9uOiBmYWxzZSxcblx0fSxcblx0c2VyaWFsaXplQ29uZmlnOiBmYWxzZSxcblx0cmVsb2FkT25QcmVyZW5kZXI6IHRydWUsXG5cdGludGVycG9sYXRpb246IHtcblx0XHRmb3JtYXQ6ICh2YWx1ZSwgZm9ybWF0LCBsYW5nLCBvcHRpb25zKSA9PiB7XG5cdFx0XHRsZXQgbmV3T3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuXG5cdFx0XHRjb25zdCBzcGxpdHRlZEZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKCcpJywgJycpLnNwbGl0KCcoJyk7XG5cdFx0XHRjb25zdCBuZXdGb3JtYXQgPSBzcGxpdHRlZEZvcm1hdFswXTtcblx0XHRcdGNvbnN0IG9wdGlvbnNGcm9tRm9ybWF0ID0gc3BsaXR0ZWRGb3JtYXRbMV07XG5cblx0XHRcdGlmIChvcHRpb25zRnJvbUZvcm1hdCkge1xuXHRcdFx0XHRjb25zdCBrZXlWYWx1ZVBhaXIgPSBvcHRpb25zRnJvbUZvcm1hdC5zcGxpdCgnLCcpO1xuXHRcdFx0XHRrZXlWYWx1ZVBhaXIuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdFx0XHRjb25zdCBrZXlWYWx1ZSA9IGl0ZW0uc3BsaXQoJzonKTtcblx0XHRcdFx0XHRjb25zdCBrID0ga2V5VmFsdWVbMF0udHJpbSgpO1xuXHRcdFx0XHRcdGNvbnN0IHYgPSBrZXlWYWx1ZVsxXS5yZXBsYWNlKC8nL2csICcnKS50cmltKCk7XG5cblx0XHRcdFx0XHRuZXdPcHRpb25zID0ge1xuXHRcdFx0XHRcdFx0W2tdOiB2LFxuXHRcdFx0XHRcdFx0Li4ubmV3T3B0aW9ucyxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG5ld0Zvcm1hdCA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0cmV0dXJuIGZvcm1hdE51bWJlcih2YWx1ZSwgbGFuZywgbmV3T3B0aW9ucyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChuZXdGb3JtYXQgPT09ICdkYXRldGltZScpIHtcblx0XHRcdFx0cmV0dXJuIGZvcm1hdERhdGV0aW1lKHZhbHVlLCBsYW5nLCBuZXdPcHRpb25zKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH0sXG5cdH0sXG59O1xuIl0sIm5hbWVzIjpbImRheWpzIiwicmVxdWlyZSIsImphbGFsaWRheSIsImV4dGVuZCIsIm51bWJlcnMiLCJmYSIsImFyIiwiZm9ybWF0TnVtYmVyIiwidmFsdWUiLCJsYW5nIiwib3B0aW9ucyIsIm5ld1ZhbHVlIiwiZnJhY3Rpb24iLCJ0b0ZpeGVkIiwiY29tbWEiLCJwYXJ0cyIsInRvU3RyaW5nIiwic3BsaXQiLCJyZXBsYWNlIiwiam9pbiIsImRpZ2l0IiwiZm9ybWF0RGF0ZXRpbWUiLCJ0b0Zvcm1hdCIsImRhdGUiLCJmcm9tRm9ybWF0IiwiZCIsImxvY2FsZSIsImZvcm1hdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJpMThuIiwiZGVmYXVsdExvY2FsZSIsImxvY2FsZXMiLCJsb2NhbGVEZXRlY3Rpb24iLCJzZXJpYWxpemVDb25maWciLCJyZWxvYWRPblByZXJlbmRlciIsImludGVycG9sYXRpb24iLCJuZXdPcHRpb25zIiwic3BsaXR0ZWRGb3JtYXQiLCJuZXdGb3JtYXQiLCJvcHRpb25zRnJvbUZvcm1hdCIsImtleVZhbHVlUGFpciIsImZvckVhY2giLCJpdGVtIiwia2V5VmFsdWUiLCJrIiwidHJpbSIsInYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./i18n.js\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ \"./i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst MyApp = ({ Component , pageProps  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n        ...pageProps,\n        __source: {\n            fileName: \"/Users/nazanineskandarbayati/Desktop/wishwork/wishworktest/src/pages/_app.tsx\",\n            lineNumber: 6,\n            columnNumber: 2\n        },\n        __self: undefined\n    })\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.appWithTranslation)(MyApp, (_i18n__WEBPACK_IMPORTED_MODULE_2___default())));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDaUQ7QUFDcEI7QUFFN0IsS0FBSyxDQUFDRSxLQUFLLElBQUksQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBVyxDQUFDLHdFQUMvQ0QsU0FBUztXQUFLQyxTQUFTOzs7Ozs7Ozs7QUFHekIsaUVBQWVKLGdFQUFrQixDQUFDRSxLQUFLLEVBQUVELDhDQUFJLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dpc2h3b3JrdGVzdC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBhcHBXaXRoVHJhbnNsYXRpb24gfSBmcm9tICduZXh0LWkxOG5leHQnO1xuaW1wb3J0IGkxOG4gZnJvbSAnLi4vLi4vaTE4bic7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IChcblx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwV2l0aFRyYW5zbGF0aW9uKE15QXBwLCBpMThuKTtcbiJdLCJuYW1lcyI6WyJhcHBXaXRoVHJhbnNsYXRpb24iLCJpMThuIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ "jalali-dayjs":
/*!*******************************!*\
  !*** external "jalali-dayjs" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jalali-dayjs");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();