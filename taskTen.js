function commonLetters(string1, string2) {
  let matches = [];

  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      if (string1[i] == string2[j]) matches.push(string1[i]);
    }
  }
  return matches.join(",");
}
console.log(commonLetters("liesa", "mabe"));
