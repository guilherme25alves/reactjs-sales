import React from "react";
import styled from "styled-components";
import {
  AiFillTag,
  AiFillExperiment,
  AiFillDollarCircle,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";

export default () => {
  return (
    <Section>
      <div className="analytic color1">
        <div className="design">
          <div className="logo">
            <AiFillTag />
          </div>
          <div className="content">
            <h5>R$123.520.00,00</h5>
          </div>
        </div>
        <div className="total">
          <h6>TOTAL SALES</h6>
          <span className="t1">+18%</span>
          <AiOutlineArrowUp className="svg1" />
        </div>
      </div>

      <div className="analytic color2">
        <div className="design">
          <div className="logo">
            <AiFillExperiment />
          </div>
          <div className="content">
            <h5>R$100.999.00,00</h5>
          </div>
        </div>
        <div className="total">
          <h6>TOTAL EXPENSES</h6>
          <span className="t2">-10%</span>
          <AiOutlineArrowDown className="svg2" />
        </div>
      </div>

      <div className="analytic color3">
        <div className="design">
          <div className="logo">
            <AiFillDollarCircle />
          </div>
          <div className="content">
            <h5>R$200.000,99</h5>
          </div>
        </div>
        <div className="total">
          <h6>TOTAL REVENUE</h6>
          <span className="t1">+30%</span>
          <AiOutlineArrowUp className="svg1" />
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  .color1 {
    background-color: #eef4ff;
  }

  .color2 {
    background-color: #fdf4f5;
  }

  .color3 {
    background-color: #fffce4;
  }

  .analytic {
    padding: 1rem 2rem 1rem 2rem;
    border-radius: 1rem;
    color: black;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #d4e0ff;
      color: black;

      svg {
        color: black;
      }
    }

    .design {
      display: flex;
      align-items: center;
      gap: 1rem;

      .logo {
        background-color: white;
        border-radius: 1rem;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.5rem;

        svg {
          font-size: 1.5rem;
        }
      }
    }

    .total {
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: space-evenly;
      margin-top: 20px;

      .svg1,
      .t1 {
        color: green;
      }

      .svg2,
      .t2 {
        color: red;
      }

      h6 {
        color: grey;
      }
    }
  }
`;
