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
import { supabase } from "./clients/supabaseClient";

export default function EmailSubscriptionForm() {
  const formSchema = z.object({
    EmailAddress: z.string().email(),
  });

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      EmailAddress: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {


    if (supabase) {
      const { data, error } = await supabase
        .from("OpeningNewsletter")
        .insert({ EmailAddress: values.EmailAddress });

      if (error && error.code == "23505") {
        console.error("Error inserting data:", error);
        toast({
          variant: "destructive",
          title: "Foutje!",
          description: "Dit emailadres staat al op de lijst",
        });
        // Handle the error case here. For example, show an error message to the user.
      } else if (error) {
        console.error("Error inserting data:", error);
        toast({
          variant: "destructive",
          title: "Foutje!",
          description: "Er is iets misgegaan",
        });
        // Handle the error case here. For example, show an error message to the user.
      } else {
        // Since there's no error, it's a successful operation.
        // Handle the success case here. For example, show a success message.
        console.log("Insert operation successful:", data);
        // You can also perform other actions like redirecting the user or updating the UI.
        toast({
          title: "Bedankt voor het inschrijven!",
          description: "We nemen contact op zodra we meer nieuws hebben",
        });
      }
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
