/* eslint-disable react/prop-types */
import React from 'react';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';

import { RadarChartContainer } from './styles';

interface DataProps {
  data: Array<{ name: string; value: number }>;
}

const RadarChartComponent: React.FC<DataProps> = (props) => {
  const { data } = props;

  return (
    <>
      <RadarChartContainer>
        <RadarChart
          cx={150}
          cy={150}
          outerRadius={70}
          width={350}
          height={350}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="name" stroke="#ffbe55" />
          <PolarRadiusAxis />
          <Radar dataKey="value" stroke="#fff" fill="#fff" fillOpacity={0.6} />
        </RadarChart>
      </RadarChartContainer>
    </>
  );
};

export default RadarChartComponent;
