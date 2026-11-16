import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Posts = () => {
  const params= useParams();
const [posts, setPosts] = useState([]);
const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
  await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`
)
setData(data)
   
    }
    fetchPosts();
   }, [])
  return (
    <div>
    {data.map(post => <div>{params.id}</div>)}
    </div>
  )
}

export default Posts

