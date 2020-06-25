import styled from 'styled-components';

export const RadarChartContainer = styled.div`
  height: 100%;
  padding-top: 10px;
  width: 450px;

  @media (max-width: 768px) {
    height: 300px;
    width: 300px;
    border: 2px solid #fff;
    border-radius: 5px;
    margin-top: 10px;
  }
`;
