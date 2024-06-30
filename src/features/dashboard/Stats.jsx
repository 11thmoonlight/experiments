import styled from "styled-components";
import PropTypes from "prop-types";

import Stat from "./Stat";
import { formatCurrency } from "../../utils/helper";

import { GiReceiveMoney } from "react-icons/gi";
import { HiOutlineGift } from "react-icons/hi";
import { GiBuyCard } from "react-icons/gi";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GiPayMoney } from "react-icons/gi";
import { GrLineChart } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";
import { TbBuildingBank } from "react-icons/tb";
import { GrBus } from "react-icons/gr";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { MdFormatListNumberedRtl } from "react-icons/md";

const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: var(--border-radius-sm);

  @media (max-width: 1180px) {
    display: block;
  }
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  background-color: #d8e2dc;
  background-color: var(--color-stat-background);
  padding: 5rem;
  border-radius: var(--border-radius-sm);

  @media (max-width: 1380px) {
    padding: 3rem;
  }

  @media (max-width: 1300px) {
    padding: 2rem;
    gap: 2rem;
  }

  @media (max-width: 1180px) {
    margin-bottom: 5rem;
  }

  @media (max-width: 740px) {
    display: block;
  }

  @media (max-width: 450px) {
    padding: 1rem;
  }
`;

function Stats({ incomes, outcomes }) {
  console.log(outcomes);
  const numIncomes = incomes.length;
  const amounts = incomes.reduce((acc, cur) => acc + cur.amount, 0);

  const dividend = incomes
    .filter((cur) => cur.title === "سود سرمایه")
    .reduce((acc, cur) => acc + cur.amount, 0);

  const gift = incomes
    .filter((cur) => cur.title === "یارانه و هدایا")
    .reduce((acc, cur) => acc + cur.amount, 0);

  const loan = incomes
    .filter((cur) => cur.title === "وام")
    .reduce((acc, cur) => acc + cur.amount, 0);

  const salary = incomes
    .filter((cur) => cur.title === "حقوق")
    .reduce((acc, cur) => acc + cur.amount, 0);

  const dealing = incomes
    .filter((cur) => cur.title === "معاملات")
    .reduce((acc, cur) => acc + cur.amount, 0);

  const outcomeAmount = outcomes.reduce((acc, cur) => acc + cur.amount, 0);

  const buy = outcomes
    .filter((cur) => cur.title === "خرید")
    .reduce((acc, cur) => acc + cur.amount, 0);

  const gifting = outcomes
    .filter((cur) => cur.title === "هدیه دادن")
    .reduce((acc, cur) => acc + cur.amount, 0);

  const lend = outcomes
    .filter((cur) => cur.title === "قرض دادن")
    .reduce((acc, cur) => acc + cur.amount, 0);

  const transposition = outcomes
    .filter((cur) => cur.title === "رفت و آمد")
    .reduce((acc, cur) => acc + cur.amount, 0);

  const numOutcomes = outcomes.length;

  return (
    <StyledContainer>
      <StyledDiv>
        <Stat
          title="تعداد دریافت ها"
          color="green"
          icon={<MdFormatListNumberedRtl />}
          value={numIncomes}
        />
        <Stat
          title="جمع دریافت ها"
          color="green"
          icon={<GiReceiveMoney />}
          value={formatCurrency(amounts)}
        />
        <Stat
          title="سود سرمایه"
          color="green"
          icon={<GrLineChart />}
          value={formatCurrency(dividend)}
        />
        <Stat
          title="یارانه و هدایا"
          color="green"
          icon={<HiOutlineGift />}
          value={formatCurrency(gift)}
        />

        <Stat
          title="وام"
          color="green"
          icon={<TbBuildingBank />}
          value={formatCurrency(loan)}
        />

        <Stat
          title="حقوق"
          color="green"
          icon={<MdWorkOutline />}
          value={formatCurrency(salary)}
        />

        <Stat
          title="معاملات"
          color="green"
          icon={<GiBuyCard />}
          value={formatCurrency(dealing)}
        />
      </StyledDiv>

      <StyledDiv>
        <Stat
          title="تعداد پرداخت ها"
          color="red"
          icon={<MdFormatListNumberedRtl />}
          value={numOutcomes}
        />

        <Stat
          title="جمع پرداخت ها"
          color="red"
          icon={<GiPayMoney />}
          value={formatCurrency(outcomeAmount)}
        />

        <Stat
          title="خرید ها"
          color="red"
          icon={<HiOutlineShoppingCart />}
          value={formatCurrency(buy)}
        />

        <Stat
          title="هدیه دادن ها"
          color="red"
          icon={<GiGiftOfKnowledge />}
          value={formatCurrency(gifting)}
        />

        <Stat
          title="بدهی ها"
          color="red"
          icon={<LiaMoneyCheckAltSolid />}
          value={formatCurrency(lend)}
        />

        <Stat
          title="رفت و آمد ها"
          color="red"
          icon={<GrBus />}
          value={formatCurrency(transposition)}
        />
      </StyledDiv>
    </StyledContainer>
  );
}

Stats.propTypes = { incomes: PropTypes.any, outcomes: PropTypes.any };

export default Stats;
