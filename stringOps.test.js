const strLength = require('./stringOps');

test(`Should return Error if string count isn't between 0 & 10`, () => {
  //arrange
  const string = 'helloworldworld';
  //act
  const actual = () => {
    strLength(string);
  };

  //assert
  expect(actual).toThrowError();
}); //this is a function that throws an error

test(`Should return length of the string`, () => {
  //arrange
  const str = 'hello';
  //act
  const actual = strLength(str);

  //assert
  expect(actual).toBe(str.length);
}); //this is a function that throws an error
