var c = require("../js/vcx.js");
var assert = require('assert');
var board = require("../js/board.js");

describe('test checkmate', function() {

  it(`it should be OK`, function() {
    // 一步取胜 [1,5]
    b = [
      [0, 0, 0, 0, 0, 0],
      [2, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    board.init(b);
    var p = c.vcf(1, 8);
    console.log(p)
    assert.ok(p);
  });

  it(`it should be OK`, function() {
    // 冲四，活三，胜
    b = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 2, 2, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 2, 0],
      [0, 0, 1, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]
    ];
    board.init(b);
    var p = c.vct(1, 10);
    console.log(p)
    assert.ok(p);
    //vcf 就不行
    p = c.vcf(1, 10);
    console.log(p)
    assert.ok(!p);
  });

  it(`it should be OK`, function() {
    //vcf
    b = [
      [ 0, 0, 2, 2, 1, 0, 0, 0, 0],
      [ 0, 2, 1, 1, 2, 0, 0, 0, 0],
      [ 0, 2, 1, 1, 2, 0, 0, 0, 0],
      [ 0, 2, 1, 1, 0, 0, 0, 0, 0],
      [ 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 2, 2, 0],
      [ 0, 0, 0, 0, 0, 1, 1, 1, 2],
      [ 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    board.init(b);
    var p = c.vct(1, 6);
    console.log(p)
    assert.ok(p);
  });


  it(`it should be OK`, function() {
    var s = new Date();
    b = [
      [ 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 1, 0, 2, 0, 0, 0],
      [ 0, 0, 1, 2, 1, 1, 0, 0, 0, 0],
      [ 0, 0, 1, 2, 1, 2, 2, 0, 0, 0],
      [ 0, 0, 0, 1, 2, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    board.init(b);
    var p = c.vct(1);
    console.log(p)
    assert.ok(p);
  });
      


  it(`it should be OK`, function() {
    // 这种情况赢不了
    var s = new Date();
    b = [
      [ 0, 1, 1, 0, 0, 0, 0],
      [ 0, 2, 2, 2, 0, 0, 0],
      [ 0, 0, 0, 0, 1, 0, 0],
      [ 0, 0, 0, 0, 1, 0, 0],
      [ 0, 0, 0, 0, 1, 0, 0],
      [ 0, 0, 0, 0, 2, 0, 0],
      [ 0, 0, 0, 0, 0, 0, 0],
    ];
    board.init(b);
    var p = c.vct(1);
    console.log(p)
    assert.ok(!p);
  });

});
