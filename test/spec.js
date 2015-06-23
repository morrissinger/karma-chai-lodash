/* eslint-disable no-unused-expressions */
describe('chai', function () {
  it('chai', function () {
    true.should.be.true;
    expect(true).to.be.true;
    assert(true, 'true is true');
  });

  describe('chai-lodash', function () {
    it('should', function (done) {
      ({foo: 'bar'}).should.be.like({foo: 'bar'});
      done();
    });

    it('expect', function (done) {
      expect({foo: 'bar'}).to.be.like({foo: 'bar'});
      done();
    });

    it('assert', function (done) {
      assert.like({foo: 'bar'}, {foo: 'bar'}, 'This had better be true.');
      done();
    });
  });

});

