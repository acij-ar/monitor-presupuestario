const React = require('react');
const {Chart: ReactGoogleChart} = require('react-google-charts');

const Chart = ({data, title}) => (
    <ReactGoogleChart
        chartType="TreeMap"
        width="100%"
        height="400px"
        data={data}
        options={{
            title,
            minColor: "#7869ff",
            midColor: "#3d2fb9",
            maxColor: "#2c2662",
            fontColor: "white",
            showScale: false,
            headerHeight: 0,
            highlightOnMouseOver: false,
            generateTooltip: (row) => (`
                <div style="background:#fafafa; border: solid 1px #aaa; color: #333;">
                    <p>${data[row+1][0]} $${data[row][2]}</p>
                </div>
            `),
        }}
    />
);

module.exports = Chart;
