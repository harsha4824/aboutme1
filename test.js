QUnit.test('Testing ', function (assert) {
    assert.equal(speedConverter1(2),3.2,'Tested the conversion with 2 MPH');
    assert.equal(speedConverter1(23),36.800000000000004,'Tested the conversion with 23 MPH');
    assert.equal(speedConverter1(0),0,'Tested the conversion with 0 MPH');
    assert.equal(speedConverter1(-10),-16,'Tested with negative value');
    assert.equal(speedConverter1(5.5),8.8,'Tested the conversion with 5.5 MPH');
 });