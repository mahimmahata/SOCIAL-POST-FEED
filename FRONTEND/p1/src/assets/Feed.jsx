import React, {useState, useEffect} from 'react'
import axios from "axios"

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id:"1",
            image:"https://ik.imagekit.io/pg1vi6kqb/image_WgFXsdcfl.jpg",
            caption:"caption_caption"
        }
    ])

    useEffect( () => {
        axios.get("http://localhost:100/getApi")
        .then((res) => {
            
            setPosts(res.data.posts)
        })
    }, [])

  return (
    <section className='feed-section'>
        {
            posts.length > 0 ? (
                posts.map ( (post) => (
                    <div key={post._id} className='post-card'>
                        <img src={post.image} />
                        <p>{post.caption}</p>
                    </div>
                ))
            ) : (
                <h1>No post available</h1>
            )
        }

    </section>
  )
}

export default Feed