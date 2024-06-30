import supabase from "./supabase";
import { getToday } from "../utils/helper";
import { PAGE_SIZE } from "../utils/Constants";

// select *
// from todos
// where auth.uid() = todos.user_id;
// -- Policy is implicitly added.

export async function getIncomes({ page }) {
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const {
    data: incomes,
    error,
    count,
  } = await supabase
    .from("incomes")
    .select("*", { count: "exact" })
    .range(from, to);
  // .eq("id", auth.uid());

  if (error) {
    console.error(error);
    throw new Error("Income could not be found");
  }

  return { incomes, count };
}

export async function createEditIncome(newIncome, id) {
  // 1. Create/edit Income
  let query = supabase.from("incomes");

  // create
  if (!id) query = query.insert([{ ...newIncome }]);

  // edit
  if (id) query = query.update({ ...newIncome }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Income could not be created");
  }

  return { data };
}

export async function deleteIncome(id) {
  const { data, error } = await supabase.from("incomes").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Income could not be deleted");
  }

  return data;
}

export async function getAmount() {
  const { data: incomes, error } = await supabase
    .from("incomes")
    .select("amount");

  if (error) {
    throw new Error("Amount could not be found");
  }

  return incomes;
}

export async function getIncomesAfterDate(date) {
  const { data, error } = await supabase
    .from("incomes")
    .select("created_at, amount, note, title")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Incomes could not get loaded");
  }
  return data;
}
