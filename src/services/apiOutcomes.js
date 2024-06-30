import { getToday } from "../utils/helper";
import supabase from "./supabase";
import { PAGE_SIZE } from "../utils/Constants";

export async function getOutcomes({ page }) {
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const {
    data: outcomes,
    error,
    count,
  } = await supabase
    .from("outcomes")
    .select("*", { count: "exact" })
    .range(from, to);

  if (error) {
    console.error(error);
    throw new Error("Outcomes could not be found");
  }

  return { outcomes, count };
}

export async function createEditOutcome(newOutcome, id) {
  let query = supabase.from("outcomes");

  // create
  if (!id) query = query.insert([{ ...newOutcome }]);

  // edit
  if (id) query = query.update({ ...newOutcome }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Outcome could not be created");
  }

  return data;
}

export async function deleteOutcome(id) {
  const { data, error } = await supabase.from("outcomes").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Outcome could not be deleted");
  }

  return data;
}

export async function getOutcomeAmount() {
  const { data: outcomes, error } = await supabase
    .from("outcomes")
    .select("amount");

  if (error) {
    throw new Error("Amount could not be found");
  }

  return outcomes;
}

export async function getOutcomesAfterDate(date) {
  const { data, error } = await supabase
    .from("outcomes")
    .select("created_at, amount, note, title")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Outcomes could not get loaded");
  }
  return data;
}
