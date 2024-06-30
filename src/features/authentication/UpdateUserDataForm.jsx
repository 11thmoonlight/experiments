import { useState } from "react";
import { useUpdateUser } from "./useUpdateUser";
import { useUser } from "./useUser";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";

function UpdateUserDataForm() {
  const {
    user: {
      email,
      user_metadata: { name: currentName },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();
  const [name, setName] = useState(currentName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    updateUser(
      { name, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setName(currentName);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="آدرس ایمیل">
        <Input value={email} disabled />
      </FormRow>

      <FormRow label="نام">
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="تصویر نمایه">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow>
        <Button
          type="reset"
          disabled={isUpdating}
          variation="secondary"
          onClick={handleCancel}
        >
          لغو
        </Button>
        <Button disabled={isUpdating}>ویرایش</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
