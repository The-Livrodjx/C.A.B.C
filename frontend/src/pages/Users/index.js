// 
import React, {useState, useEffect} from 'react';
import './styles.css'

export default function Users() {

    const [informations, setInformations] = useState([]);
    const [user, setUser] = useState([]);


    useEffect(() => {

        if(informations.length === 0 && user.length!== 0) {
            fetch(`https://api.github.com/users/` + user)
                .then(response => response.json())
                .then(res => setInformations(res))
        }
    })

    function handleSubmit(e) {
        alert(user)
    }

    return (
        <div className="users-page">
            <div className="users-content">

                <form action="" onSubmit={e => {handleSubmit()}}>
                    <input type="text" onInput={(e) => setUser(e.target.value)}/>
                </form>

                {console.log(user)}
                
                <ul className="user-info">
                    <li>
                        <img src={informations.avatar_url} className="user-image" alt=""/>
                        <h2>Nome: {informations.login}</h2>
                        <h2>Localização: {informations.location}</h2>
                    </li>
                </ul>
            </div>
        </div>
    )
}
