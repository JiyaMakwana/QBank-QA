// Rewrite:
// login()
//   .then(user => getProfile(user))
//   .then(profile => console.log(profile));

// 👉 async/await version
async function login()
{
    return "Jiya logged in successfully";
}
async function getProfile(user)
{
    return `Profile of ${user}`;
}
async function load()
{
    let log=await login();
    let profile=await getProfile(log);

    console.log(profile);
}
load();