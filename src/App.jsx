import { useState } from 'react'
import './App.css'

function App() {
  const hidePass = '../img/hidden.png'
  const showPass = '../img/show.png'
  let visiblePass = false
  const [passIcon,setPassIcon] = useState(hidePass)
  function changePassVisibilityState(){
    setPassIcon(visiblePass?hidePass:showPass)
    visiblePass = !visiblePass
  }
  return (
    <>
      <div>
        <img src={passIcon} onClick={changePassVisibilityState} />
      </div>
    </>
  )
}

export default App
