import {auth,provider} from './Firebase'
import { Button } from '@material-ui/core'
import React from 'react'
import '../assets/Login.css'
import { useStateValue } from './StateProvider'
import { actionTypes } from './Reducer'
function Login() {
      // console.log(useStateValue())
      const [, dispatch] = useStateValue()
      
      const signIn=()=>{
            auth.signInWithPopup(provider)
                .then(result=>{
                      dispatch({
                            type:actionTypes.SET_USER,
                            user:result.user,
                      })
                  //     console.log(result)
                })
                .catch(error=>alert(error))
      }

      return (
            <div className="login">
                  <div className="login_logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/225px-2021_Facebook_icon.svg.png" alt="facebook logo"></img>
                        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook-name"/>
                  </div>
                  <Button type="submit" onClick={signIn}>Sign In</Button>
            </div>
      )
}

export default Login
