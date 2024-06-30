import Proptypes from "prop-types";

import { useForm } from "react-hook-form";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useCreateIncome } from "./useCreateIncome";
import { useEditIncome } from "./useEditIncome";

import { useAmount } from "./useAmount";
import styled from "styled-components";
import RadioInput from "../../ui/RadioInput";

const StyledChoose = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-tifany-3);
  padding: 0.3rem 0.6rem;
  border-radius: var(--border-radius-sm);
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

function CreateIncomeForm({ incomeToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = incomeToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  const { isCreating, createIncome } = useCreateIncome();

  const { isEditing, editIncome } = useEditIncome();

  const { amounts } = useAmount();

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    if (isEditSession)
      editIncome(
        { newIncomeData: { ...data }, id: editId },
        {
          onSuccess: (data) => {
            console.log(data);
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createIncome(
        { ...data },
        {
          onSuccess: (data) => {
            console.log(data.amount);
            const sum = amounts.reduce(
              (sum, current) => sum + current.amount,
              0
            );
            console.log(sum);
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="عنوان" error={errors?.title?.message}>
        <StyledContainer>
          <StyledChoose>
            <span>حقوق</span>
            <RadioInput
              type="radio"
              id="title"
              value="حقوق"
              disabled={isWorking}
              {...register("title", { required: "This field is required" })}
            />
          </StyledChoose>

          <StyledChoose>
            <span>وام</span>
            <RadioInput
              type="radio"
              id="title"
              value="وام"
              disabled={isWorking}
              {...register("title", { required: "This field is required" })}
            />
          </StyledChoose>

          <StyledChoose>
            <span>معامله</span>
            <RadioInput
              type="radio"
              id="title"
              value="معامله"
              disabled={isWorking}
              {...register("title", { required: "This field is required" })}
            />
          </StyledChoose>

          <StyledChoose>
            <span>سود سرمایه</span>
            <RadioInput
              type="radio"
              id="title"
              value="سود سرمایه"
              disabled={isWorking}
              {...register("title", { required: "This field is required" })}
            />
          </StyledChoose>

          <StyledChoose>
            <span>هدیه</span>
            <RadioInput
              type="radio"
              id="title"
              value="هدیه"
              disabled={isWorking}
              {...register("title", { required: "This field is required" })}
            />
          </StyledChoose>
        </StyledContainer>
      </FormRow>

      <FormRow label="زمان" error={errors?.date?.message}>
        <Input
          type="date"
          id="date"
          disabled={isWorking}
          {...register("date", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="مقدار" error={errors?.amount?.message}>
        <Input
          type="number"
          id="amount"
          disabled={isWorking}
          {...register("amount", {
            required: "This field is required",
            min: { value: 1, message: "amount should be at least 1" },
          })}
        />
      </FormRow>

      <FormRow label="یادداشت" error={errors?.note?.message}>
        <Input type="text" id="note" {...register("note")} />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          لغو
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "ویرایش دریافت" : "افزودن دریافت جدید"}
        </Button>
      </FormRow>
    </Form>
  );
}

CreateIncomeForm.propTypes = {
  incomeToEdit: Proptypes.any,
  onCloseModal: Proptypes.any,
};

export default CreateIncomeForm;
