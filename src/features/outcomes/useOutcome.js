import { useQuery } from "@tanstack/react-query";
import { getOutcomes } from "../../services/apiOutcomes";
import { useSearchParams } from "react-router-dom";

export function useOutcome() {
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { outcomes, count } = {},
    error,
  } = useQuery({
    queryKey: ["outcomes", page],
    queryFn: () => getOutcomes({ page }),
  });

  return { isLoading, error, outcomes, count };
}
