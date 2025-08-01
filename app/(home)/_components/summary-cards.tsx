import {
  WalletIcon,
  PiggyBankIcon,
  TrendingUpIcon,
  TrendingDownIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";
import { db } from "@/app/_lib/prisma";

interface SummaryCards {
  month: string;
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

const SummaryCards = async ({
  month,
  balance,
  depositsTotal,
  expensesTotal,
  investmentsTotal
}:SummaryCards) => {

  return (
    <div className="space-y-6">
      {/* Primeiro Card */}
      <SummaryCard
        title="Saldo"
        icon={<WalletIcon size={16} />}
        amount={balance}
        size="large"
      />

      {/* Outros Cards */}
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          title="Investido"
          icon={<PiggyBankIcon size={16} />}
          amount={investmentsTotal}
        />

        <SummaryCard
          title="Receita"
          icon={<TrendingUpIcon size={16} className="text-primary" />}
          amount={depositsTotal}
        />

        <SummaryCard
          title="Despesas"
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
