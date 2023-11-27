import PostCard from "../components/postcard/PostCard";
import Loading from "./loading";
import './posts.css'

export const metadata = {
    title: "Posteos"
}

const loadPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const datos = await res.json();
    await new Promise(resolve => setTimeout(resolve, 3000))
    return datos;
}

const Posts = async () => {

    const posts = await loadPosts();
    return (
        <div className="postsGrid">
            {
                posts.map(post => (
                    <PostCard post={post} key={post.id} />
                ))
            }
        </div>
    )
}

export default Posts;