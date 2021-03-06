/* eslint-disable react/prop-types */
import React, { FunctionComponent } from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

import { BarChartContainer } from './styles';

interface DataProps {
  data: Array<{ name: string; value: number }>;
}

const BarChartComponent: FunctionComponent<DataProps> = (props) => {
  const { data } = props;

  return (
    <>
      <BarChartContainer>
        <ResponsiveContainer>
          <BarChart
            height={160}
            width={100}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={10}
          >
            <XAxis
              dataKey="name"
              scale="auto"
              padding={{ left: 0, right: 0 }}
              stroke="#ffbe55"
            />
            <YAxis stroke="#FFF" />
            <CartesianGrid strokeDasharray="2 2" stroke="#FFF" />
            <Bar dataKey="value" fill="#FFF" />
          </BarChart>
        </ResponsiveContainer>
      </BarChartContainer>
    </>
  );
};

export default BarChartComponent;
