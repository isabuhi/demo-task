import axios from "axios";

axios.defaults.headers.common['Content-Type']=  'application/json'

export function register (username, password){
fetch("https://demoblog.afeagroup.com/user/register", {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: `username=${username}& password=${password}& passconf=${password}`
})
.then(response => response.json())
.then((response)=>{
    console.log(response)
    if (response.status)
    localStorage.setItem("verification", JSON.stringify(response))
   })
}


export function logIn (username, password){
    fetch("https://demoblog.afeagroup.com/user/login", {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:`username=${username}& password=${password}`
    })
    .then(response => response.json())
    .then((response)=>{
        console.log(response)
        if (response.status)
        localStorage.setItem("verification", JSON.stringify(response))
       })
    }

