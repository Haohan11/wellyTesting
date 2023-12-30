// 問題：使用React創建一個簡單的計數器組件，具有增加和減少計數的按鈕。

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