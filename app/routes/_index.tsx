import type { MetaFunction } from "@remix-run/node";
import EmailSubscriptionForm from "~/components/EmailSubscriptionForm";
import LoginModal from "~/components/LoginModal";

export const meta: MetaFunction = () => {
  return [
    { title: "Corewave" },
    { name: "description", content: "Coming soon" },
  ];
};

export default function Index() {
  return (
    <div className="relative w-full min-h-dvh flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute bg-custom-gradient w-[2000px] h-[600px] rounded-full -z-10 -bottom-72"></div>
      <div className="flex p-8 mb-4 w-full justify-end">
        <LoginModal />
      </div>
      <div className="animate-up-and-down flex flex-col grow max-w-md p-12 items-center justify-center">
        <img src="./logo.png" alt="corewave logo" className="max-w-60 pb-4"/>
        <h1 className="text-3xl font-display font-medium">corewave</h1>
        <p className="text-md font-body font-light text-muted-foreground">Zorgeloos ondernemen</p>
      </div>
      <div className="p-8 mb-4 w-full max-w-lg">
        <EmailSubscriptionForm />
      </div>
    </div>
  );
}
