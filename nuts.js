function slice(arr){
    return Array.prototype.slice.call(arr, 0)
}

function add() {
    var value = slice(arguments).reduce(function(a, b){
        return 0 + Number(a.toString()) + Number(b.toString());
    }, 0);

    function fn(){
        return add.apply(null, [value].concat(slice(arguments)));
    };

    fn.toString = function(){
        return value;
    }

    return fn;
}

function test(a, b) {
  if (a == b) {
    console.log('OK');
  } else {
    console.log(a + ' != ' + b);
  }
}

test(add(1, 2), 3);
test(add(3)(4)(), 7);
test(add(3)(4)(5), 12);

var three = add(3);
var four = add(4);
test(three, 3);
test(four, 4);
test(three(5), 8);
test(three(6), 9);
test(three(four), 7);
test(three(four)(three(four)), 14);
