"use strict";
var main_1 = require("../src/main");
require("mocha");
var chai_1 = require("chai");
describe("Main", function () {
    var _sut;
    beforeEach(function () {
        _sut = new main_1["default"]();
    });
    describe("add", function () {
        it("should add numbers", function () {
            var actual = _sut.add(2, 3);
            chai_1.assert.equal(actual, 5, "did not add numbers");
        });
    });
});
//# sourceMappingURL=main.test.js.map