import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { Menu, Landmark, CreditCard, Banknote } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "~/components/ui/accordion";
import { Bar, BarChart, CartesianGrid, Label, ResponsiveContainer, XAxis, YAxis } from "recharts"


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const data = [
  {
    name: "0",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "1 - 30",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "31 - 60",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "> 60",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
]

const data2 = [
  {
    name: "0",
    total: 0,
  },
  {
    name: "1 - 30",
    total: 0,
  },
  {
    name: "31 - 60",
    total: 0,
  },
  {
    name: "> 60",
    total: 0,
  },
]

export default function Index() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex flex-col max-w-7xl p-6 gap-6">
        <Card className="flex flex-col p-4 gap-4">
          <div className="flex gap-4 items-center">
            <img src="./logo.png" alt="corewave logo" className="w-12 h-auto" />
            <div className="flex flex-col">
              <h1 className="font-display font-medium text-2xl">Corewave B.V.</h1>
              <p className="font-body text-md text-muted-foreground">Financiële cockpit</p>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="w-full md:grow flex flex-col gap-4">
              <div className="">
                <p className="font-display font-medium text-md">Bank / Kas</p>
                <p className="font-body text-md text-muted-foreground">Huidig Saldo</p>
              </div>
              <p className="font-body text-lg text-right">€ 21.155,26</p>
            </div>
            <Separator className="h-[1px] w-full md:h-full md:w-[1px]" />
            <div className="w-full md:grow flex flex-col gap-4">
              <div className="">
                <p className="font-display font-medium text-md">Verkoop</p>
                <p className="font-body text-md text-muted-foreground">Openstaande posten</p>
              </div>
              <p className="font-body text-lg text-right">€ 5.056,15</p>
            </div>
            <Separator className="md:h-full md:w-[1px]" />
            <div className="w-full md:grow flex flex-col gap-4">
              <div className="">
                <p className="font-display font-medium text-md">Inkoop</p>
                <p className="font-body text-md text-muted-foreground">Openstaande posten</p>
              </div>
              <p className="font-body text-lg text-right">€ 0,00</p>
            </div>
            <Separator className="md:h-full md:w-[1px]" />
            <div className="w-full md:grow flex flex-col gap-4">
              <div className="">
                <p className="font-display font-medium text-md">Resultaat</p>
                <p className="font-body text-md text-muted-foreground">2023</p>
              </div>
              <p className="font-body text-lg text-right">€ 6.145,00</p>
            </div>
          </div>
        </Card>
        <div className="flex flex-col gap-6 xl:flex-row items-start">
          <Card className="w-full flex flex-col basis-0 grow p-4 gap-4">
            <h2 className="text-xl font-display font-medium">Bank / Kas</h2>
            <div className="flex justify-between">
              <Button size="sm" variant="secondary">Importeren afschriften</Button>
              <Button size="sm" variant="secondary">
                <Menu className="h-4 w-4" />
              </Button>
            </div>
            <Separator />
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="1" className="border-none">
                <AccordionTrigger className="pt-0 gap-4">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      <p className="font-display font-medium text-sm text-left">Bank / Kas</p>
                      <p className="font-body text-sm text-muted-foreground text-left">Huidig Saldo</p>
                    </div>
                    <p className="font-body text-sm text-muted-foreground">€ 21.155,26</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-center">
                      <Landmark className="w-6" />
                      <div className="flex flex-col grow">
                        <p className="font-display font-medium text-xs text-left">NL91 ABNA 0536 2829 19</p>
                        <p className="font-body text-xs text-muted-foreground text-left">Bijgewerkt t/m 02-10-2023</p>
                      </div>
                      <p className="font-display text-primary text-sm text-right">€ 20.211,39</p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <CreditCard className="w-6" />
                      <div className="flex flex-col grow">
                        <p className="font-display font-medium text-xs text-left">G-rekening</p>
                        <p className="font-body text-xs text-muted-foreground text-left">Geen boekingen gevonden</p>
                      </div>
                      <p className="font-display text-primary text-sm text-right">€ 0,00</p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <Landmark className="w-6" />
                      <div className="flex flex-col grow">
                        <p className="font-display font-medium text-xs text-left">NL24 SNSB 0909 3372 84</p>
                        <p className="font-body text-xs text-muted-foreground text-left">Bijgewerkt t/m 23-07-2022</p>
                      </div>
                      <p className="font-display text-primary text-sm text-right">€ 453,37</p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <Banknote className="w-6" />
                      <div className="flex flex-col grow">
                        <p className="font-display font-medium text-xs text-left">Kasboek</p>
                        <p className="font-body text-xs text-muted-foreground text-left">Bijgewerkt t/m 03-11-2023</p>
                      </div>
                      <p className="font-display text-primary text-sm text-right">€ 490,50</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
          <Card className="w-full flex flex-col basis-0 grow p-4 gap-4">
            <h2 className="text-xl font-display font-medium">Verkoop</h2>
            <div className="flex justify-between">
              <Button size="sm" variant="secondary">Nieuwe verkoopfactuur</Button>
              <Button size="sm" variant="secondary">
                <Menu className="h-4 w-4" />
              </Button>
            </div>
            <Separator />
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="1" className="border-none">
                <AccordionTrigger className="pt-0 gap-4">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      <p className="font-display font-medium text-sm text-left">Openstaande posten</p>
                      <p className="font-body text-sm text-muted-foreground text-left">Te vorderen</p>
                    </div>
                    <p className="font-body text-sm text-muted-foreground">€ 5.056,15</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ResponsiveContainer height={350}>
                    <BarChart data={data} >
                      <CartesianGrid vertical={false}/>
                      <XAxis
                        dataKey="name"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        height={40}
                      >
                        <Label value="Dagen achterstallig" position="insideBottom" offset={0}/>
                      </XAxis>

                      <YAxis
                        width={40}
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}`}
                      />
                      <Bar
                        dataKey="total"
                        fill="currentColor"
                        radius={[4, 4, 0, 0]}
                        className="fill-primary"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
          <Card className="w-full flex flex-col basis-0 grow p-4 gap-4">
            <h2 className="text-xl font-display font-medium">Inkoop</h2>
            <div className="flex justify-between">
              <Button size="sm" variant="secondary">Inkoopoverzicht</Button>
              <Button size="sm" variant="secondary">
                <Menu className="h-4 w-4" />
              </Button>
            </div>
            <Separator />
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="1" className="border-none">
                <AccordionTrigger className="pt-0 gap-4">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      <p className="font-display font-medium text-sm text-left">Openstaande posten</p>
                      <p className="font-body text-sm text-muted-foreground text-left">Te betalen</p>
                    </div>
                    <p className="font-body text-sm text-muted-foreground">€ 0,00</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                <ResponsiveContainer height={350}>
                    <BarChart data={data2} >
                      <CartesianGrid vertical={false}/>
                      <XAxis
                        dataKey="name"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        height={40}
                      >
                        <Label value="Dagen achterstallig" position="insideBottom" offset={0}/>
                      </XAxis>

                      <YAxis
                        width={40}
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}`}
                      />
                      <Bar
                        dataKey="total"
                        fill="currentColor"
                        radius={[4, 4, 0, 0]}
                        className="fill-primary"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </div>
    </div>
  );
}