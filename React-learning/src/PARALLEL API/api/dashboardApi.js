export function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {id:1,username:"Jiya Makwana"},
                {id:2,username:"Radha Makwana"},
                {id:3,username:"Gautam Makwana"}
            ])
        },1000)
    })
}


export function fetchPosts(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {id:1,post:"3k"},
                {id:2,post:"2k"},
                {id:3,post:"1k"}
            ])
        },2000)
    })
}


export function fetchNotifications() {
    return new Promise((resolve,reject) => {
        let random=Math.random();
        setTimeout(() => {
            if(random > 0.5)
            {
                resolve([
                {id:1,notification:4},
                {id:2,notification:3},
                {id:3,notification:2}
                ])
            } else{
                reject("Error fetching")
            }
            
        },3000)
    })
}