'use client'
import React, { FormEvent, useState } from "react";
import signUp from "../../src/auth/SignUp";
import { useRouter } from 'next/navigation'
import Link from "next/link";

function Page() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const { error } = await signUp(username, email, password);
        if (error) {
            return alert(error);
        }
        return router.push("/log-in");
    }
    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <h1 className="mt-10">Create a new account</h1>
                <form
                    onSubmit={(e) => handleForm(e)}
                    className="form">
                    <label htmlFor="displayName">
                        <p>Username</p>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} required type="text" name="username" id="username" placeholder="Username" />
                    </label>
                    <label htmlFor="email">
                        <p>Email</p>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="random@mail.com" />
                    </label>
                    <label htmlFor="password">
                        <p>Password</p>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="create password" />
                    </label><br /><br />
                    <button type="submit" className="form-btn">Sign up</button>
                </form>
                <p>
                    Already have an account ? <Link className="link" href="/log-in">Log In here.</Link>
                </p>
            </div>
        </div>
    );
}

export default Page;