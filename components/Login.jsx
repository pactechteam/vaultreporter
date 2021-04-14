import { signIn, signOut, useSession } from 'next-auth/client'

export default function Page() {
  const [ session, loading ] = useSession()

  return <>
    {!session && <>
      Not signed in <br/>
      <button onClick={() => signIn()}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>}
  </>
}


// import React, { useState } from "react";
// import axios from "axios";
// import Router from "next/router";
// import styles from './Layout.module.css'

// export default function Users(props) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const submitHandler = (e) => {
//     axios
//       .post("/api/login", {
//         username: username,
//         password: password,
//       })
//       .then(function (response) {
//         if (response.data === "complete") {
//           Router.push({
//             pathname: "/dashboard",
//           });
//         }
//       });
//   };

//   return (
//     <div className={styles.background}>

//       <div>
        
// 	<h2>
// 	  Log in to PACCENTER
// 	</h2>
        
// 	<label>
//           <p>
// 	    Username
// 	  </p>
//           <input
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           ></input>
//         </label>

//         <label>
// 	   <p>
// 	    Password
// 	    </p>
//           <input
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           ></input>
//         </label>
        
// 	<button onClick={submitHandler} className={styles.button}>
// 	    Log In
// 	</button>
      
//       </div>
//     </div>
//   );
// }
