import { useState } from "react"
// import attackImg from './assets/attack.png'
// import defenceImg from './assets/defend.png'

function Counter() {
    const [counter, setCounter] = useState(600)

    const handleAttack = () => {
        // console.log('Attack')
        setCounter((preCounter) => preCounter - 1)
    }

    const handleDefence = () => {
        // console.log('Defence')
        setCounter((preCounter) => preCounter + 1)
    }

    const handleReset = () => {
        setCounter(600)
    }

    return (
        <div className="row text-white">
            <h1>Counter: {counter}</h1>
            <p>Defeat the Counter to win</p>
            <p>Let&apos;s Play</p>
            {/* <div>
                <img src={attackImg} alt="attack image" />
            </div> */}

            

            <button onClick={handleAttack} style={{width: '200px'}}>Attack</button>
            <button onClick={handleDefence} style={{width: '200px'}}>Defence</button>
            <button onClick={handleReset} style={{width: '200px'}}>Reset</button>
        </div>
    )
}

export default Counter