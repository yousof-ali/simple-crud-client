import { useLoaderData, useParams } from "react-router-dom";


const UserDetail = () => {
    const {userId} = useParams();
    console.log(userId);
    const data = useLoaderData();
    console.log(data);

    const handleUpdateUser = (e) =>{
        e.preventDefault();
        const form = e.target 
        const name = form.name.value;
        const email = form.email.value;

        const updateuser = {name,email}

        console.log(updateuser)

        fetch(`http://localhost:5000/users/${data._id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateuser)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if(result.modifiedCount>0){
                alert("user updated!")
            }
            else{
               alert("something went wrong!")
            }
        })
    }
    
    return (
        <div>
            <h5> i am from userdetails{data.name}</h5>
            <h4>Update User</h4>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" defaultValue={data?.name} /><br />
                <input type="email" name="email" defaultValue={data?.email} /><br />
                <input type="submit" value={"update"} />
            </form>
        </div>
    );
};

export default UserDetail;