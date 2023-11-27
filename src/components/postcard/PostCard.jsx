"use client"
import Link from 'next/link';

const PostCard = ({ post }) => {

    return (
        <div className="postD" key={post.id}>
            <Link href={`/posts/${post.id}`}><h3>{post.id}.{post.title}</h3></Link>,
            <p>{post.body}</p>
            <button onClick={() => {}}>Click</button>
        </div>
    )

}

export default PostCard;