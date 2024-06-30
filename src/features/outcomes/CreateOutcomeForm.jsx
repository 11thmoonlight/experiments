import Proptypes from "prop-types";

import { useForm, Controller } from "react-hook-form";

// Controller

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useCreateOutcome } from "./useCreateOutcome";
import { useEditOutcome } from "./useEditOutcome";

import { useOutcomeAmount } from "./useOutcomeAmount";
import styled from "styled-components";
import RadioInput from "../../ui/RadioInput";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

// import persian_en from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/red.css";
import "react-multi-date-picker/styles/layouts/mobile.css";

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

function CreateOutcomeForm({ outcomeToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValue } = outcomeToEdit;
  const isEditSession = Boolean(editId);

  // const [value, setValue] = useState(new DateObject());

  const { register, handleSubmit, reset, formState, control } = useForm({
    defaultValues: isEditSession ? editValue : {},
  });

  //, control

  const { errors } = formState;

  const { isCreating, createOutcome } = useCreateOutcome();

  const { isEditing, editOutcome } = useEditOutcome();

  const { amounts } = useOutcomeAmount();

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    if (isEditSession)
      editOutcome(
        { newOutcomeData: { ...data }, id: editId },
        {
          onSuccess: (data) => {
            console.log(data);
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createOutcome(
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
    console.log(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  const convertPersianToEnglish = (text) => {
    const persianNumbersRegex = /[\u06F0-\u06F9]/g;

    const persianToEnglishMap = {
      "۰": "0",
      "۱": "1",
      "۲": "2",
      "۳": "3",
      "۴": "4",
      "۵": "5",
      "۶": "6",
      "۷": "7",
      "۸": "8",
      "۹": "9",
    };

    return text.replace(
      persianNumbersRegex,
      (match) => persianToEnglishMap[match]
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="عنوان" error={errors?.title?.message}>
        <StyledContainer>
          <StyledChoose>
            <span>خرید</span>
            <RadioInput
              type="radio"
              id="title"
              value="خرید"
              disabled={isWorking}
              {...register("title", { required: "This field is required" })}
            />
          </StyledChoose>
          <StyledChoose>
            <span>قرض دادن</span>
            <RadioInput
              type="radio"
              id="title"
              value="قرض دادن"
              disabled={isWorking}
              {...register("title", { required: "This field is required" })}
            />
          </StyledChoose>
          <StyledChoose>
            <span>رفت و آمد</span>
            <RadioInput
              type="radio"
              id="title"
              value="رفت و آمد"
              disabled={isWorking}
              {...register("title", { required: "This field is required" })}
            />
          </StyledChoose>
          <StyledChoose>
            <span>هدیه دادن</span>
            <RadioInput
              type="radio"
              id="title"
              value="هدیه دادن"
              disabled={isWorking}
              {...register("title", { required: "This field is required" })}
            />
          </StyledChoose>
        </StyledContainer>
      </FormRow>

      {/* <FormRow label="زمان" error={errors?.date?.message}>
        <Input
          type="date"
          id="date"
          disabled={isWorking}
          {...register("date", {
            required: "This field is required",
          })}
        />
      </FormRow> */}

      <FormRow label="زمان" error={errors?.date?.message}>
        <Controller
          control={control}
          name="date"
          rules={{ required: true }}
          render={({
            field: { onChange, name, value },
            formState: { errors },
          }) => (
            <>
              <DatePicker
                value={value || ""}
                inputMode="input"
                onChange={(date) => {
                  const dateUnix = date.valueOf();

                  const formattedDateFa = new Intl.DateTimeFormat("fa-IR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })
                    .format(dateUnix)
                    .replaceAll("/", "-");
                  console.log(formattedDateFa);
                  onChange(convertPersianToEnglish(formattedDateFa));
                }}
                calendar={persian}
                locale={persian_fa}
              />
              {errors && errors[name] && errors[name].type === "required" && (
                //if you want to show an error message
                <span>your error message !</span>
              )}
            </>
          )}
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
        <Button variation="secondary" type="reset">
          لغو
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "ویرایش پرداخت" : "افزودن پرداخت جدید"}
        </Button>
      </FormRow>
    </Form>
  );
}

CreateOutcomeForm.propTypes = {
  outcomeToEdit: Proptypes.any,
  onCloseModal: Proptypes.any,
};

export default CreateOutcomeForm;
