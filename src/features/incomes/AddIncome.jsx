import Button from "../../ui/Button";
import CreateIncomeForm from "./CreateIncomeForm";
import Modal from "../../ui/Modal";

function AddIncome() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="income-form">
          <Button>افزودن دریافت جدید</Button>
        </Modal.Open>
        <Modal.Window name="income-form">
          <CreateIncomeForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddIncome;
