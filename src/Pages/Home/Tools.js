import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ToolsCard from './ToolsCard';

const Tools = () => {
    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('https://cryptic-everglades-66180.herokuapp.com/tools').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-10'>
            <h3 className='text-3xl text-center text-info font-semibold'>Available Parts</h3>
            <div className='grid sm:grid-cols-1 lg:grid-cols-1 px-12  py-5'>
                {
                    tools.map(tool => <ToolsCard
                        key={tool._id}
                        tool={tool}
                        refetch={refetch}
                    ></ToolsCard>)
                }
            </div>
        </div>
    );
};

export default Tools;