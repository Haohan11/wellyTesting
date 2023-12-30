// 1. JavaScript: 字串反轉

export default function reverseString(str) {
  // check whether input is string type
  if (typeof str !== "string" && !(str instanceof String)) {
    throw new Error("reverseString can only accept string type argument");
  }

  const strLength = str.length;
  let result = "";
  for (let i = strLength - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
