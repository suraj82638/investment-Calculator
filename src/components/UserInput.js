import React, { useState } from 'react'

const UserInput = () => {
  const initialState = {
    'current-savings': 10000,
    'yearly-contribution': 5000,
    'expected-return': 40,
    'duration': 7
  }

  const [userInputValue, setUserInputValue] = useState(initialState)

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log("submit")
  }

const resetHandler = () => {
  setUserInputValue(initialState)
}

const inputChangeHandler = (input, value) =>{
  setUserInputValue((prevState)=> {
   return {
    ...prevState, [input]: value
   }
  } )

}


  return (
    <div>
        <form onSubmit={submitHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" onChange={(e)=>{inputChangeHandler('current-savings', e.target.value)}} value={userInputValue['current-savings']} id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number"  onChange={(e)=>{inputChangeHandler('yearly-contribution', e.target.value)}} value={userInputValue['yearly-contribution']} id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number"  onChange={(e)=>{inputChangeHandler('expected-return', e.target.value)}} value={userInputValue['expected-return']} id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number"  onChange={(e)=>{inputChangeHandler('duration', e.target.value)}} value={userInputValue['duration']} id="duration" />
          </p>
        </div>
        <p className="actions">
          <button onClick = {resetHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  )
}

export default UserInput