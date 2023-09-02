import { FC } from "react";
import { useCounter } from "../hooks/useCounter";
import { Button } from "../ui-kit/Button";
import { Presentation } from "./Presentation";
import styled from "styled-components";

export const Counter: FC = () => {
  const {
    onResetButtonHandler,
    onMinusClickHandler,
    onPlusClickHandler,
    count,
  } = useCounter();
  return (
    <Root>
      <ButtonContainer>
        <Button onClick={onPlusClickHandler} buttonText={"+1"} />
        <Button onClick={onMinusClickHandler} buttonText={"-1"} />
        <Button onClick={onResetButtonHandler} buttonText={"reset"} />
      </ButtonContainer>
      <Presentation count={count} />
    </Root>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const Root = styled.div`
  margin: 16px;
`;
