import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "7", label: "هفت روز گذشته" },
        { value: "30", label: "سی روز گذشته" },
        { value: "90", label: "نود روز گذشته" },
      ]}
    />
  );
}

export default DashboardFilter;
