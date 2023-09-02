import { ComponentPropsWithoutRef, FC } from "react";
import styled from "styled-components";

interface ButtonPropsT extends ComponentPropsWithoutRef<"button"> {
  onClick?: () => void;
  buttonText?: string;
}

export const Button: FC<ButtonPropsT> = ({ buttonText, onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {buttonText}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 0.8rem 1.6rem;
  background: blueviolet;
  border: none;
  border-radius: 9px;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 500;
  &:hover:not(:disabled) {
    box-shadow: inset 0 0 0 1px blueviolet;
    background: #fff;
    color: black;
  }
  &:disabled {
    background: #ccc;
    color: #666;
    cursor: not-allowed; /* Это делает курсор недоступным для задизейбленной кнопки */
  }
`;
