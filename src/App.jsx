import { useState } from 'react'
import './App.css'

function App() {
  const hidePass = '../img/hidden.png'
  const showPass = '../img/show.png'
  let visiblePass = false
  const [typePass,setTypePass] = useState('password')
  const [passIcon,setPassIcon] = useState(hidePass)
  function changePassVisibilityState(){
    visiblePass = !visiblePass
    if(visiblePass){
      setTypePass('text')
      setPassIcon(showPass)
    } else {
      setTypePass('password')
      setPassIcon(hidePass)
    }
  }
  return (
    <>
      <div>
        <img src={passIcon} onClick={changePassVisibilityState} />
      </div>
      <input type={typePass} value={"Esse é um texto teste"}/>
    </>
  )
}

export default App
