import React, {useState, useEffect } from "react";

export default function Github(){
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/ayushichoudhary-19')
        .then(response => response.json())
        .then(data => {
            setData(data);
        })
    },[])
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-xl">Github Followers:
        {data.followers}
        <img src={data.avatar_url} className="rounded-full" alt="Git Profile Picture" width={300}></img></div>
    )
}