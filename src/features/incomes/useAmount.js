import { useQuery } from "@tanstack/react-query";
import { getAmount } from "../../services/apiIncomes";

export function useAmount() {
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
