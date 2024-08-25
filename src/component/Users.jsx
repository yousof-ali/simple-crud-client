import { useEffect, useState } from 'react';

const Users = () => {
   const [users,setUsers] = useState([]);


   useEffect(() => {
    fetch("http://localhost:5000/users")
    .then(res => res.json())
    .then(data => {
        setUsers(data)
    })
   },[])

    return (
        <div>
            {
                users.map(singleuser => <h1 key={singleuser._id}>{singleuser.name}</h1>)
            }
        </div>
    );
};

export default Users;