import React, { useState ,useEffect} from 'react'
import Blogslist from './Blogslist';

function Home() {
    const [blogs, setBlogs] = useState(null)
    const[isspending,setIsspending]=useState(true)
     
    useEffect(() => {
       setTimeout(() => { fetch(' http://localhost:8000/blogs')
       .then(res => {
           return res.json();
       })
          .then(data => {
              setBlogs(data);
              setIsspending(false);
      })
           
       }, 2000);
    },[]);
     
    return (
        <div className='home'>
            {isspending && <div>loading...</div>}
            {blogs && <Blogslist blogs={blogs} title="All Blogs"   /> }
        </div>
    );
}
export default Home;