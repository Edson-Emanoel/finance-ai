"use server";

import { db } from "@/app/_lib/prisma";
import {
  Prisma,
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { auth } from "@clerk/nextjs/server";
import { upsertTransactionSchema } from "./schema";

interface AddTransactionParams {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const upsertTransaction = async (params: AddTransactionParams) => {
  upsertTransactionSchema.parse(params);
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  await db.transaction.upsert({
    where: {
      id: params.id,
    },
    update: { ...params, userId },
    create: { ...params, userId },
  });
};
