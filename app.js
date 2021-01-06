function prepare() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i) //IIFE
    );
  }
  console.log("Давталт дуусны дараа i : " + i);
  return arr;
}
var massive = prepare();
massive[0]();
massive[1]();
massive[2]();
