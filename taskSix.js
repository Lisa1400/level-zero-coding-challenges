function maximumNumber(...numbers) {
  let maxNum = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }
  return maxNum;
}
console.log(maximumNumber(1, 22, 3, 2))



