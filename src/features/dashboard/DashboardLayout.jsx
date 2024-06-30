import styled from "styled-components";
import { useRecentIncoms } from "./useRecentIncomes";
import { useRecentOutcomes } from "./useRecentOutcomes";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";

const StyledDashboardLayout = styled.div``;

function DashboardLayout() {
  const { incomes, isLoading: isLoading1 } = useRecentIncoms();
  const { outcomes, isLoading: isLoading2 } = useRecentOutcomes();
  console.log(outcomes);

  if (isLoading1 || isLoading2) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats incomes={incomes} outcomes={outcomes} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
