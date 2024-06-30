import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteIncome as deleteIncomeApi } from "../../services/apiIncomes";

export function useDeleteIncome() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteIncome } = useMutation({
    mutationFn: deleteIncomeApi,
    onSuccess: () => {
      toast.success("داده مورد نظر با موفقیت حذف شد");

      queryClient.invalidateQueries({ queryKey: ["incomes"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteIncome };
}
