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
import { DataTablePagination } from "../../components/TablePagination";
import { orderData } from "../components/DataTable";
import OsTableContainer from "../components/OsTableContainer";
import TableSuspenseLoading from "../../components/TableSuspenseLoading";
export function AppOrdersInterface({
  user,
  verify,
}: {
  user: any;
  verify: boolean;
}) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const data = orderData;
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
              <TabsList className=" text-muted/85 bg-transparent">
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
                className="w-full border-primary/5 "
              />

              <div className="flex items-center gap-5 self-end justify-start md:justify-end w-full">
                <Button
                  size={"sm"}
                  variant={"outline"}
                  className=" flex items-center gap-1 hover:bg-primary font-semibold transition-all "
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
            <React.Suspense fallback={<TableSuspenseLoading />}>
              <TabsContent value="all">
                <OsTableContainer
                  type="all"
                  search={searchTerm}
                  status="all"
                />
              </TabsContent>
              <TabsContent value="open">
                <OsTableContainer />
              </TabsContent>
              <TabsContent value="finished">
                <OsTableContainer />
              </TabsContent>
            </React.Suspense>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
