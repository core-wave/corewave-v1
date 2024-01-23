import type { MetaFunction } from "@remix-run/node";
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
import { useToast } from "~/components/ui/use-toast";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = "https://sfafpujmnlaldgtrflyv.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmYWZwdWptbmxhbGRndHJmbHl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5NTkxMzgsImV4cCI6MjAyMTUzNTEzOH0.aijbd7BspsTtqGMSgkzMoYJSwwanF1uGUnfb_pNlEi0";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const formSchema = z.object({
  EmailAddress: z.string().email(),
});

export function EmailForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      EmailAddress: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { data, error } = await supabase
      .from("OpeningNewsletter")
      .insert({ EmailAddress: values.EmailAddress });

    if (error && error.code == '23505') {
      console.error("Error inserting data:", error);
      toast({
        variant: "destructive",
        title: "Foutje!",
        description: "Dit emailadres staat al op de lijst"
      });
      // Handle the error case here. For example, show an error message to the user.
    } else if (error) {
      console.error("Error inserting data:", error);
      toast({
        variant: "destructive",
        title: "Foutje!",
        description: "Er is iets misgegaan"
      });
      // Handle the error case here. For example, show an error message to the user.
    } else {
      // Since there's no error, it's a successful operation.
      // Handle the success case here. For example, show a success message.
      console.log("Insert operation successful:", data);
      // You can also perform other actions like redirecting the user or updating the UI.
      toast({
        title: "Bedankt voor het inschrijven!",
        description: "We nemen contact op zodra we meer nieuws hebben"
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="EmailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground">
                Schrijf je in om updates te ontvangen
              </FormLabel>
              <FormControl>
                <div className="flex gap-4">
                  <Input placeholder="mail@example.com" {...field} />
                  <Button type="submit">Verstuur</Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default function Index() {
  return (
    <div className="relative w-full min-h-dvh flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute bg-custom-gradient w-[2000px] h-[600px] rounded-full -z-10 -bottom-72"></div>
      <div className="flex flex-col grow max-w-md p-12 items-center justify-center">
        <img src="./logo.png" alt="corewave logo" className="max-w-60 pb-4"/>
        <h1 className="text-3xl font-display font-medium">corewave</h1>
        <p className="text-md font-body font-light text-muted-foreground">Zorgeloos ondernemen</p>
      </div>
      <div className="p-8 mb-4 w-full max-w-lg">
        <EmailForm />
      </div>
    </div>
  );
}
