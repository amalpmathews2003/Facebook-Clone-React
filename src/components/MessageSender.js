import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons'
import React,{useState} from 'react'
import '../assets/MessageSender.css'
import { useStateValue } from './StateProvider';
import db from './Firebase'
import firebase from 'firebase/compat/app';

function MessageSender() {
      const [{user}, ]=useStateValue()
      const [input, setInput] = useState('');
      const [imageUrl, setImageUrl] = useState('');
      
      const handleSubmit=e=>{
            e.preventDefault()

            db.collection("posts").add({
                  message:input,
                  timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                  profilePic:user.photoURL,
                  image:imageUrl,
                  username:user.displayName
            })

            setInput('')
            setImageUrl('')
      }

      return (
            <div className="messageSender">
                  <div className="messageSender__top">
                        <Avatar src={user.photoURL}/>
                        <form>
                              <input 
                                    value={input}
                                    onChange={e=>setInput(e.target.value)}
                                    className="messageSender__input" 
                                    type="text"
                                    placeholder={`Whats on your Mind ${user.displayName} ?`}>
                              </input>
                              <input 
                                    value={imageUrl}
                                    onChange={e=>setImageUrl(e.target.value)}
                                    className="messageSender__input" 
                                    type="text" 
                                    placeholder="Image URL (optional)">
                              </input>
                        <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                        </form>
                  </div>
                  <div className="messageSender__bottom">
                        <div className="messageSender__option">
                              <Videocam style={{color:"red"}}/>
                              <h3>Live Video</h3>
                        </div> 
                        <div className="messageSender__option">
                              <PhotoLibrary style={{color:"green"}}/>
                              <h3>Photo/Video</h3>
                        </div> 
                        <div className="messageSender__option">
                              <InsertEmoticon style={{color:"orange"}}/>
                              <h3>Feeling/Activity</h3>
                        </div> 
                  </div>
            </div>
      )
}

export default MessageSender
