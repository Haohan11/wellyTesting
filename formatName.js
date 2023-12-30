/*

3. JavaScript: 重構
問題：重構這段程式碼並說明原因

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

*/

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

export default formatName;
