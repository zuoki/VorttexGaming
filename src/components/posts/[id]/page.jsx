import Link from 'next/link';
import Posts from '../page';
import { Suspense } from 'react';

const Page = async ({ params }) => {
    const postFound = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = await postFound.json();

    return (
        <div >
            <h1>{data.id}.{data.title}</h1>
            <p>{data.body}</p>
            <Link href={'/posts'}>Volver</Link>
            <h3>Otras publicaciones</h3>
            <hr />
            <Suspense fallback={<div>Cargando publicaciones...</div>}>
                <Posts />
            </Suspense>
        </div>
    )

}

export default Page;