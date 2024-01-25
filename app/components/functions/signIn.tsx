import { supabase } from "../clients/supabaseClient";

export default async function signIn(EmailAddress: string, Password: string) {
  try {
    // Sign in with email and password
    const { data, error } = await supabase.auth.signInWithPassword({
      email: EmailAddress,
      password: Password
    });

    // Handle any errors during sign-in
    if (error) throw error;

    // Assuming sign-in was successful, and the user object is returned
    if (data) {
      console.log('Signed in user:', data);

      // Fetch additional user details from your 'Users' table
      const { data: userData, error: userError } = await supabase
        .from('Users')
        .select('*')
        .eq('UserID', data.user.id) // Use user.id from the sign-in response
        .single(); // Assuming 'id' is unique and you expect only one record

      // Handle any errors while fetching user details
      if (userError) throw userError;

      console.log('Additional user data:', userData);
      return (userData);
    }
  } catch (err) {
    // Check if the error is an instance of Error and has a message
    if (err instanceof Error) {
      console.error('Error:', err.message);
    } else {
      console.error('An unknown error occurred');
    }
  }
}
