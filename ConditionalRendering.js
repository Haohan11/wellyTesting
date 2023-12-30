// 4. React: 條件渲染
// 問題：在React中，如何根據條件渲染兩種不同的內容？

import LoggedInPage from "./LoggedInPage";
import NotLoggedInPage from "./NotLoggedInPage";

function ConditionalRendering({ isLoggedIn }) {
  return <>
    { isLoggedIn ? <LoggedInPage /> : <NotLoggedInPage /> }
  </>;
}

export default ConditionalRendering;
