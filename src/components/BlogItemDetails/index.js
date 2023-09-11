import { useState ,useEffect} from "react"
import { useParams } from "react-router-dom"
import {BallTriangle} from 'react-loader-spinner'

import './index.css'
const BlogItemDetails=()=>{
    const [isLoading,setLoading]= useState(true)
    const [apiData,setApiData] = useState(null)
    const params= useParams()
    const {id} = params
    useEffect(()=>{

        const fetchedData=async ()=>{
            const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
            const data = await response.json()
            const updatedData = {
              id: data.id,
              title: data.title,
              avatarUrl: data.avatar_url,
              imageUrl: data.image_url,
              topic: data.topic,
              author: data.author,
              content: data.content,
            }
            setLoading(false)
            setApiData(updatedData)

        }
        fetchedData()
    })

   const getRenderBlogItemDetails = () => {
     
        const {id, title, avatarUrl, imageUrl, author, content} = apiData
    
        return (
          <div className="blog-item-details-container">
            <h1 className="title-blogs">{title}</h1>
            <div className="avatar-container-1">
              <img src={avatarUrl} alt={`avatar ${id}`} className="avatar-image" />
              <p className="author-1">{author}</p>
            </div>
            <img src={imageUrl} alt={`blogs${id}`} className="blogs-image" />
            <p className="content">{content}</p>
          </div>
        )
      }

    return(
        <div className="main-container">
        {isLoading ? (
          <div data-testid="loader">
           <BallTriangle height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}/>
          </div>
        ) : (
          getRenderBlogItemDetails()
        )}
      </div>
    )

    
}

export default BlogItemDetails