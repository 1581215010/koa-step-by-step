// node --harmony generator/8_co_promise.js
// output:
//
// start run...
// tick 1 done after 500 ms
// tick 2 done after 1000 ms
// tick 3 done after 2000 ms

var co = require('co');

function tick(time) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

function* GeneratorFunction() {
  var time;
  console.log('start run...');
  time = yield tick(500);
  console.log('tick 1 done after %s ms', time);
  time = yield tick(1000);
  console.log('tick 2 done after %s ms', time);
  time = yield tick(2000);
  console.log('tick 3 done after %s ms', time);
}

co(GeneratorFunction).then();
