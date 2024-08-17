import { styled } from "styled-components";

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const ModalBody = styled.div`
  background: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong{
        font-size: 24px;
      }

    button {
      background: transparent;
      border: 0;
      cursor: pointer;
      line-height: 0;

      svg {
        color: #bcbcbc;
        width: 20px;
        height: 20px;
      }
    }
  }
  .status-container {
    margin-top: 32px;
    small {
      font-size: 14px;
      opacity: 0.8;
    }
    div {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;
  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;
    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        font-size: 12px;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;

        strong {
          display: block;
          margin-bottom: 4px;
        }

        span {
          font-size: 14px;
          color: #666;
        }
      }
    }
    }

    .total {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 24px;
    }
`;
