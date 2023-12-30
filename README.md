## Welly 面試題目 

## 1. JavaScript: 字串反轉
問題 :
```
function reverseString(str) {
  // 實作你的解答	
}
console.log(reverseString("Hello")); // 預期輸出: "olleH”
```
解答 : [<u>reverseString.js</u>](reverseString.js)
```
function reverseString(str) {
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
```

## 2. JavaScript: 陣列過濾
問題：寫一個JavaScript函式，接受一個數字陣列，並返回該陣列中所有大於5的數字。 
範例：
```
function filterNumbersGreaterThanFive(numbers) {
  // 實作你的解答
}

const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]
```
解答 : [<u>filterNumbersGreaterThanFive.js</u>](filterNumbersGreaterThanFive.js)
```
function filterNumbersGreaterThanFive(numbers) {
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
```

## 3. JavaScript: 重構
問題：重構這段程式碼並說明原因
```
function formatName(firstName, lastName) {
  let formattedName = '';

  if (firstName) {
    formattedName += firstName;
  }

  if (lastName) {
    formattedName += ' ' + lastName;
  }

  return formattedName;
}
```
解答 : [<u>formatName.js</u>](formatName.js)
```
// 判斷字串函式
function isString(str) {
  return typeof str === "string" || str instanceof String;
}

// 設定參數未傳入時的預設值為空字串
function formatName(firstName = '', lastName = '') {
    
  // 確保輸入值為字串型別，否則丟出錯誤
  if (!isString(firstName) || !isString(lastName)) {
    throw new Error("formatName can only accept string type arguments");
  }

  // 連接字串，考量到有可能有未傳入的參數導致遺留連接處的空白字元，移除字串起始及結尾處的空白字元後輸出
  return `${firstName} ${lastName}`.trim();
}
```

## 4. React: 條件渲染
問題：在React中，如何根據條件渲染兩種不同的內容？
範例：
```
function ConditionalRendering({ isLoggedIn }) {
  // 實作你的條件渲染
}
```
解答 : [<u>ConditionalRendering.js</u>](ConditionalRendering.js)
```
import LoggedInPage from './LoggedInPage'
import NotLoggedInPage from './NotLoggedInPage'

function ConditionalRendering({ isLoggedIn }) {
    return <>
        { isLoggedIn ? <LoggedInPage /> : <NotLoggedInPage /> }
    </>
}

export default ConditionalRendering
```

## 5. React: 組件
問題：使用React創建一個簡單的計數器組件，具有增加和減少計數的按鈕。

解答 : [<u>ReactCounter.js</u>](ReactCounter.js)
```
import { useState } from 'react'

const ReactCounter = () => {
    const [count, setCount] = useState(0)

    const add = () => setCount(prev => prev + 1)
    const reduce = () => setCount(prev => prev - 1)

    return (
        <div>
            <button onClick={add}>+</button>
            {count}
            <button onClick={reduce}>-</button>
        </div>
    )
}

export default ReactCounter
```