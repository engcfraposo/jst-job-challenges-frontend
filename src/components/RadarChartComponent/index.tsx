/* eslint-disable react/prop-types */
import React, { FunctionComponent } from 'react';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

import { RadarChartContainer } from './styles';

interface DataProps {
  data: Array<{ name: string; value: number }>;
}

const RadarChartComponent: FunctionComponent<DataProps> = (props) => {
  const { data } = props;

  return (
    <>
      <RadarChartContainer>
        <ResponsiveContainer>
          <RadarChart outerRadius={100} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" stroke="#ffbe55" />
            <PolarRadiusAxis />
            <Radar
              dataKey="value"
              stroke="#fff"
              fill="#fff"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </RadarChartContainer>
    </>
  );
};

export default RadarChartComponent;
