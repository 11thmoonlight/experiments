import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditOutcome } from "../../services/apiOutcomes";

export function useCreateOutcome() {
  const queryClient = useQueryClient();

  const { mutate: createOutcome, isLoading: isCreating } = useMutation({
    mutationFn: createEditOutcome,
    onSuccess: () => {
      toast.success("New Outcome successfully created");
      queryClient.invalidateQueries({ queryKey: ["outcomes"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createOutcome };
}
