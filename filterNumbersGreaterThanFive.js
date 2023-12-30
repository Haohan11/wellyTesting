// 2. JavaScript: 陣列過濾
// 問題：寫一個JavaScript函式，接受一個數字陣列，並返回該陣列中所有大於5的數字。 

export default function filterNumbersGreaterThanFive(numbers) {
  // Check if input is an Array
  if (!Array.isArray(numbers)) {
    throw new Error("filterNumbersGreaterThanFive can only accept Array input");
  }

  const checkAndPush = (accumulator, current) => {
    // Check if input array contains a non-number element
    if (typeof current !== "number") {
      throw new Error(
        "filterNumbersGreaterThanFive can only accept number Array"
      );
    }

    if (current > 5) {
      accumulator.push(current);
    }

    return accumulator;
  };

  return numbers.reduce(checkAndPush, []);
}
