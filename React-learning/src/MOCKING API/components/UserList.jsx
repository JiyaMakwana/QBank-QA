// import {fetchUsers} from "../api/fakeApi.js";
import {fetchUsersRandom} from "../api/fakeApi.js";
import { useState, useEffect } from "react";


export default function UserList() {
    const [users, setUsers]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=> {
        // async function getUsers() {
        //     try {
        //         // const data=await fetchUsers();
        //         const data=await fetchUsersRandom();
        //         setUsers(data);
        //     } catch (err) {
        //         setError(err);
        //     } finally {
        //         setLoading(false);
        //     }
        // }

        // getUsers();

        fetchUsersRandom()
            .then(data => {setUsers(data);
            })
            .catch(err => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    },[]);

    return(
        <div>
            <h2>Fake User List</h2>
            {loading && <p>Loading Users...</p>}
            {error && <p>Error loading users</p>}

            {!loading && !error &&(
                <ul>
                    {users.map(user=>(
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}