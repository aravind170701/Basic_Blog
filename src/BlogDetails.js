import { Button } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import useData from "./useData";

const BlogDetails = () => {

    const {id} = useParams();

    const {data, loading} = useData('http://localhost:1234/blogs/' + id);

    const history = useHistory();

    const handleDelete = () => {

        fetch('http://localhost:1234/blogs/' + id, {
            method : "DELETE"
        })
        .then(() => {
            console.log("Deleted Successfully");
            history.push("/");
        });
    }

    return (  
        <div className="blog-details">
        
            {loading && <div>{loading}</div>}
            {data && (
                <article>
                    <h1>{data.title}</h1>
                    <p className="data-content">{data.content}</p>
                    <p>Posted By: </p>
                    <p className="author-name">{data.PostedBy}</p>
                    <div className="delete-button">
                            <Button variant="contained" color="secondary" onClick = {handleDelete}>
                                Delete
                            </Button>
                        </div>
                </article>
            )}   
        </div>
    );
}
 
export default BlogDetails;