import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditIncome } from "../../services/apiIncomes";

export function useCreateIncome() {
  const queryClient = useQueryClient();

  const { mutate: createIncome, isLoading: isCreating } = useMutation({
    mutationFn: createEditIncome,
    onSuccess: () => {
      toast.success("New Income successfully created");
      queryClient.invalidateQueries({ queryKey: ["incomes"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createIncome };
}
