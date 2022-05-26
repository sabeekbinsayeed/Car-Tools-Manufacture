import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
const MyProfiles = () => {
    const [user, loading, error] = useAuthState(auth);
    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/profile?email=admin@gmail.com`).then(res => res.json()).then(data => setInfo(data))

    }, [])

    if (loading) {
        return <Loading></Loading>


    }


    console.log(user)
    return (
        <div>
            <h1>{user?.displayName}</h1>
            <h1>hello {info.length}</h1>
            <p>{info[0].name}</p>
            <p>{info[0].education}</p>

        </div>
    );
};

export default MyProfiles;