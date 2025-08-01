"use client"

import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent
} from "@/app/_components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart"
import { TransactionType } from "@prisma/client"
import { TransactionPercentagePerType } from "@/app/_data/get-dashboard/types"
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react"
import PercentageItem from "./percentage-item"

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investido",
    color: "#FFFFFF",
  },
  [TransactionType.DEPOSIT]: {
    label: "Receita",
    color: "#55B02E",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesas",
    color: "#E93030",
  }
} satisfies ChartConfig

interface TransactionsPieChart {
  typesPercentage: TransactionPercentagePerType;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

const TransactionsPieChart = ({
  expensesTotal,
  depositsTotal,
  investmentsTotal,
  typesPercentage
}: TransactionsPieChart) => {

  const chartData = [
    {
      type: TransactionType.DEPOSIT,
      amount: depositsTotal,
      fill: "#55B02E"
    },
    {
      type: TransactionType.EXPENSE,
      amount: expensesTotal,
      fill: "#E93030"
    },
    {
      type: TransactionType.INVESTMENT,
      amount: investmentsTotal,
      fill: "#FFFFFF"
    }
  ]

  return (
    <Card className="flex flex-col p-12">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={50}
            />
          </PieChart>
        </ChartContainer>

        <div className="space-y-2">
          <PercentageItem
            icon={<TrendingUpIcon size={16} className="text-primary" />}
            value={typesPercentage[TransactionType.DEPOSIT]}
            title="Receitas"
          />
          <PercentageItem
            icon={<TrendingDownIcon size={16} className="text-red-500" />}
            value={typesPercentage[TransactionType.EXPENSE]}
            title="Despesas"
          />
          <PercentageItem
            icon={<PiggyBankIcon size={16} className="text-white" />}
            value={typesPercentage[TransactionType.INVESTMENT]}
            title="Investimentos"
          />
        </div>
      </CardContent>
    </Card>
  );
}
 
export default TransactionsPieChart;