import React from 'react';
import { VegaLite, VisualizationSpec } from 'react-vega';

const TravelTimeChart: React.FC = () => {
    const spec: VisualizationSpec = {
        width: 400,
        height: 300,
        mark: { type: 'bar' },
        encoding: {
            x: {
                field: 'Travel Mode',
                type: 'nominal',
                axis: { title: 'Travel Mode' }
            },
            y: {
                field: 'Time (hours)',
                type: 'quantitative',
                axis: { title: 'Travel Time (hours)' }
            },
            color: {
                field: 'Travel Mode',
                type: 'nominal',
                legend: null
            }
        },
        data: {
            values: [
                { "Travel Mode": "Before Railroad", "Time (hours)": 11 },
                { "Travel Mode": "After Railroad", "Time (hours)": 3 }
            ]
        }
    };

    return <VegaLite spec={spec} />;
};

export default TravelTimeChart;
