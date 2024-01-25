import { Link } from "@remix-run/react";

export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form method="post">
                {/* Login form fields will go here */}
                <button type="submit">Log In</button>
            </form>
            <Link to="/">Go back to the homepage</Link>
        </div>
    );
}
