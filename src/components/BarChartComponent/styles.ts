import styled from 'styled-components';

export const BarChartContainer = styled.div`
  height: 100%;
  padding-top: 10px;
  width: 420px;

  @media (max-width: 768px) {
    height: 240px;
    width: 300px;
    border: 2px solid #fff;
    border-radius: 5px;
  }
`;
