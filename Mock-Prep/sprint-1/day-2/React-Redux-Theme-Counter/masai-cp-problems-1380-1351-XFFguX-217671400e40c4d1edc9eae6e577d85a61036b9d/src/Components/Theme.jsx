import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleTheme } from '../Redux/action'

export const Theme = () => {
    const dispatch=useDispatch()
    const themval=useSelector(state=>state.themeReducer.theme)
    
  return (
    <div>
        <button disabled={themval==="light"} onClick={()=>dispatch(handleTheme("light"))}>Switch to Light</button>
        <button disabled={themval==="dark"} onClick={()=>dispatch(handleTheme("dark"))}>Switch to Dark</button>
    </div>
  )
}
