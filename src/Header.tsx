import { useSolidAuth } from "@ldo/solid-react";
import { useState } from "react";
import type { FunctionComponent } from "react";

export const Header: FunctionComponent = () => {
    const { session, login, logout } = useSolidAuth();
    const [issuer, setIssuer] = useState("https://solidcommunity.net");
return (
    <header>
    {session.isLoggedIn ? (
        // If the user is logged in
        <p>
        Logged in as {session.webId}.{" "}
        <button onClick={logout}>Log Out</button>
        </p>
    ) : (
        // If the user is not logged in
        <div>
        <p>You are not logged in.</p>
        <input 
            type="text" 
            value={issuer} 
            onChange={(e) => setIssuer(e.target.value)} 
        />
        <button onClick={() => login(issuer)}>Log In</button>
        </div>
    )}
    <hr />
    </header>
);
};