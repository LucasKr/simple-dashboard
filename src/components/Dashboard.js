import React from 'react';

const mapPropToDashboardData = (diseases) => {
    let dashboardData = {
        labels: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007],
        series: []
    }
    dashboardData.series = diseases.map(element => {
        let result = new Array(dashboardData.labels.length);
        element.data.forEach(i => {
            let indexOfLabel = dashboardData.labels.indexOf(i.year);
            if(indexOfLabel !== -1) {
                result[indexOfLabel] = i.people;
            }
        });
        return { 
            name: element.name,
            data: result
        };
    });
    return <h1>Hello World</h1>
}

const Dashboard = ({ dashboard }) => (
    <div>
    { mapPropToDashboardData(dashboard.diseases) }
    </div>
);

export default Dashboard;