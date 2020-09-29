export default class InputData {

    constructor(event, datasets) {
        this.group = event.group;
        this.select = event.select;
        this.span = [];
        this.datasets = datasets;
    }

    getSpan(event) {
        let {begin, end} = event;
        let timestamp = new Date(begin);

        this.timezone = timestamp.getTimezoneOffset() * 60 * 1000;

        begin = begin + this.timezone;
        end = end + this.timezone;

        this.span = [begin, end];
    }

    getDataType(event) {
        if (!this.response(event)) {
            return;
        }
        const groupName = getGroup(event, this.group, this.select);
        for (let currentSelect of this.select) {
            const dataName = (groupName + " " + currentSelect);
            const point = {
                x: event.timestamp + this.timezone,
                y: event[currentSelect],
            };
            getDataset(this.datasets, dataName, point);
        }
    }

    response = (event) => {
        const timestamp = event.timestamp + this.timezone;
        return !(timestamp < this.span[0] || timestamp > this.span[1]);
    }
}

function getGroup(event, group) {
    const reducer = (partialName, currentGroupItem) => {
        if (event.hasOwnProperty(currentGroupItem)) {
            return partialName + " " + event[currentGroupItem];
        }
        return partialName;
    };
    return (group.reduce(reducer, ""));
}

function getDataset(datasets, dataName, point) {
    if (datasets.has(dataName)) {
        datasets.get(dataName).data.push(point)
    } else {
        datasets.set(dataName, generateData(point, dataName));
    }
}

function generateData(firstPoint, dataName) {
    const label = dataName;
    const color = generateColor();

    // https://www.chartjs.org/docs/latest/charts/line.html
    return {
        label,
        data: [firstPoint],
        backgroundColor: color,
        borderColor: color,
        fill: false,
        pointBorderColor: color,
        pointBorderWidth: 7,
        pointHoverRadius: 7,
        borderWidth: 2,
    }
}

function generateColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
