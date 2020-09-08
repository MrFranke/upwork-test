import React from 'react';
import css from './RadialChart.module.css';

type Props = {
  progress: number;
}

const getColor = (progress: number) =>
  progress === 100 ? '#0ed145' : '#f5a44d';

export const RadialChart: React.FC<Props> = ({progress}) => {
  const radius = 25;
  const circumference = 2 * 3.14 * 25;
  const strokeLength = circumference / 100 * Math.min(progress, 100);
  return (
    <div className={css.Wrapper}>
      <span className={css.Label}>{progress}%</span>
      <svg className={css.Chart} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" width={'60px'} height={'60px'}>
        <circle cx="30" cy="30" r={radius} fill="none" stroke={getColor(progress)} strokeDasharray={`${strokeLength}, ${circumference}`} strokeWidth="6" />
      </svg>
    </div>
  )
};
