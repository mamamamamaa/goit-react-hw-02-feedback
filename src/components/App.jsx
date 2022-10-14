import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Box } from './App.styled';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const marks = [good, neutral, bad];

  const handleClick = name => {
    switch (name) {
      case 'good':
        setGood(s => s + 1);
        break;
      case 'neutral':
        setNeutral(s => s + 1);
        break;
      case 'bad':
        setBad(s => s + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = marks => {
    return marks.reduce((acc, mark) => acc + mark);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  return (
    <Box>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback(marks) ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback(marks)}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Box>
  );
}
