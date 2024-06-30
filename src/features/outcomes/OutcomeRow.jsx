import styled from "styled-components";
import Table from "../../ui/Table";

import PropTypes from "prop-types";
import CreateOutcomeForm from "./CreateOutcomeForm";
import { useDeleteOutcome } from "./useDeleteOutcome";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import { HiPencil, HiTrash } from "react-icons/hi2";
import ConfirmDelete from "../../ui/ConfirmDelete";

import moment from "jalali-moment";

// const Img = styled.img`
//   display: block;
//   width: 6.4rem;
//   aspect-ratio: 3 / 2;
//   object-fit: cover;
//   object-position: center;
//   transform: scale(1.5) translateX(-7px);
// `;

const Tiltle = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const Amount = styled.div`
  font-size: 600;
`;

const Note = styled.div`
  font-weight: 500;
  color: var(--color-grey-600);
`;

const Date = styled.div`
  font-weight: 500;
  color: var(--color-grey-600);
`;

function OutcomeRow({ outcome }) {
  // const [showForm, setShowForm] = useState(false);
  const { id: outcomeId, amount, note, title, date } = outcome;
  const { isDeleting, deleteOutcome } = useDeleteOutcome();
  let persianDate = moment(date).locale("fa").format("YYYY/MM/DD");

  return (
    <Table.Row>
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={outcomeId} />
          <Menus.List id={outcomeId}>
            <Modal.Open opens="edit">
              <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
            </Modal.Open>

            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="edit">
          <CreateOutcomeForm outcomeToEdit={outcome} />
        </Modal.Window>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="incomes"
            disabled={isDeleting}
            onConfirm={() => deleteOutcome(outcomeId)}
          />
        </Modal.Window>
      </Modal>

      <Date>{persianDate}</Date>
      <Tiltle>{title}</Tiltle>
      <Amount>{amount}</Amount>
      <Note>{note}</Note>
    </Table.Row>
  );
}

OutcomeRow.propTypes = { outcome: PropTypes.any };

export default OutcomeRow;
