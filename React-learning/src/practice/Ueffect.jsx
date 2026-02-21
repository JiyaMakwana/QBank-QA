import { useState, useEffect } from "react";
function FetchUser() {
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ users, setUsers ] =useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res=await fetch("https://jsonplaceholder.typicode.com/users");
                if(!res.ok) {
                    throw new Error("Something went wrong");
                }

                const data= await res.json();
                setUsers(data);

            } catch (error) {
                setError(error.message);

            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    },[]);

    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>

    return (
        <div>
            <h2>Users</h2>
            {users.map(user => (
                <div key={user.id}>
                    <p><b>Name:: </b>{user.name}  <b>Email:: </b>{user.email}</p>
                    {/* <p>{user.email}</p> */}
                </div>
                
            ))}
        </div>
    )

}

function FetchPost() {
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ posts, setPosts ] =useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res=await fetch("https://jsonplaceholder.typicode.com/posts");
                if(!res.ok) {
                    throw new Error("Something went wrong");
                }

                const data= await res.json();
                // limit of 3..can also write ?_limit=5 in api after posts
                setPosts(data.slice(0,3));

            } catch (error) {
                setError("Something went Wrong",error);

            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    },[]);

    if(loading) return <p>Loading...</p>
    if (error)
    return (
      <p style={{ color: "red", fontWeight: "bold" }}>
        {error}
      </p>
    );

    return (
        <div>
            <h2>Users</h2>
            {posts.map(post => (
                <div key={post.id}
                 style={{ 
                        border: "1px solid gray", 
                        padding: "10px", 
                        marginBottom: "10px" 
                    }}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    {/* <p>{user.email}</p> */}
                </div>
                
            ))}
        </div>
    )
}

function CounterEffect() {
    const [ count, setCount ]=useState(0);
    useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
        <h2>Counter</h2>
        <h3>Count:: {count}</h3>
        <button onClick={() => setCount(count +1)}> Increase </button>
    </div>
  )
    
}

function DynamicFetch() {
    const [userId, setUserId]=useState(1);
    const [user, setUser]=useState(null);
    const [error, setError]=useState(null);
    const [loading, setLoading]=useState(true);

    useEffect(() => {
        const fetchUser= async() => {
            try {
                setLoading(true);
                const response=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

                if(!response.ok) {
                    throw new Error("Something went Wrong");
                }

                const data=await response.json();
                setUser(data);

            } catch (err) {
                setError("Something went Wrong",err)
            } finally {
                setLoading(false);
            }
        }
        fetchUser();
    },[userId]); //dependency

    // if(loading) return <p style={{color:"blue"}}>Loading...</p>
    // if(error) return <p style={{ color: "red" }}>{error}</p>

    return (
        <>
            <h1>Dynamic User List</h1>
            <button onClick={() => setUserId((prev) => Math.max((prev-1, 1)))}>Previous</button>
            <button onClick={() => setUserId((prev) => prev + 1)}>Next</button>

            <h3>User ID: {userId}</h3>

            {loading && <p style={{color:"blue"}}>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {user && !loading &&(
                <div>
                    <p><strong>Name: </strong> {user.name}</p>
                </div>
            )}
        </>
    )
}
// fetch only when button click
function ControlledFetch() {
    const [load, setLoad] = useState(false); //switch to trigger useEffect
    const [error,setError]= useState(null);
    const [loading,setLoading]= useState(false); //is api currently fetching?
    const [users,setUsers] =useState([]);

    useEffect(() => {
        if(!load) return; //prevent auto run on mount
        const fetchUsers= async() => {
            try {
                    setLoading(true);
                    setError(null);

                    const res=await fetch("https://jsonplaceholder.typicode.com/users");

                    if(!res.ok) {
                        throw new Error("Something Went Wrong")
                    }

                    const data=await res.json();
                    setUsers(data);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
                setLoad(false);
            }
        };

        fetchUsers();
    },[load]);

    {if(loading) return <p style={{color:"blue"}}>Loading...</p>}
    {if(error) return <p style={{color:"red"}}>{error}</p>}

    return (
        <div>
            <button onClick={() =>setLoad(true)}>Load Users</button>

            {users.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    )   
}

function CategorySwitcher() {
    const [type, setType] =useState("posts");
    const [data,setData]=useState([]);
    const [error,setError]=useState(null);
    const [loading,isLoading]=useState(false);

    useEffect(() => {
        const fetchType= async() => {

        }

        fetchType();
    },[type])
}

function EffectWrapper() {
    return (
        <>
            {/* <FetchUser/>
            <FetchPost/>
            <CounterEffect/> */}
            {/* <DynamicFetch/> */}
            <ControlledFetch/>
        </>
    )
}

export default EffectWrapper;