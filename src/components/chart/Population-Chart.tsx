import React from 'react';
import { VegaLite, VisualizationSpec } from 'react-vega';

const PopulationChart: React.FC = () => {
  const data = [
    { year: 1640, population: 1200 },
    { year: 1660, population: 3000 },
    { year: 1680, population: 4500 },
    { year: 1700, population: 6700 },
    { year: 1720, population: 12000 },
    { year: 1740, population: 16000 },
    { year: 1760, population: 18000 },
    { year: 1780, population: 24000 },
    { year: 1800, population: 25000 },
    { year: 1820, population: 40000 },
    { year: 1840, population: 93000 },
    { year: 1860, population: 178000 },
    { year: 1880, population: 362000 },
    { year: 1900, population: 560000 },
    { year: 1920, population: 748000 },
    { year: 1940, population: 770000 },
    { year: 1960, population: 697000 },
    { year: 1980, population: 562000 },
    { year: 2000, population: 589000 },
    { year: 2024, population: 675000 },
  ];

  const spec: VisualizationSpec = {
    width: 600,
    height: 400,
    mark: 'line',
    encoding: {
      x: { field: 'year', type: 'temporal', title: 'Year' },
      y: { field: 'population', type: 'quantitative', title: 'Population' },
    },
    data: { values: data },
  };

  return <VegaLite spec={spec} />;
};

export default PopulationChart;
