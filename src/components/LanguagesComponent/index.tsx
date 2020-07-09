/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { FunctionComponent } from 'react';

import { LanguagesBox, LanguagesText, LanguagesTitle } from './styles';

interface DataProps {
  data: Array<{ name: string; value: number }>;
}

const RadarChartComponent: FunctionComponent<DataProps> = (props) => {
  const { data } = props;

  return (
    <>
      <LanguagesBox>
        <LanguagesTitle>Linguagens:</LanguagesTitle>
        {data.map((content) => (
          <LanguagesText key={content.name}>
            {content.name}:{content.value} palavras
          </LanguagesText>
        ))}
      </LanguagesBox>
    </>
  );
};

export default RadarChartComponent;
