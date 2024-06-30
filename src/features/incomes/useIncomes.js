import { useQuery } from "@tanstack/react-query";
import { getIncomes } from "../../services/apiIncomes";
import { useSearchParams } from "react-router-dom";

export function useIncomes() {
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { incomes, count } = {},
    error,
  } = useQuery({
    queryKey: ["incomes", page],
    queryFn: () => getIncomes({ page }),
  });

  return { isLoading, error, incomes, count };
}
