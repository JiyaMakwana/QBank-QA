async function getLtdData(){
    try {
        let res=await fetch("https://jsonplaceholder.typicode.com/posts");
        let data=await res.json();

        data.slice(0,5).forEach(element => {
            console.log(element.title);
        });
    } catch (error) {
        console.log(error);
    }
}
getLtdData();