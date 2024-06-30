import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";

function Account() {
  return (
    <Row type="customized">
      <Row type="vertical">
        <Heading as="h3">ویرایش اطلاعات کاربر</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row type="vertical">
        <Heading as="h3">ویرایش رمز عبور</Heading>
        <UpdatePasswordForm />
      </Row>
    </Row>
  );
}

export default Account;
