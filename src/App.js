import './App.css';
import React from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';

class Counter extends React.Component {
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    state = {
      good: this.props.good,
      neutral: this.props.neutral,
      bad: this.props.bad
    };
    incStats = (value) => {
        console.log(value);
        this.setState(prevState => {       
            return {
                [value]: prevState[value] + 1,
            };
        });
    };
       
    render() {
        const { good , neutral , bad } = this.state
        const options = Object.getOwnPropertyNames(this.state);
        const total = good + neutral + bad;
        const positivePercentage = Math.round(good * 100 / total);
        return (
            <div className="Counter">
                <Section title="Оставте свой отзыв.">
                    <FeedbackOptions
                    options={options}
                    onIncStats={this.incStats}
                    />
                </Section>
                <Section title="Статистика">
                    {total > 0 ? 
                        <Statistics
                          good={good}
                          neutral={neutral}
                          bad={bad}
                          total={total}
                          positivePercentage={positivePercentage}
                        />
                        :
                        <Notification message="Пока что нет отзывов."/>
                    }
                </Section>
                
            </div>
        );
    }
}

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
