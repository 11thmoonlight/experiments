import IncomeTable from "../features/incomes/IncomeTable";
import Row from "../ui/Row";
import IncomeTableOperatins from "../features/incomes/IncomeTableOperatins";
import AddIncome from "../features/incomes/AddIncome";

function Incomes() {
  return (
    <>
      <Row type="horizontal">
        <IncomeTableOperatins />
      </Row>
      <Row>
        <IncomeTable />
        <AddIncome />
      </Row>
    </>
  );
}

export default Incomes;
