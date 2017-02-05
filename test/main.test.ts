import Main from "../src/main";
import "mocha";
import { assert } from "chai";

describe("Main", () => {

    let _sut: Main;

    beforeEach(function () {
        _sut = new Main();
    });

    describe("add", () => {
        it("should add numbers", () => {
            let actual: number = _sut.add(2, 3);
            assert.equal(actual, 5, "did not add numbers");
        });
    });
});

