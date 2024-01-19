function outer() {
  let a = 5;
  return function () {
    let b = 10;
    console.log(a + b);
  };
}

const result = outer();
// console.log(result);
result();
