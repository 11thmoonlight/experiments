import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteOutcome as deleteOutcomeApi } from "../../services/apiOutcomes";

export function useDeleteOutcome() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteOutcome } = useMutation({
    mutationFn: deleteOutcomeApi,
    onSuccess: () => {
      toast.success("داده مورد نظر با موفقیت حذف شد");

      queryClient.invalidateQueries({ queryKey: ["outcomes"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteOutcome };
}
