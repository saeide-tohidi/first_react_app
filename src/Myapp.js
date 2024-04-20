import { Component } from "react";
// import "./Myapp.css";
import CounterSecound from "./components/CounterSecound"
import { useState } from "react";
import styles from './Myapp.module.css'


const Myapp = () => {
    // console.log(props.count)

    const [count, setNum] = useState(8);

    const increaseCount = () => {
        setNum(count + 1)
    }

    const decreaseCount = () => {
        if (count == 0) {
            return alert("Pleace use positive number")
        }
        setNum(count - 1)

    }


    const resetCount = () => {
        setNum(0)
    }

    const myStyle = { color: 'red', border: 'blue' }
    return (
        <div className={styles.Myapp} >
            <h1 style={myStyle}>My counter</h1>

            <CounterSecound inc={increaseCount} dec={decreaseCount} rest={resetCount} count={count} />
        </div>
    )

}




export default Myapp;