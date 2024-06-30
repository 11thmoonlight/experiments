import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateOutcomeForm from "./CreateOutcomeForm";

function AddOutcome() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="outcome-form">
          <Button>افزودن پرداخت جدید</Button>
        </Modal.Open>
        <Modal.Window name="outcome-form">
          <CreateOutcomeForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddOutcome;
