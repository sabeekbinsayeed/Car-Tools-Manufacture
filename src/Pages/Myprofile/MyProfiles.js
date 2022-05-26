import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
const MyProfiles = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }
    console.log(user)
    return (
        <div>
            <h1>{user.displayName}</h1>
            <h1>hello</h1>

        </div>
    );
};

export default MyProfiles;