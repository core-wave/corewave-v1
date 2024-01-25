import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { createClient } from "@supabase/supabase-js";
import { PasswordInput } from "./ui/password-input";

export default function LoginForm() {
  // Initialize Supabase client
  const supabaseUrl = "https://sfafpujmnlaldgtrflyv.supabase.co";
  const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmYWZwdWptbmxhbGRndHJmbHl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5NTkxMzgsImV4cCI6MjAyMTUzNTEzOH0.aijbd7BspsTtqGMSgkzMoYJSwwanF1uGUnfb_pNlEi0";
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const formSchema = z.object({
    EmailAddress: z.string().email(),
    Password: z.string()
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      EmailAddress: "",
      Password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4">
        <FormField
          control={form.control}
          name="EmailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email
              </FormLabel>
              <FormControl>
                <div className="flex gap-4">
                  <Input placeholder="mail@example.com" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Wachtwoord
              </FormLabel>
              <FormControl>
                <div className="flex gap-4">
                  <PasswordInput placeholder="Flappie123" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-2">Log in</Button>
      </form>
    </Form>
  );
}