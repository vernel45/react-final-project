import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Posts = () => {
  const params= useParams();
 
  useEffect(() => {
    async function fetchPosts() {
   const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts?userid=${params.id}`)
    console.log(data)
    }
    fetchPosts();
   }, [])
  return (
    <div>
      {params.id}
    </div>
  )
}

export default Posts

