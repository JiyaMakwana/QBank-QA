export function fetchUsers() {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve([
                {id:1,name:"Jiya"},
                {id:2,name:"Diya"},
                {id:3,name:"Riya"}
            ]);
        },2000);
    })
}
// This is called Mocking an API.
export function fetchUsersRandom() {
    return new Promise((resolve,reject) =>{
        let random=Math.random();
        setTimeout(() => {
            if(random>0.5) {
                resolve([
                    {id:1,name:"Jiya"},
                    {id:2,name:"Diya"},
                    {id:3,name:"Riya"}
                ])
            } else {
                reject("Network error! Failed to fetch users")
            }
        },2000);
    })
}