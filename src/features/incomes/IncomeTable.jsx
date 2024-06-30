import Spinner from "../../ui/Spinner";
import IncomeRow from "./IncomeRow";
import { useIncomes } from "./useIncomes";
import Table from "../../ui/Table";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";
import Pagination from "../../ui/Pagination";
import Menus from "../../ui/Menus";
// import Pagination from "../../ui/Pagination";
// import { useAmount } from "./useAmount";

function IncomeTable() {
  const { isLoading, incomes, count } = useIncomes();
  const [searchParams] = useSearchParams();
  // const { amounts } = useAmount();
  // const sum = amounts.reduce((sum, current) => sum + current.amount, 0);

  if (isLoading) return <Spinner />;
  if (!incomes.length) return <Empty resourceName="income" />;

  const filterValue = searchParams.get("titles") || "all";

  let filteredIncomes;
  if (filterValue === "all") filteredIncomes = incomes;
  if (filterValue === "سود سرمایه")
    filteredIncomes = incomes.filter((income) => income.title === "سود سرمایه");
  if (filterValue === "یارانه و هدایا")
    filteredIncomes = incomes.filter(
      (income) => income.title === "یارانه و هدایا"
    );
  if (filterValue === "حقوق")
    filteredIncomes = incomes.filter((income) => income.title === "حقوق");
  if (filterValue === "وام")
    filteredIncomes = incomes.filter((income) => income.title === "وام");
  if (filterValue === "معاملات")
    filteredIncomes = incomes.filter((income) => income.title === "معاملات");

  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedIncomes = filteredIncomes.sort(
    (a, b) => (a[field] - b[field]) * modifier
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
          data={sortedIncomes}
          render={(income) => <IncomeRow income={income} key={income.id} />}
        />

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default IncomeTable;

// import DatePicker from "react-multi-date-picker";
// import persian from "react-date-object/calendars/persian";
// import persian_en from "react-date-object/locales/persian_en";
// import { useState } from "react";
// import type { DateObject, Value } from "react-multi-date-picker";
// import { useFilterChart } from "./FilterChartProvider";

// type Props = {
//   componentName: ComponentName,
// };
// type ComponentName = "lineChart" | "radarChart" | "barChart";
// const DateRangeFilter: React.FC<Props> = ({ componentName }) => {
//   const { state, updateState } = useFilterChart();
//   const relevantState = state[componentName];

//   const [dateRange, setDateRange] =
//     useState < Value > [relevantState.fromDate, relevantState.toDate];

//   function handleDateChange(
//     date: DateObject | DateObject[] | null,
//     options: any
//   ) {
//     const dateArray = options.validatedValue;
//     if (Array.isArray(dateArray) && dateArray.length === 2) {
//       setDateRange(dateArray);

//       const updatedFilters = {
//         ...state,
//         [componentName]: {
//           ...relevantState,
//           fromDate: dateArray[0].toString(),
//           toDate: dateArray[1].toString(),
//         },
//       };
//       localStorage.setItem("entityFilterState", JSON.stringify(updatedFilters));
//     }
//   }

//   return (
//     <div className="mb-10">
//       <label className="form-label fw-bold">Date Range:</label>
//       <DatePicker
//         value={dateRange}
//         onChange={(date, options) => {
//           handleDateChange(date, options);
//         }}
//         calendar={persian}
//         locale={persian_en}
//         range
//         calendarPosition="bottom-right"
//       />
//     </div>
//   );
// };
// export { DateRangeFilter };
