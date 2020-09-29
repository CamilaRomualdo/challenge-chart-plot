import InputData from './inputData.js';

export default class InputParser {

    constructor(events) {
        this.events = events;
        this.datasets = new Map();
    }

    inputValue() {
        let start = this.events.findIndex(event => event.type === 'start');
        let stop  = this.events.findIndex(event => event.type === 'stop');
        let span  = this.events.findIndex(event => event.type === 'span');

        this.aux = new InputData(this.events[start], this.datasets);

        if (span < stop && span > start) {
            this.aux.getSpan(this.events[span]);
        }

        for (let event of this.events.splice(start)) {
            const {type} = event;
            switch (type) {
                case 'start':
                    break;
                case 'span':
                    break;
                case 'data':
                    this.aux.getDataType(event);
                    break;
                case 'stop':
                    break;
                default:
                    console.log("Please check your input data!");
            }
        }
    }
}
