import React from 'react';
import style from '../components/ProgressCircle.module.css'; // Estilos opcionais

const ProgressCircle = ({ size, progress, strokeWidth }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className={style.container}>
       <svg width={size} height={size} className="progress-circle">
      <circle
        className="progress-circle__background"
        stroke="#e6e6e6"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        className="progress-circle__progress"
        stroke="#00aaff"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="1.2em"
        fill="#333"
      >
        {progress}%
      </text>
    </svg>
    </div>
  );
};

export default ProgressCircle;
