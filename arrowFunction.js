function test(param1, param2) {
  return param1 * param2;
}

// const testII = (param1, param2) => {
//   return param1 + param2;
// };

const testII = (param1, param2) => {
  const modifiedParam1 = param1 * 2;
  const modifiedParam2 = param2 * 3;

  const poweredResult = modifiedParam1 ** modifiedParam2;

  console.log(poweredResult);
};

console.log(testII(5, 3));
