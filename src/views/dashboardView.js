import React from 'react';

import Toolbar from "../components/toolbar";
import InputView from "./inputView";
import ChartView from "./chartView";
import Footer from "../components/footer";

import { parse } from 'dirty-json';
import InputParser from "../utils/inputParser";

import Swal from "sweetalert2";

class DashboardView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            chartData: [],
        };
        this.input = '';
    }

    generateChart = () => {
        const str = "[" + this.input.replace(/\n/g, ",") + "]";
        let jsonObj;
        try {
            jsonObj = parse(str);
            this.parser = new InputParser(jsonObj);
            this.parser.inputValue(jsonObj);

            let array = Array.from(this.parser.datasets.values());
            this.setState({
                value: this.input,
                chartData: array
            }, () => {
                console.log(this.state.value);

            });
        } catch (e) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please check your input data!'
            })
        }
    }

    handleSubmit = (input) => {
        this.input = input;
    }

    render() {
        return (
            <div className="dashboardView-container">
                <Toolbar />
                <InputView submit={this.handleSubmit} value={this.state.value} />
                <ChartView datasets={this.state.chartData} />
                <Footer onClick={this.generateChart} />
            </div>
        );
    }
}

export default DashboardView;
