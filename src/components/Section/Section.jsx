import PropTypes from "prop-types";
import { Header, MainSection } from "./Section.styled";

export const Section = ({ title, children }) => {
  return (
    <MainSection>
      <Header>{title}</Header>
      {children}
    </MainSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
