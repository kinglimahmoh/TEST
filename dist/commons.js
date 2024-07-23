/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksapui5_hello_world"] = self["webpackChunksapui5_hello_world"] || []).push([["commons"],{

/***/ "./test/unit/unitTests.test.js":
/*!*************************************!*\
  !*** ./test/unit/unitTests.test.js ***!
  \*************************************/
/***/ (() => {

eval("/*global QUnit*/\n\nsap.ui.define([\"sap/ui/demo/helloworld/controller/App.controller\"], function (AppController) {\n  \"use strict\";\n\n  QUnit.module(\"App Controller Tests\");\n\n  // test/unit/unitTests.test.js\n  QUnit.test(\"Sample Test\", function (assert) {\n    assert.ok(true, \"This test should pass.\");\n  });\n  QUnit.start(); // Start QUnit after tests are defined\n});\n\n//# sourceURL=webpack://sapui5-hello-world/./test/unit/unitTests.test.js?");

/***/ }),

/***/ "./webapp/controller/App.controller.js":
/*!*********************************************!*\
  !*** ./webapp/controller/App.controller.js ***!
  \*********************************************/
/***/ (() => {

eval("sap.ui.define([\"sap/ui/core/mvc/Controller\"], function (Controller) {\n  \"use strict\";\n\n  return Controller.extend(\"sap.ui.demo.helloworld.controller.App\", {\n    onInit: function onInit() {\n      // Initialization code\n    }\n  });\n});\n\n//# sourceURL=webpack://sapui5-hello-world/./webapp/controller/App.controller.js?");

/***/ })

}]);