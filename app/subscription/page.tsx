import { auth } from "@clerk/nextjs/server";
import Navbar from "../_components/navbar";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader } from "../_components/ui/card";
import { CheckIcon, XIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import AcquirePlanButton from "./_components/acquire-plan-button";

const SubscriptionPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  return (
    <>
      <Navbar />

      <div className="p-6 space-y-6">
        <h1 className="font-bold text-2xl">Assinaturas</h1>

        <div className="flex gap-6">
          <Card className="w-[450px] border">
            <CardHeader className="border-b border-solid py-8">
              <h2 className="font-semibold text-2xl text-center">
                Plano Básico
              </h2>

              <div className="flex text-center items-center gap-3 justify-center">
                <span className="text-4xl">R$</span>
                <span className="font-semibold text-6xl">0</span>
                <span className="text-muted-foreground text-2xl">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 py-8">
              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>Apenas 10 transações por mês</p>
              </div>

              <div className="flex items-center gap-2">
                <XIcon className="text-muted-foreground" />
                <p>Relatórios de IA</p>
              </div>
            </CardContent>
          </Card>

          <Card className="w-[450px] border">
            <CardHeader className="border-b border-solid py-8">
              <h2 className="font-semibold text-2xl text-center">
                Plano Premium
              </h2>

              <div className="flex text-center items-center gap-3 justify-center">
                <span className="text-4xl">R$</span>
                <span className="font-semibold text-6xl">19,00</span>
                <span className="text-muted-foreground text-2xl">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 py-8">
              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>Transações ilimitadas</p>
              </div>

              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>Relatórios de IA</p>
              </div>

              <AcquirePlanButton />

            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPage;