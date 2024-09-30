import styled from "styled-components";

const Paragraph = styled.p`
  margin-bottom: 8px;

  font-size: 18px;
  color: #4b4b4b;
  line-height: 1.5;

  &:last-of-type {
    margin-bottom: 0;
    font-weight: 600;
  }
`;

export { Paragraph };
