import * as React from "react";

import CardResumeValue from "../../components/CardResumeValue";
import { Button } from "@/shared/components/ui/button";
import { CalendarIcon, PaperPlaneIcon, PlusIcon } from "@radix-ui/react-icons";
import TableLastedCashFlow from "../components/TableLastedCashFlow";
import TableLastedSales from "../components/TableLastedSales";
import TableLastedOrdersContainer from "../components/TableLastedOrders/TableLastedOrdersContainer";
import TableSuspenseLoading from "../../components/TableSuspenseLoading";

export function AppInterface({ user, verify }: { user: any; verify: boolean }) {
  return (
    <div className="flex min-h-screen w-full flex-col  ">
      <header className="w-full min-h-20  space-y-2 pb-4 rounded-b-3xl">
        <div className="container py-4 space-y-4">
          <h1 className=" text-primary text-lg font-semibold">Resumo Geral</h1>

          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <CardResumeValue
              props={{
                title: "Valor em Caixa",
                lastMonthValue: "+10%",
                value: "R$ 10.000,00",
              }}
            />
            <CardResumeValue
              props={{
                title: "Entradas no Caixa",
                lastMonthValue: "+10%",
                value: "R$ 10.000,00",
              }}
            />
            <CardResumeValue
              props={{
                title: "Saídas no Caixa",
                lastMonthValue: "+10%",
                value: "R$ 10.000,00",
              }}
            />
            <CardResumeValue
              props={{
                title: "Lucro Bruto",
                lastMonthValue: "+10%",
                value: "R$ 10.000,00",
                className: "md:col-span-4 lg:col-span-1",
              }}
            />
          </div>
        </div>
      </header>

      <main className="flex justify-center flex-col w-full h-max min-h-96 pt-5 mb-20">
        <div className="container w-full pb-4 flex justify-end">
          <Button
            size={"sm"}
            className="bg-secondary flex items-center gap-1 hover:bg-primary font-semibold transition-all "
          >
            {" "}
            <CalendarIcon /> Gerar Relatório
          </Button>
        </div>
        <div className="container w-full min-h-96 grid grid-cols-1 md:grid-cols-4 gap-4 ">
          <div className="card bg-popover/30 w-full h-full col-span-2 overflow-hidden rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-base">Ultimos Serviços</h1>

              <Button
                size={"sm"}
                className="bg-secondary hover:bg-primary font-semibold transition-all "
              >
                <PlusIcon />
              </Button>
            </div>

            <div className="flex w-full h-full overflow-hidden mt-4">
              <TableLastedOrdersContainer />
            </div>
          </div>
          <div className="col-span-2 md:col-span-1  overflow-hidden card bg-popover/30 w-full h-full  rounded-2xl shadow-sm p-4">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-base">Ultimas Transações</h1>

              <Button
                size={"sm"}
                className="bg-secondary hover:bg-primary font-semibold transition-all "
              >
                <PlusIcon />
              </Button>
            </div>

            <div className="flex w-full h-full overflow-hidden mt-4">
              <TableLastedCashFlow />
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 card bg-popover/30 w-full h-full  rounded-2xl shadow-sm p-4 overflow-hidden">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-base">Ultimas Vendas</h1>

              <Button
                size={"sm"}
                className="bg-secondary hover:bg-primary font-semibold transition-all "
              >
                <PlusIcon />
              </Button>
            </div>

            <div className="flex w-full h-full overflow-hidden mt-4">
              <TableLastedSales />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
