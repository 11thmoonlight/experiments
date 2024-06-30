import styled from "styled-components";
import Table from "../../ui/Table";

import PropTypes from "prop-types";
import CreateIncomeForm from "./CreateIncomeForm";
import { useDeleteIncome } from "./useDeleteIcome";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { HiPencil, HiTrash } from "react-icons/hi2";

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
  font-weight: 600;
  color: var(--color-grey-600);
`;

const Amount = styled.div`
  font-weight: 600;
  color: var(--color-grey-600);
`;

const Note = styled.div`
  font-weight: 500;
  color: var(--color-grey-600);
`;

const Date = styled.div`
  font-weight: 500;
  color: var(--color-grey-600);
`;

function IncomeRow({ income }) {
  // const [showForm, setShowForm] = useState(false);
  const { id: incomeId, amount, note, title, date } = income;
  const { isDeleting, deleteIncome } = useDeleteIncome();
  let persianDate = moment(date).locale("fa").format("YYYY/MM/DD");

  return (
    <Table.Row>
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={incomeId} />
          <Menus.List id={incomeId}>
            <Modal.Open opens="edit">
              <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
            </Modal.Open>

            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="edit">
          <CreateIncomeForm incomeToEdit={income} />
        </Modal.Window>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="incomes"
            disabled={isDeleting}
            onConfirm={() => deleteIncome(incomeId)}
          />
        </Modal.Window>
      </Modal>

      <Date>{persianDate}</Date>
      <Tiltle>{title}</Tiltle>
      <Amount>{amount}</Amount>
      <Note>{note}</Note>

      {/* <Button onClick={() => setShowForm((show) => !show)}>Edit</Button>
        <Button onClick={() => deleteIncome(incomeId)} disabled={isDeleting}>
          delete
        </Button> */}

      {/* <button onClick={() => setShowForm((show) => !show)}>
            <HiPencil />
          </button>
          <button onClick={() => deleteIncome(incomeId)} disabled={isDeleting}>
            <HiTrash />
          </button> */}
    </Table.Row>
  );
}

IncomeRow.propTypes = { income: PropTypes.any };

export default IncomeRow;

{
  /* {showForm && <CreateIncomeForm incomeToEdit={income} />} */
}
