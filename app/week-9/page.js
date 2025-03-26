"use client";

import Link from 'next/link';


import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  console.log(user);

  

  return (
    <div>
      <h1>week 9</h1>
      <p>HEY THERE CLICK BELOW TO GET INFINTE AURA!!!</p>
      <p>
        {user ? (
          <button onClick={firebaseSignOut}>Sign Out</button>
        ) : (
          <button onClick={gitHubSignIn}>Sign In</button>
        )}
      </p>
      {user && <p>
    Welcome, {user.displayName}!!! You are signed in with {user.email}. NOW YOU HAVE INFINITE AURA!!! <img src={user.photoURL} alt={user.displayName} /> 
    <Link href="/week-9/shopping-list">Visit here for groceries!!!</Link> </p>}
    </div>
  );
}