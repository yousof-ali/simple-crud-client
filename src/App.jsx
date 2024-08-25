
import { Link } from 'react-router-dom';
import './App.css'

function App() {
  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const newUser = {name,email};
    console.log(newUser);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body:JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(result => {
      console.log(result);
      if(result){
        form.reset();
        alert(name + " added done! ")
      }
    })
  }

  return (
    <>
      <h1>simple CRUD</h1>  
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Name' /><br />
        <input type="email" name="email" placeholder='Email'  /><br />
        <input type="submit" value={"submit"}  />
      </form>
      <Link to={"/users"}><button>users</button></Link>
    </>
  )
}

export default App
