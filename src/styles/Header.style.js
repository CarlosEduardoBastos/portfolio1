import styled from "styled-components";

export const HeaderContent = styled.header`
  width: 100%;
  background-color: #193140;
  section {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .sobre {
      h1 {
        color: #fff;
        font-family: Helvetica;
        font-size: 2rem;
        margin: 10px 0px;
      }
      p {
        color: #fff;
        font-family: "Times New Roman", Times, serif;
        font-size: 1.1rem;
        margin: 5px 0px;
      }
      a {
        text-decoration: none;
        margin: 10px 10px 0px 0px;
        color: #99d8ff;
      }
    }
  }
`;
