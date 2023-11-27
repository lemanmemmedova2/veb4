import React from 'react'
import './Test.css'
import { useState } from 'react';
const Test = () => {
  const [alert1, setAlert1] = useState('');
  const [number, setNumber] = useState("")
  function email(e) {
      let a = e.target.value
      let b = a.split('.').reverse()[0]
      if (b === 'com' || b === 'az') {
          setAlert1('Yalnız .ru domenlərinə icazə verilir');
          document.querySelector('.one').style.display = 'block'
          setNumber(b)
      } else {
          document.querySelector('.one').style.display = 'none'
          setAlert1('');
          
      }
  }
  const submit = (e) => {

      if (number === 'com' || number === 'az' || pass < 8) {
          alert('Emaili ve parolu duzgun daxil edin!');
      }
      
  }
  const [pass, setPass] = useState(0);
  const password = (e) => {
      setPass(e.target.value.length)
  }
  return (
    <div>
       <div className='UserLogin'>
    <label>Email
        <input className='input1' onKeyUp={email} type='email' />
    </label>
    <p className='one'>{alert1}</p>
    <label> Password
        <input className='input2' placeholder='min 8 simvol' minLength={8} onKeyUp={password} type='password' />

    </label>

    <button onClick={submit}>Login</button>
</div>
    </div>
  )
}
export default Test