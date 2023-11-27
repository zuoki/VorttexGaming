import axios from 'axios';
import Details from '@/components/details/Details';
import { useRouter } from 'next/navigation';
import React from 'react';

const Page = async ({ params }) => {
    const response = await axios(`http://localhost:3000/api/games/${params.id}`);
    return (
        <div>
            <Details game={response.data[0]} />
        </div>
    );
};

export default Page;

