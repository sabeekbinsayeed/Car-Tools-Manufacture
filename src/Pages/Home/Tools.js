import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';



import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([])
    const navigate = useNavigate('');
    // https://arcane-plateau-22519.herokuapp.com/products
    useEffect(() => {
        fetch('tools.json').then(res => res.json()).then(data => setTools(data))
    }, [])
    if (tools.length === 0) {
        return <Loading></Loading>
    }
    // const navigate = useNavigate('');


    const handleNavigate = () => {
        navigate(`/`)
    }
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary uppercase font-bold text-xl'>Our Tools</h3>

            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols:1 gap-x-2 gap-y-2'>
                {
                    tools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>
            {/* <button className='ware-button w-50 mx-auto mb-5 pb-4' onClick={() => { handleNavigate() }}><p>Manage Inventories</p></button> */}



        </div >
    );
};

export default Tools;