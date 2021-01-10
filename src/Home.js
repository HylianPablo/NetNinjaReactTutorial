import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const  Home = () => {
    const [blogs, setBlogs] = useState(null);


    useEffect( () => {
        fetch('http://localhost:8000/blogs')
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
            });
    }, []);

    //<BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario´s blog"/>
    
    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All blogs"/>}
        </div>
      );
}
 
export default Home;