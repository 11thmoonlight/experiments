import { useOutcome } from "./useOutcome";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import OutcomeRow from "./OutcomeRow";
import Pagination from "../../ui/Pagination";
import { useSearchParams } from "react-router-dom";
import Menus from "../../ui/Menus";

function OutcomeTable() {
  const { isLoading, outcomes, count } = useOutcome();
  const [searchParams] = useSearchParams();

  console.log(outcomes);

  if (isLoading) return <Spinner />;
  if (!outcomes.length) return <Empty resourceName="outcome" />;

  const filterValue = searchParams.get("titles") || "all";

  let filteredOutcomes;
  if (filterValue === "all") filteredOutcomes = outcomes;
  if (filterValue === "خرید")
    filteredOutcomes = outcomes.filter((outcome) => outcome.title === "خرید");
  if (filterValue === "قرض دادن")
    filteredOutcomes = outcomes.filter(
      (outcome) => outcome.title === "قرض دادن"
    );
  if (filterValue === "رفت و آمد")
    filteredOutcomes = outcomes.filter(
      (outcome) => outcome.title === "رفت و آمد"
    );
  if (filterValue === "هدیه دادن")
    filteredOutcomes = outcomes.filter(
      (outcome) => outcome.title === "هدیه دادن"
    );

  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [feild, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedOutcomes = filteredOutcomes.sort(
    (a, b) => (a[feild] - b[feild]) * modifier
  );

  return (
    <Menus>
      <Table columns="0.3fr 1fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>تاریخ</div>
          <div>عنوان</div>
          <div>مقدار</div>
          <div>یادداشت</div>
        </Table.Header>

        <Table.Body
          data={sortedOutcomes}
          render={(outcome) => (
            <OutcomeRow outcome={outcome} key={outcome.id} />
          )}
        />

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default OutcomeTable;
