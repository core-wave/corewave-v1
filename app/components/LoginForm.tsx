import * as z from "zod";
import { useNavigate } from "@remix-run/react";
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
import { PasswordInput } from "./ui/password-input";
import signIn from "./functions/signIn";

export default function LoginForm() {

  const navigate = useNavigate();

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
    const { EmailAddress, Password } = values;
    const User = await signIn(EmailAddress, Password);
    if (User.IsEmployee) {
      navigate('/admin');
    }
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