import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function IncomeTableOperatins() {
  return (
    <TableOperations>
      <Filter
        filterField="titles"
        options={[
          { value: "all", label: "همه" },
          { value: "سود سرمایه", label: "سود سرمایه" },
          { value: "یارانه و هدایا", label: "یارانه و هدایا" },
          { value: "وام", label: "وام" },
          { value: "حقوق", label: "حقوق" },
          { value: "معاملات", label: "معاملات" },
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

export default IncomeTableOperatins;
