import { useEffect, useState } from "react";

const useAdmin = user => {

    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true)
    console.log('useadmin e asce')
    useEffect(() => {
        const email = user?.email;
        console.log(email, 'email pasce')
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                    setAdminLoading(false);
                    console.log('use admin e data ')
                })
        }
    }, [user])

    return [admin, adminLoading]

}

export default useAdmin;