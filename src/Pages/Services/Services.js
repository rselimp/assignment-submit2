import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import Service from './Service';
import Servicelist from './Servicelist';

const Services = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(3)
  

    //use fetch in axios
    useEffect( () =>{
        const fetchPosts = async() =>{
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setPosts(res.data)
            setLoading(false)

        }
        fetchPosts()
    },[])

//get current posts

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)

   
//change page 
const paginate =(pageNumber) =>setCurrentPage(pageNumber)

const pageFront = () => setCurrentPage(currentPage+1)

const pageBack = () =>setCurrentPage(currentPage-1)


    return (
        <div className='bg-base-200'>
           <Servicelist posts={currentPosts} loading={loading}/>
           <Pagination  totalPosts = {posts.length} postsPerPage={postsPerPage} 
           currentPage={currentPage}
           paginate={paginate}
           pageBack={pageBack}  pageFront={pageFront}
           setCurrentPage={setCurrentPage}/>

        </div>
    );
};

export default Services;