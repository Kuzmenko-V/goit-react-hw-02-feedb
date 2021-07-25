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
        bad: 0,
        total: 0,
        positivePercentage: 0
    }
    state = {
      good: this.props.good,
      neutral: this.props.neutral,
      bad: this.props.bad,
      total: this.props.good + this.props.neutral + this.props.bad,
      positivePercentage: (this.props.total===0)? 0 : Math.round((this.props.good * 100) / (this.props.good + this.props.neutral + this.props.bad))
    };
    incStats = (value) => {
        console.log(value);
        this.setState(prevState => {       
            return {
                [value]: prevState[value] + 1,
            };
        });
        this.countTotalFeedback();
    };
    countTotalFeedback = () => { 
        this.setState(prevState => {
            return {total : prevState.good+prevState.neutral+prevState.bad,}
        });
        this.countPositiveFeedbackPercentage();
    };
    countPositiveFeedbackPercentage = () => {
        this.setState(prevState => {
            return {positivePercentage: Math.round(prevState.good*100/prevState.total)}
        });
    };
    
    render() {
        const { good , neutral , bad , total , positivePercentage } = this.state
        const options = ['good','neutral','bad'];
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
