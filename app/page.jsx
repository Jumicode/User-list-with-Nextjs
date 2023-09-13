async function fetchUsers(){
    const res = await  fetch('https://reqres.in/api/users?page=2');
    const data = await res.json();
    return data.data;
}

async function Home(){

    const users = await fetchUsers();
    return(
        <ul className="">
            {users.map(user => (
                <li key={user.id}>
                <div>
          <h5>{user.id} {user.first_name} {user.last_name}</h5>
          <p>email: {user.email}</p>

                </div>
                </li>
            ))}
        </ul>
    )
}



export default Home;