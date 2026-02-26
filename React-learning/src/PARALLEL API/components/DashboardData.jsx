import { fetchUser, fetchPosts, fetchNotifications } from "../api/dashboardApi.js";
import { useState, useEffect } from "react";

export default function DashboardData() {
    const [users, setUsers]=useState([]);
    const [posts, setPosts]=useState([]);
    const [notifications, setNotifications]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(null);

    useEffect(() => {
        // Promise.all([
        //     fetchUser(),
        //     fetchPosts(),
        //     fetchNotifications()
        // ])
        //     .then(([userData,postData,notificationData])=>{
        //         setUsers(userData);
        //         setPosts(postData);
        //         setNotifications(notificationData);
        //     })
        //     .catch(err => {
        //         setError(err);
        //     })
        //     .finally(()=>(
        //         setLoading(false)
        //     ));

        Promise.allSettled([
            fetchUser(),
            fetchPosts(),
            fetchNotifications()
        ])
        .then(([userRes, postRes, notifRes]) => {

            if (userRes.status === "fulfilled") {
            setUsers(userRes.value);
            } else {
            setError("Failed to load users");
            }

            if (postRes.status === "fulfilled") {
            setPosts(postRes.value);
            } else {
            setError("Failed to load posts");
            }

            if (notifRes.status === "fulfilled") {
            setNotifications(notifRes.value);
            } else {
            setError("Failed to load notifications");
            }

        })
        .finally(() => {
            setLoading(false);
        });

    },[])

    return (
        <div>
            <h1>Dashboard Data</h1>

            {loading && <p>Loading Data...</p>}
            {error && <p>{error}</p>}

            {!loading && !error &&(
                <div>
                    <h3>User</h3>
                    <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.username}</li>
                    ))}
                    </ul>

                    <h3>Posts</h3>
                    <ul>
                        {posts.map(post => (
                            <li key={post.id}>{post.post}</li>
                        ))}
                    </ul>

                    <h3>Notifications</h3>
                    <ul>
                        {notifications.map(notif => (
                            <li key={notif.id}>{notif.notification}</li>
                        ))}
                    </ul>

                </div>
                
            )}
        </div>
    )
}