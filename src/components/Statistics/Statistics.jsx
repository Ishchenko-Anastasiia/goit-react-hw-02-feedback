import PropTypes from 'prop-types';
import { StatisticsWrapper } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsWrapper>
      <p>
        GOOD: <span>{good}</span>
      </p>
      <p>
        NEUTRAL: <span>{neutral}</span>
      </p>
      <p>
        BAD: <span>{bad}</span>
      </p>
      <p>
        TOTAL: <span>{total}</span>
      </p>
      <p>
        POSITIVE FEEDBACKS: <span>{positivePercentage}</span>%
      </p>
    </StatisticsWrapper>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};