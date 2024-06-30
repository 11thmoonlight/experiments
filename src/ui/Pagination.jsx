import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { PAGE_SIZE } from "../utils/Constants";

import Proptypes from "prop-types";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? "#997b66" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.8rem;
  }

  &:has(span:first-child) {
    padding-right: 0.8rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: #997b66;
    color: var(--color-brand-50);
  }
`;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <StyledPagination>
      <Buttons>
        <PaginationButton
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <HiChevronRight />
          <span>بعد</span>
        </PaginationButton>

        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
          <span>قبل</span>
          <HiChevronLeft />
        </PaginationButton>
      </Buttons>

      <P>
        نمایش <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> تا{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        از <span>{count}</span> نتیجه
      </P>
    </StyledPagination>
  );
}

Pagination.propTypes = { count: Proptypes.any };

export default Pagination;
