import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: #FBFCFF;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 115px 1fr;

  .bg-img {
    grid-row: 2;
    grid-column: 1;
    margin-left: -5rem;
  }
`
export const Header = styled.header`
  grid-row: 1;
  grid-column: 1;
  justify-self: center;
  align-self: center;
`