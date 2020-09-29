// https://www.chartjs.org/docs/latest/general/
export var chartOptions = {
    maintainAspectRatio: false,
    layout: {
        padding: {
            left: 18,
            right: 0,
            top: 0,
            bottom: 0
        }
    },
    legend: {
        display: true,
        position: "right",
        align: 'start',
        labels: {
            fontSize: 11,
            fontStyle: "normal",
            usePointStyle: true,
            padding: 17,
            fontFamily: "'Source Sans Pro', sans-serif",
        }
    },
    scales: {
        xAxes: [
            {
                type: 'time',
                time: {
                    unit: 'minute',
                    displayFormats: {
                        minute: 'HH:mm',

                    },
                },
                gridLines: {
                    display: false,
                },
            }
        ],
        yAxes: [
            {
                gridLines: {
                    drawBorder: false,
                },
                ticks: {
                    maxTicksLimit: 5,
                    stepSize: 0.1,
                    display: false,
                    beginAtZero: true,
                }
            }
        ]
    }
};
