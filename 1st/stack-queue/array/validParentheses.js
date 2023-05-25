const StackArray = require("./stackArray");

const stack = new StackArray();

const openTag = ["{", "(", "["];
let str = "([[])";
const isValid = (str) => {
  for (let index = 0; index < str.length; index++) {
    if (openTag.includes(str[index])) {
      stack.push(str[index]);
    } else {
      const headStack = stack.pop();
      if (headStack === "{" && str[index] !== "}") {
        return false;
      }
      if (headStack === "[" && str[index] !== "]") {
        return false;
      }
      if (headStack === "[" && str[index] !== "]") {
        return false;
      }
    }
  }
  return stack.isEmpty();
};

console.log(isValid(str));
