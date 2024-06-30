import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";

const StyledInSumChart = styled(DashboardBox)`
  grid-column: 1/-1;

  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

function IncomeSumChart() {
  return (
    <StyledInSumChart>
      <Heading as="h2">Income Sum</Heading>
    </StyledInSumChart>
  );
}

export default IncomeSumChart;
