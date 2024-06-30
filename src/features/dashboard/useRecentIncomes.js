import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getIncomesAfterDate } from "../../services/apiIncomes";

export function useRecentIncoms() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: incomes } = useQuery({
    queryFn: () => getIncomesAfterDate(queryDate),
    queryKey: ["incomes", `last-${numDays}`],
  });

  return { isLoading, incomes };
}
