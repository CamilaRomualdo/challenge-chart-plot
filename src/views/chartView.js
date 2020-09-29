import React from 'react';

import Chart from 'chart.js'

import './css/view.css'
import {chartOptions} from "../utils/chartOptions";

class ChartView extends React.Component {

    constructor(props) {
        super(props);
        // https://www.createwithdata.com/react-chartjs-dashboard/
        this.chartRef = React.createRef();
    }


    // https://www.createwithdata.com/react-chartjs-dashboard/
    componentDidUpdate = () => {
        this.myChart.data.datasets = this.props.datasets;
        this.myChart.update();
    }

    // https://www.createwithdata.com/react-chartjs-dashboard/
    componentDidMount = () => {
        this.myChart = new Chart(this.chartRef.current, {
            type: "line",
            data: {
                datasets: this.props.datasets,
            },
            options: chartOptions,
        });
        this.myChart.generateLegend();
    }

    render() {
        return (
            <div className="chartView-container">
                <canvas ref={this.chartRef} />
            </div>
        );
    }
}

export default ChartView;
