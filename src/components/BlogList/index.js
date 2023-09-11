import {useState,useEffect} from 'react'
 import {BallTriangle} from 'react-loader-spinner'
 import BlogItem from '../BlogItem'

const BlogList=()=>{
    
    const [blogList,setBlogList]= useState([])
    const [isLoading,setLoading]= useState(true)

   useEffect(()=>{
 
    const getBlogList=async ()=>{

        
        const response = await fetch("https://apis.ccbp.in/blogs")
        const data = await response.json()
        console.log(data)
        const updatedData= data.map(eachItem=>({
            id: eachItem.id,
            title: eachItem.title,
            avatarUrl: eachItem.avatar_url,
            imageUrl: eachItem.image_url,
            topic: eachItem.topic,
            author: eachItem.author,
        }))
        setLoading(false)
       setBlogList(updatedData)

    }
    getBlogList()

   })

   const renderBlogList =()=>{
        return(
            <div className='list-item-container'>
             {blogList.map(eachItem=>(
                <BlogItem key={eachItem.id} eachItem={eachItem}/>
             ))}
            </div>
        )
   }

   return(
     <div className='blog-list-container'>
        {isLoading? <BallTriangle height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}/>:renderBlogList()}
     </div>


   )
}

export default BlogList