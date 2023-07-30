import PropTypes from 'prop-types';
import { SectionWrapper, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      {children}
    </SectionWrapper>
  );
};

export default Section;

Section.propTypes = {
 children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};