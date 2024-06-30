import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import Row from "../ui/Row";

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
