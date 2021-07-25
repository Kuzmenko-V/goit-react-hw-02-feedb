import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div>
        <p className="Counter-value">Хорошо: {good}</p>
        <p className="Counter-value">Нормально: {neutral}</p>
        <p className="Counter-value">Плохо: {bad}</p>
        <p className="Counter-value">Вслего голосов: {total}</p>
        <p className="Counter-value">Процент положительных отзывов: {positivePercentage}%</p>
    </div>
);

export default Statistics;