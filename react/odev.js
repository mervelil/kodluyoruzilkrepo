
import axios from 'axios'
async function getData(Number){
    const users=await(
        await fetch("https://jsonplaceholder.typicode.com/users/1")
    ).json();
    const posts=await(
        await fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    ).json();

    console.log("users",users);
    console.log("posts1",posts);
}
getData(1);