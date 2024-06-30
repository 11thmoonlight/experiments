import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useSignup } from "./useSignup";
import FormRowVertical from "../../ui/FormRowVertical";
import FormRow from "../../ui/FormRow";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  // function handleClick() {
  //   navigate("./signup");
  // }

  function onSubmit({ name, email, password }) {
    signup(
      {
        name,
        email,
        password,
      },
      { onSettled: () => reset() }
    );
    navigate(-1);
  }

  function resetCancel() {
    reset();
    navigate(-1);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="نام" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isLoading}
          {...register("name", { required: "This feild is required" })}
        />
      </FormRowVertical>

      <FormRowVertical label="آدرس ایمیل" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This feild is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRowVertical>

      <FormRowVertical
        label="رمز عبور (حداقل 8 کاراکتر)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "This feild is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRowVertical>

      <FormRowVertical
        label="تکرار رمز عبور"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "This feild is required",
            validate: (value) =>
              value === getValues().password || "Password need to match",
          })}
        />
      </FormRowVertical>

      <FormRow>
        <Button disabled={isLoading}>تایید</Button>
        <Button
          variation="secondary"
          type="reset"
          onClick={resetCancel}
          disabled={isLoading}
        >
          لغو
        </Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
