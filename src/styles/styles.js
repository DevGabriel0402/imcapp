import styled from "styled-components";

export const Container = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 25px;
  align-items: center;

  @media (max-width: 475px) {
    width: 375px;
  }
  @media (max-width: 320px) {
    width: 300px;
  }

  .group-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 145px;
    height: 145px;
    margin-bottom: 50px;
    border-radius: 10px;
    animation: balancê 2s linear infinite;

    @media (max-width: 475px) {
      width: 100px;
      height: 100px;
    }

    @keyframes balancê {
      0% {
        transform: translatey(0px);
      }

      50% {
        transform: translatey(20px);
      }
      100% {
        transform: translatey(0px);
      }
    }
  }

  .shadow {
    display: flex;
    margin-bottom: 10px;
    width: 100px;
    border-radius: 10px;
    box-shadow: 0px 0px 30px 10px #00000090;
    animation: balancêShadow 2s linear infinite;

    @keyframes balancêShadow {
      0% {
        box-shadow: #00000050;
        transform: scale(1);
      }

      50% {
        box-shadow: #000000;
        transform: scale(1.2);
      }
      100% {
        box-shadow: #00000050;
        transform: scale(1);
      }
    }
  }

  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;

    label {
      font-size: 16px;
      color: #505050;

      span {
        font-size: 12px;
        color: #50505050;
      }
    }

    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    input {
      padding: 13px 25px;
      border: 1px solid #e85b8150;
      border-radius: 5px;

      &:focus {
        outline: none;
        border: 1px solid #e85b81;
      }
    }

    @media (max-width: 475px) {
      width: 375px;
    }

    @media (max-width: 375px) {
      width: 320px;
    }
    @media (max-width: 320px) {
      width: 300px;
    }
  }

  button {
    width: 100%;
    background-color: #e85b81;
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    padding: 13px 25px;
    color: #fff;
    font-weight: 700;

    &:hover {
      background-color: #e85b8150;
      color: #e85b81;
      border: 1px solid #e85b81;
    }

    @media (max-width: 475px) {
      width: 375px;
    }
    @media (max-width: 375px) {
      width: 320px;
    }

    @media (max-width: 320px) {
      width: 300px;
    }
  }

  table {
    width: 420px;
    border-collapse: collapse;
    border: 1px solid #f4f4f4;

    tr th {
      font-weight: 400;
      text-align: left;
      padding: 7px 25px;
      border: none;
      color: #505050;
    }

    .impar {
      background-color: #f4f4f4;
    }
    .par {
      background-color: #fff;
    }

    .title {
      font-weight: 700;
      color: #e85b81;
      text-align: left;
    }

    @media (max-width: 475px) {
      width: 375px;
    }
    @media (max-width: 375px) {
      width: 320px;

      tr th {
        font-size: 12px;
      }
    }

    @media (max-width: 320px) {
      width: 300px;

      tr th {
        font-size: 12px;
      }
    }
  }
`;

export const Result = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-block: 60px;
  position: relative;

  @media (max-width: 475px) {
    width: 375px;
  }
  @media (max-width: 375px) {
    width: 320px;
  }

  @media (max-width: 320px) {
    width: 300px;
  }

  .hidden {
    display: none !important;
  }

  .bar {
    display: flex;
    width: 95%;
    height: 1px;
    background-color: #e85b81;
    position: absolute;
  }

  .info-result {
    display: flex;
    width: 254px;
    text-align: center;
    font-size: 20px;
    color: #00000050;
  }

  .result-imc {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 13px;
  }

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  .name {
    font-weight: 500;
  }
`;

export const Loading = styled.div`
  display: flex;
  width: 25px;
  height: 25px;
  border-top: 2.5px solid #e85b81;
  border-left: 2px solid #e85b81;
  border-bottom: 1px solid #e85b81;
  border-right: 0px solid transparent;
  border-radius: 25px;
  animation: loading 0.7s linear infinite;

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;
