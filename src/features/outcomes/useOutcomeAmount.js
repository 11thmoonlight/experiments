import { useQuery } from "@tanstack/react-query";
import { getAmount } from "../../services/apiIncomes";

export function useOutcomeAmount() {
  const {
    isLoading,
    data: amounts,
    error,
  } = useQuery({
    queryKey: ["amounts"],
    queryFn: getAmount,
  });
  return { isLoading, error, amounts };
}
