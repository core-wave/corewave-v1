import { Link } from "@remix-run/react";
import { supabase } from "~/components/clients/supabaseClient";

export default async function Admin() {
    
    return (
        <div>
            <h1>Admin</h1>

            <Link to="/">Go back to the homepage</Link>
        </div>
    );
};
