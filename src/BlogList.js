import { Link } from 'react-router-dom';

const BlogList = ({blogs, author, handleDelete}) => {
    
    return ( 
        <div className="blog-list">
            {blogs.map( (blog) => (
                <div className="each-blog-view" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`} className="LinkClass">
                        <h2>{blog.title}</h2>
                        <p>Posted By: </p>
                        <p className="author-name">{blog.PostedBy}</p>

                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;