import BlogList from './BlogList';
import useData from './useData';

const Home = () => {

    const {data, loading} = useData('http://localhost:1234/blogs');

    return (
        <div className="homePage">
            {loading && <div>{loading}</div>}
            {data && <BlogList blogs = {data} author = "Sasuke"/>}
        </div>
    );
}
 
export default Home;