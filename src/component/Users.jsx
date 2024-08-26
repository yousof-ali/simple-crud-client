import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
   const [users,setUsers] = useState([]);


   useEffect(() => {
    fetch("http://localhost:5000/users")
    .then(res => res.json())
    .then(data => {
        setUsers(data)
    })
   },[])

   const handleDel = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/${id}`,{
        method:"DELETE"
    })
    .then(res => res.json())
    .then(result => {
        console.log(result)
        if(result.deletedCount != 0){
            alert(id +" deleted");
            const filteredUser = users.filter(singleuser => singleuser._id !== id);
            setUsers(filteredUser);
        }
        else{
            alert(id +" not Deleted");
        }
    })

   }

    return (
        <div>
            {
                users.map(singleuser => <p key={singleuser._id}>Name:{singleuser.name} Email:{singleuser.email} <Link to={`/details/${singleuser._id}`}>Details</Link> <button onClick={() => handleDel(singleuser._id)}>del</button> </p>)
            }
        </div>
    );
};

export default Users;