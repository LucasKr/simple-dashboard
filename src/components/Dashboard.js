import React from 'react';

import { Line, Bar } from 'react-chartjs';


import '../styles/dashboard-area.css';

const dashboardOptions = {
    responsive: true,
    //this doesnt work!
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>"
}

const getRgbIdealColor = (index) => {
    const RED = "255";
    const GREEN = "64";
    const BLUE = "64";
    return `rgba(${RED}, ${GREEN}, ${BLUE}, 0.5)`;
}

const mapPropToDashboardData = (labels, diseases) => {
    return {
        labels: labels,
        datasets : diseases.map((element, index) => {
            console.log(index);
            let result = new Array(labels.length);
            element.data.forEach(i => {
                let indexOfLabel = labels.indexOf(i.year);
                if(indexOfLabel !== -1) {
                    result[indexOfLabel] = i.people;
                }
            });
            return { 
                label: element.name,
                data: result,
                fillColor: getRgbIdealColor(index),
                strokeColor: getRgbIdealColor(index),
                pointColor: getRgbIdealColor(index),
                pointStrokeColor: getRgbIdealColor(index),
                pointHighlightFill: getRgbIdealColor(index),
                pointHighlightStroke: getRgbIdealColor(index)
            };
        })
    };
}

const RenderChartLegend = ( {data} ) => {
    return (
        <div className="DashboardLegends">
            { 
                data.datasets.map( (ds, i) => {
                    return (
                        <div className="DashboardLegend-item" key={i} >
                            <div className="DashboardLegend-color" style={{ backgroundColor: ds.fillColor }}> </div>
                            <div className="DashboardLegend-text"> {ds.label} </div>
                        </div>
                    );
                })
            }
        </div>
    );
}


const RenderDashboardLine = ({labels, diseases}) => {
    const data = mapPropToDashboardData(labels, diseases);
    return (
        <div>
            <Line data={data} options={dashboardOptions} />
            <RenderChartLegend data={data} />
        </div>
    );
}

const RenderDashboardBar = ({labels, diseases}) => {
    const data = mapPropToDashboardData(labels, diseases);
    return (
        <div>
            <Bar data={data} options={dashboardOptions} />
            <RenderChartLegend data={data} />
        </div>
    );
}


const Dashboard = ({ dashboard }) => (
    <div className="DashboardArea">
        <div className="DashboardItem">
            <RenderDashboardLine labels={[2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007]} diseases={dashboard.diseases} />
        </div>
        <div className="DashboardItem">
            <RenderDashboardBar labels={[2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007]} diseases={dashboard.diseases} />
        </div>
    </div>
);

export default Dashboard;