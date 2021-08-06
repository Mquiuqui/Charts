/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

let chart = am4core.create("chartdiv", am4charts.SlicedChart);
chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

chart.data = [{
    "name": "MI-01",
    "value": 600
}, {
    "name": "RI-1",
    "value": 300
}, {
    "name": "MI-01",
    "value": 200
}, {
    "name": "MI-04",
    "value": 180
}, {
    "name": "supervisão",
    "value": 50
}, {
    "name": "Outros",
    "value": 20
}, {
    "name": "Apoio",
    "value": 10
}];

let series = chart.series.push(new am4charts.FunnelSeries());
series.colors.step = 6;
series.dataFields.value = "value";
series.dataFields.category = "name";
series.alignLabels = true;

series.labelsContainer.paddingLeft = 15;
series.labelsContainer.width = 200;

//series.orientation = "horizontal";
//series.bottomRatio = 1;

chart.legend = new am4charts.Legend();
chart.legend.position = "left";
chart.legend.valign = "bottom";
chart.legend.margin(5,5,20,5);


function Column(){
    return (
        <div id="chartdiv">
        </div>
    );
}


export default Column;