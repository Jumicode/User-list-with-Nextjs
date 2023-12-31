"use client";

import Link from "next/link";

function Users({users}){
    return(
         <ul >
            {users.map(user => (
               <Link
               key={user.id}
               href={`user/users/${user.id}`}
               >
                <li key={user.id} className="bg-slate-400 mb-2 p-4 rounded-md text-black  
                flex justify-between"
               
                >
               
                <div>
          <h5 className="font-bold">{user.id} {user.first_name} {user.last_name}</h5>
          <p className="text-slate-300">email: {user.email}</p>
          <img src={user.avatar} className="rounded-full w-20" alt="avatar"></img>

                </div>
                </li>
               </Link>
            ))}
        </ul>
    )
}



export default Users;