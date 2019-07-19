const React = require('react');
const { Chart: ReactGoogleChart } = require('react-google-charts');

const Chart = (props) => (
    <ReactGoogleChart
        chartType="TreeMap"
        width="100%"
        height="400px"
        data={props.data}
        options={{
            minColor: "#7869ff",
            midColor: "#3d2fb9",
            maxColor: "#2c2662",
            fontColor: "white",
            showScale: false,
            headerHeight: 0,
            highlightOnMouseOver: false,
        }}
    />
);

module.exports = Chart;
