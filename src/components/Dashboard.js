import React from 'react';

import { Line, Bar } from 'react-chartjs';


import '../styles/dashboard-area.css';

const dashboardOptions = {
    responsive: true,
    scaleShowGridLines: true,
    scaleGridLineColor: 'rgba(0,0,0,0.05)',
    scaleGridLineWidth: 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    bezierCurve: true,
    bezierCurveTension: 0.4,
    pointDot: true,
    pointDotRadius: 4,
    pointDotStrokeWidth: 1,
    pointHitDetectionRadius: 20,
    datasetStroke: true,
    datasetStrokeWidth: 2,
    datasetFill: true,
    legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
}

const mapPropToDashboardData = (labels, diseases) => {
    return {
        labels: labels,
        datasets : diseases.map((element, index) => {
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
                fillColor: "rgba(255, 64, "+index+",0.5)",
                strokeColor: "rgba(255, 64,"+index+",0.5)",
                pointColor: "rgba(255, 64,"+index+",0.5)",
                pointStrokeColor: "rgba(255, 64,0,0.5)",
                pointHighlightFill: "rgba(255, 64,"+index+",0.5)",
                pointHighlightStroke: "rgba(255, 64, "+index+",0.5)",
            };
        })
    };
}

const RenderDashboardLine = ({labels, diseases}) => {
    return (
        <Line data={mapPropToDashboardData(labels, diseases)} options={dashboardOptions} />
    );
}

const RenderDashboardBar = ({labels, diseases}) => {
    return (
        <Bar data={mapPropToDashboardData(labels, diseases)} options={dashboardOptions} />
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