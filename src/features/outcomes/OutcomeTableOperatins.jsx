import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function OutcomeTableOperatins() {
  return (
    <TableOperations>
      <Filter
        filterField="titles"
        options={[
          { value: "all", label: "همه" },
          { value: "خرید", label: "خرید" },
          { value: "قرض دادن", label: "قرض دادن" },
          { value: "هدیه دادن", label: "هدیه دادن" },
          { value: "رفت و آمد", label: "رفت و آمد" },
        ]}
      />

      <SortBy
        options={[
          { value: "amount-asc", label: "مرتب سازی بر اساس مقدار (کمترین)" },
          { value: "amount-desc", label: "مرتب سازی بر اساس مقدار (بیشترین)" },
        ]}
      />
    </TableOperations>
  );
}

export default OutcomeTableOperatins;
