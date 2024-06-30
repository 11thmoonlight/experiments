import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditIncome } from "../../services/apiIncomes";
import toast from "react-hot-toast";

export function useEditIncome() {
  const queryClient = useQueryClient();

  const { mutate: editIncome, isLoading: isEditing } = useMutation({
    mutationFn: ({ newIncomeData, id }) => createEditIncome(newIncomeData, id),
    onSuccess: () => {
      toast.success("Income successfully edited");
      queryClient.invalidateQueries({ queryKey: ["incomes"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editIncome };
}
