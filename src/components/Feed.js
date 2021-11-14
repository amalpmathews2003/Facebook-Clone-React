import React, { useState, useEffect } from 'react'
import StoryReel from './StoryReel'
import '../assets/Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './Firebase'
function Feed() {
      const [posts, setPosts] = useState([])

      useEffect(() => {
            db.collection("posts")
                  .orderBy("timestamp","desc")
                  .onSnapshot((snapshot) => {
                        setPosts(snapshot.docs.map((doc) => {
                              return {
                                    id: doc.id,
                                    data: doc.data(),
                              }
                        }))
                  })
      }, [])
      return (
            <div className="feed">
                  <StoryReel />
                  <MessageSender />

                  {posts.map(post => {
                        return(
                        <Post
                              key={post.id}
                              profilePic={post.data.profilePic}
                              message={post.data.message}
                              image={post.data.image}
                              username={post.data.username}
                              timestamp={post.data.timestamp}
                        ></Post>)
                  })}





            </div>
      )
}

export default Feed
