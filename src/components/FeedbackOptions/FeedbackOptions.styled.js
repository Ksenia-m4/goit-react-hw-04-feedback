import styled from "styled-components";

const List = styled.ul`
  display: flex;
  justify-content: center;
`;

const Item = styled.li`
  text-align: center;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;

  font-size: 16px;
  text-transform: capitalize;

  background-color: #5da3f7;
  color: white;
  border: 1px solid #5da3f7;
  border-radius: 5px;

  cursor: pointer;
  transition: background-color 0.4s ease;

  &:hover {
    background-color: #387dcc;
  }
`;

export { List, Item, Button };
