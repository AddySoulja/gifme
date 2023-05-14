'use client'
import React, { FormEvent, useState } from "react";
import signIn from "../../src/auth/LogIn";
import { useRouter } from 'next/navigation'
import Link from "next/link";

function Page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const { response, error } = await signIn(email, password);

        if (error) {
            return alert(error)
        }
        console.log("LOgin resp: ", response)
        return router.push("/")
    }
    return (<div className="wrapper">
        <div className="form-wrapper">
            <h1 className="mt-10">Log In to your account</h1>
            <form onSubmit={handleForm} className="form">
                <label htmlFor="email">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="Enter your email..." />
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="Enter your password..." />
                </label><br /><br />
                <button type="submit" className="form-btn">Log In</button>
            </form>
            <p>
                Don't have an account ? <Link className="link" href="/sign-up">Sign Up here.</Link>
            </p>
        </div>

    </div>);
}

export default Page;