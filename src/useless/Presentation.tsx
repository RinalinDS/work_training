import { FC } from "react";
import styled from "styled-components";

type PresentationPropsT = {
  count: number;
};

export const Presentation: FC<PresentationPropsT> = ({ count }) => {
  return <Box>{count}</Box>;
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
