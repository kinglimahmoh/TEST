/*global QUnit*/

QUnit.module("Example Test Module");

QUnit.test("Simple test", function (assert) {
    assert.ok(true, "This test is fine");
    var value = "hello";
    assert.equal(value, "hello", "We expect value to be hello");
});
