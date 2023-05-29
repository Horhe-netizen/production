import { useState } from "react"
import styles from './Counter.module.scss';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button className={styles['button']} onClick={() => setCount((prev) => ++prev)}>increment</button>
    </>
  )
}