import OutcomeTable from "../features/outcomes/OutcomeTable";
import Row from "../ui/Row";
import OutcomeTableOperatins from "../features/outcomes/OutcomeTableOperatins";
import AddOutcome from "../features/outcomes/AddOutcome";

function Outcomes() {
  return (
    <>
      <Row type="horizontal">
        <OutcomeTableOperatins />
      </Row>
      <Row>
        <OutcomeTable />
        <AddOutcome />
      </Row>
    </>
  );
}

export default Outcomes;
