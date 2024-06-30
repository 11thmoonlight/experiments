import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditOutcome } from "../../services/apiOutcomes";
import toast from "react-hot-toast";

export function useEditOutcome() {
  const queryClient = useQueryClient();

  const { mutate: editOutcome, isLoading: isEditing } = useMutation({
    mutationFn: ({ newOutcomeData, id }) =>
      createEditOutcome(newOutcomeData, id),

    onSuccess: () => {
      toast.success("Outcome successfully edited");
      queryClient.invalidateQueries({ queryKey: ["outcomes"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editOutcome };
}
