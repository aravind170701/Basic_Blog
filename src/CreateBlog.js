import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [PostedBy, setPostedBy] = useState("Hatake Kakashi");

    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const blog = {title, content, PostedBy};

    const handleSubmit = (event) => {

        setIsLoading(true);

        event.preventDefault();

        fetch('http://localhost:1234/blogs', {
            method : "POST",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify(blog)
        })
        .then(() => {
            console.log("SuccessFully Added");
            console.log(blog);
            setIsLoading(false);
        });

        history.push("/");
    }

    return (  
        <div className="create">
            <h2>Create Blog</h2>
            <form onSubmit = {handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    required
                    value = {title}
                    onChange = {e => setTitle(e.target.value)}
                />

                <label>Blog Content:</label>
                <textarea 
                    required
                    value = {content}
                    onChange = {e => setContent(e.target.value)}
                ></textarea>

                <label>Blog Author:</label>
                <select onChange = {e => setPostedBy(e.target.value)}>
                    <option value="Hatake Kakashi">Hatake Kakashi</option>
                    <option value="Uzumaki Naruto">Uzumaki Naruto</option>
                    <option value="Uchiha Itachi">Uchiha Itachi</option>
                </select>

                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button>Adding Blog...</button>}
               
            </form>
        </div>
    );
}
 
export default CreateBlog;