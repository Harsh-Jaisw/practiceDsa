function Anagram(str, str1) {
  let obj = {};
  let obj1 = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }
  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
  }
  for (let k of Object.keys(obj)) {
    if (!obj1[k]) {
      return false;
    }
    if (obj[k] !== obj1[k]) {
      return false;
    }
  }
  return true;
}
console.log(Anagram("cat", "act"));
