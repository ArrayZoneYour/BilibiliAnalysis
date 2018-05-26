import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';

const data = [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 13 }
];

const cols = {
    'value': { min: 0 },
    'year': { range: [0, 1] }
};

class LineChart extends Component {
    render() {
        return (
            <Chart width={600} height={400} data={data} scale={cols}>
                <Axis name="year" title />
                <Axis name="value" title />
                <Tooltip />
                <Geom type="line" position="year*value" size={2} />
                <Geom type='point' position="year*value" size={4} shape={'circle'} style={{ stroke: '#fff', lineWidth: 1}} />
            </Chart>
        );
    }
}

export default LineChart;