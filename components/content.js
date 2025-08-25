
import React, { useState, useEffect } from "react";
import Cards from "./Cards";

export default function Content() {
    const [Profiles, setProfiles] = useState([]);
    const [numberOfProfiles, setNumber] = useState('');
    const [userName, setUserName] = useState('');
    const [num, Checknum] = useState(false);

    async function fetchP(count) {
        if (!count || count <= 0) {
            alert("Please enter a valid number of profiles.");
            return;
        }
        setProfiles(null);
        let ran = Math.floor(Math.random() * 6000 + 1);
        // console.log(typeof count); 
        const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);

        const data = await response?.json();
        Checknum(true);
        setProfiles(data);
    }
    async function fetchUser(userName) {
        setProfiles(null);
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response?.json();
        console.log(data);
        setProfiles(data);
        Checknum(false);
    }

    useEffect(() => {
        fetchP(10);
    }, []);

    return (
        <>
            < div className="search" >
                <input type="number" placeholder="How many to find" value={numberOfProfiles} onChange={(e) => setNumber(e.target.value)} />
                <button onClick={() => fetchP(Number(numberOfProfiles))}>Fetch</button>

                <input type="text" placeholder="Enter the username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <button onClick={() => fetchUser(userName)}>search</button>
            </div >


            <div className="cards-outer" >
             
                {Profiles &&
                    (num ? (Profiles.map((value) => {
                            return (
                                <Cards name={value?.login} image={value?.avatar_url} ulink={value?.html_url} key={value.id} />
                            )})):(
                            <Cards name={Profiles?.login} image={Profiles?.avatar_url} ulink={Profiles?.html_url} key={Profiles.id} />)
                        )}

            </div>
        </>
    )
}



 

