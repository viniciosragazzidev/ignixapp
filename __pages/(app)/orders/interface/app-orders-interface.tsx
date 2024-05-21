"use client";
import * as React from "react";
import CardResumeValue from "../../components/CardResumeValue";
import { FaOpencart, FaToolbox, FaTools, FaUser } from "react-icons/fa";
import {
  IoAlertCircleSharp,
  IoBriefcase,
  IoCard,
  IoCheckmarkDoneCircleSharp,
} from "react-icons/io5";
import { AiOutlineFileDone } from "react-icons/ai";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui/tabs";
import { Button } from "@/shared/components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Input } from "@/shared/components/ui/input";
import { FilterIcon } from "lucide-react";
import OsTable from "../components/OsTable";
import { OSTypedata } from "@/shared/@types/types";
export function AppOrdersInterface({
  user,
  verify,
}: {
  user: any;
  verify: boolean;
}) {
  const [open, setOpen] = React.useState(false);
  const data: OSTypedata[] = [
    {
      id: "1",
      custome_name: "Empresa XYZ",
      custome_contact: "empresa.xyz@exemplo.com",
      osItems: [
        {
          id: "1",
          item_name: "Computador",
          item_brand: "Dell",
          item_model: "Optiplex 3080",
          item_value: 3500,
          item_description: "Desktop com 8GB de RAM",
        },
        {
          id: "2",
          item_name: "Monitor",
          item_brand: "LG",
          item_model: "UltraWide",
          item_value: 1500,
          item_description: "Monitor de 29 polegadas",
        },
      ],
      osStatus: "Em Progresso",
      date: new Date("2024-05-10"),
      osValue: 5000,
    },
    {
      id: "2",
      custome_name: "João Silva",
      custome_contact: "joao.silva@exemplo.com",
      osItems: [
        {
          id: "3",
          item_name: "Notebook",
          item_brand: "Apple",
          item_model: "MacBook Air",
          item_value: 7000,
          item_description: "MacBook Air com M1",
        },
        {
          id: "4",
          item_name: "Teclado",
          item_brand: "Logitech",
          item_model: "MX Keys",
          item_value: 500,
          item_description: "Teclado sem fio",
        },
      ],
      osStatus: "Concluído",
      date: new Date("2024-05-12"),
      osValue: 7500,
    },
    {
      id: "3",
      custome_name: "Maria Fernandes",
      custome_contact: "maria.fernandes@exemplo.com",
      osItems: [
        {
          id: "5",
          item_name: "Impressora",
          item_brand: "HP",
          item_model: "LaserJet Pro",
          item_value: 1200,
          item_description: "Impressora multifuncional",
        },
        {
          id: "6",
          item_name: "Papel A4",
          item_brand: "Chamex",
          item_model: "A4",
          item_value: 50,
          item_description: "Resma de papel A4",
        },
      ],
      osStatus: "Pendente",
      date: new Date("2024-05-15"),
      osValue: 1250,
    },
    {
      id: "4",
      custome_name: "Carlos Oliveira",
      custome_contact: "carlos.oliveira@exemplo.com",
      osItems: [
        {
          id: "7",
          item_name: "Mouse",
          item_brand: "Razer",
          item_model: "DeathAdder",
          item_value: 250,
          item_description: "Mouse gamer",
        },
        {
          id: "8",
          item_name: "Monitor",
          item_brand: "Samsung",
          item_model: "Curved",
          item_value: 600,
          item_description: "Monitor curvo de 24 polegadas",
        },
      ],
      osStatus: "Em Progresso",
      date: new Date("2024-05-18"),
      osValue: 850,
    },
    {
      id: "5",
      custome_name: "Ana Paula",
      custome_contact: "ana.paula@exemplo.com",
      osItems: [
        {
          id: "9",
          item_name: "Tablet",
          item_brand: "Samsung",
          item_model: "Galaxy Tab S6",
          item_value: 2500,
          item_description: "Tablet com caneta S Pen",
        },
        {
          id: "10",
          item_name: "Capa de Proteção",
          item_brand: "Samsung",
          item_model: "Book Cover",
          item_value: 200,
          item_description: "Capa de proteção para tablet",
        },
      ],
      osStatus: "Concluído",
      date: new Date("2024-05-20"),
      osValue: 2700,
    },
    {
      id: "6",
      custome_name: "Empresa ABC",
      custome_contact: "empresa.abc@exemplo.com",
      osItems: [
        {
          id: "11",
          item_name: "Servidor",
          item_brand: "Dell",
          item_model: "PowerEdge T40",
          item_value: 15000,
          item_description: "Servidor para pequenas empresas",
        },
        {
          id: "12",
          item_name: "Cabo de Rede",
          item_brand: "Furukawa",
          item_model: "CAT6",
          item_value: 500,
          item_description: "Cabo de rede de alta performance",
        },
      ],
      osStatus: "Pendente",
      date: new Date("2024-05-22"),
      osValue: 15500,
    },
  ];
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 ">
      <header className="w-full min-h-20 bg-primary space-y-2 pb-4 rounded-b-3xl">
        <div className="container py-4 space-y-4">
          <h1 className=" text-muted text-lg font-semibold">
            Ordens de Serviços
          </h1>

          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <CardResumeValue
              props={{
                title: "Total de Ordens",
                lastMonthValue: "+10%",
                value: "110",
                icon: (
                  <IoBriefcase className="h-5 w-5 text-muted-foreground " />
                ),
              }}
            />
            <CardResumeValue
              props={{
                title: "Ordens em Aberto",
                lastMonthValue: "+10%",
                value: "54",
                icon: (
                  <IoAlertCircleSharp className="h-5 w-5 text-muted-foreground " />
                ),
              }}
            />
            <CardResumeValue
              props={{
                title: "Ordens Concluídas",
                lastMonthValue: "+10%",
                value: "36",
                icon: (
                  <IoCheckmarkDoneCircleSharp className="h-5 w-5 text-muted-foreground " />
                ),
              }}
            />
            <CardResumeValue
              props={{
                title: "Total Faturado",
                lastMonthValue: "+10%",
                value: "R$ 10.000,00",
                className: "md:col-span-4 lg:col-span-1",
                icon: <IoCard className="h-5 w-5 text-muted-foreground " />,
              }}
            />
          </div>
        </div>
      </header>

      <main className="w-full flex flex-col ">
        <div className="container">
          <Tabs
            defaultValue="all"
            className=""
          >
            <header className="w-full flex flex-col items-start md:flex-row md:items-center gap-5  py-4">
              <TabsList className="bg-primary text-muted/85">
                <TabsTrigger
                  value="all"
                  className="text-sm"
                >
                  {" "}
                  Todas
                </TabsTrigger>
                <TabsTrigger
                  value="open"
                  className="text-sm"
                >
                  Em Aberto
                </TabsTrigger>
                <TabsTrigger
                  value="finished"
                  className="text-sm"
                >
                  Finalizadas
                </TabsTrigger>
              </TabsList>

              <Input
                type="search"
                placeholder="Buscar ordem de serviço"
                className="w-full bg-popover/20 max-w-sm self-start outline-primary/60 shadow-none"
              />

              <div className="flex items-center gap-5 self-end justify-start md:justify-end w-full">
                <Button
                  size={"sm"}
                  className="bg-secondary flex items-center gap-1 hover:bg-primary font-semibold transition-all "
                >
                  {" "}
                  <FilterIcon className="h-4 w-4" /> Filtrar
                </Button>
                <Button
                  size={"sm"}
                  className="bg-secondary flex items-center gap-1 hover:bg-primary font-semibold transition-all "
                >
                  {" "}
                  <CalendarIcon /> Gerar Relatório{" "}
                </Button>
              </div>
            </header>

            <TabsContent value="all">
              <OsTable data={data} />
            </TabsContent>
            <TabsContent value="open">
              <OsTable data={data} />
            </TabsContent>
            <TabsContent value="finished">
              <OsTable data={data} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
