export function fakeProductApi() {
    return new Promise((resolve,reject) => {
        let random=Math.random();
        setTimeout(()=>{
            if(random > 0.5) {
                resolve([
                {id:1,name:"Guitar", price:"₹10,000"},
                {id:2,name:"Violin", price:"₹7,000"},
                {id:3,name:"Piano", price:"₹50,000"},
            ])
            } else {
                reject("Error fetching the Products!!");
            }
            
        },1000);
    })
}