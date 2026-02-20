import { useState, useEffect } from "react";
function FetchPost() {
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ display, setDisplay ] =useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res=await fetch("https://jsonplaceholder.typicode.com/posts");
                if(!res.ok) {
                    throw new Error("Something went wrong");
                }

                const data= await res.json();
                set
            } catch (error) {
                
            }
        };
    });
}