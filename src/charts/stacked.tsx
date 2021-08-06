/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Series } from "highcharts";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create("chartdiv2", am4charts.XYChart);


// Add data
chart.data = [{
    "mes": "maio",
    "Coopercarga": 2,
    "Posto Camaleao": 3,
    "Posto Skalla": 9,
    "Rede hg solucoes empresariais": 5
    },
{
    "mes": "junho",
    "Coopercarga": 5,
    "Posto Camaleao": 2,
    "Posto Skalla": 5,
    "Rede hg solucoes empresariais": 9,
},
{
    "mes": "julho",
    "Coopercarga": 2,
    "Posto Camaleao": 3,
    "Posto Skalla": 9,
    "Rede hg solucoes empresariais": 5
},
{
    "mes": "agosto",
    "Coopercarga": 5,
    "Posto Camaleao": 2,
    "Posto Skalla": 5,
    "Rede hg solucoes empresariais": 9,
},
{
    "mes": "setembro",
    "Coopercarga": 5,
    "Posto Camaleao": 8,
    "Posto Skalla": 2,
    "Rede hg solucoes empresariais": 3,
},
{
    "mes": "outubro",
    "Coopercarga": 6,
    "Posto Camaleao": 4,
    "Posto Skalla": 2,
    "Rede hg solucoes empresariais": 1,
},
{
    "mes": "novembro",
    "Coopercarga": 4,
    "Posto Camaleao": 5,
    "Posto Skalla": 1,
    "Rede hg solucoes empresariais": 5,
},
{
    "mes": "dezembro",
    "Coopercarga": 5,
    "Posto Camaleao": 6,
    "Posto Skalla": 7,
    "Rede hg solucoes empresariais": 1,
}

];

// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "mes";
categoryAxis.renderer.grid.template.location = 0;


let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.inside = true;
valueAxis.renderer.labels.template.disabled = true;
valueAxis.min = 0;

// Create series
function createSeries(field: string | undefined, name: string) {
  
  // Set up series
  let series = chart.series.push(new am4charts.ColumnSeries());
  series.name = name;
  series.dataFields.valueY = field;
  series.dataFields.categoryX = "mes";
  series.sequencedInterpolation = true;
  
  // Make it stacked
  series.stacked = true;
  
  // Configure columns
  series.columns.template.width = am4core.percent(60);
  series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";
  
  // Add label
  let labelBullet = series.bullets.push(new am4charts.LabelBullet());
  labelBullet.label.text = "{valueY}";
  labelBullet.locationY = 0.5;
  labelBullet.label.hideOversized = true;
  
  return series;
}

createSeries("Coopercarga", "Coopercarga");
createSeries("Posto Camaleao", "Posto Camaleao");
createSeries("Posto Skalla", "Posto Skalla");
createSeries("Rede hg solucoes empresariais", "Rede hg solucoes empresariais");



// Legend
chart.legend = new am4charts.Legend();

function Stacked(){
    return (
        <div id="chartdiv2">
        </div>
    );
}

export default Stacked;