import { useState } from "react"
import attackImg from './assets/attack.png'
import defenceImg from './assets/defend.png'

function Counter() {
    const [counter, setCounter] = useState(600)

    const handleAttack = () => {
        setCounter((preCounter) => {
        let randomCount = preCounter + Math.round(Math.random() * 10)
        return randomCount
        })
    }

    const handleDefence = () => {
        setCounter((preCounter) => {
        let randomCount = preCounter - Math.round(Math.random() * 10)
        return randomCount
        })
    }

    const handleReset = () => {
        setCounter(600)
    }

    const handleRandomPlay = () => {
        let playMode = Math.round(Math.random())
        playMode === 0 ? handleAttack() : handleDefence();
    }

    return (
        <div className='row text-white text-center'>
      <h1>Counter: {counter} </h1>
      <p>You win when counter reach 0</p>
      <p>Let&#39;s Play: </p>
      <p>Game status:</p>
      <div className='col-6 col-md-3 offset-md-3'>
        <img
          className='p-4 rounded'
          src={attackImg}
          alt='Attack'
          onClick={handleAttack}
          style={{ cursor: 'pointer', width: '100%', border: '2px solid green' }}
        />
      </div>
      <div className='col-6 col-md-3'>
        <img
          className='p-4 rounded'
          src={defenceImg}
          alt='Defend'
          onClick={handleDefence}
          style={{ cursor: 'pointer', width: '100%', border: '2px solid green' }}
        />
      </div>

      <div className='col-12 col-md-4 offset-md-4'>
        <button className='btn btn-secondary w-100 mt-2' onClick={handleRandomPlay}>Random Play</button>
        <button className='btn btn-warning w-100 mt-2' onClick={handleReset}>Reset</button>
      </div>
    </div>
    )
}

export default Counter