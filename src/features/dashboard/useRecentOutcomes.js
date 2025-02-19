import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getOutcomesAfterDate } from "../../services/apiOutcomes";

export function useRecentOutcomes() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: outcomes } = useQuery({
    queryFn: () => getOutcomesAfterDate(queryDate),
    queryKey: ["outcomes", `last-${numDays}`],
  });

  return { isLoading, outcomes };
}
