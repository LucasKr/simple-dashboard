import React, { Component } from 'react';

import { Line, Bar } from 'react-chartjs';
import { connect } from 'react-redux';
import { Route, withRouter, Link } from "react-router-dom";

import { actions } from '../state/dashboard';

import '../styles/dashboard.css';

const dashboardOptions = {
    responsive: true,
    //this doesnt work!
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>"
}

const getRgbIdealColor = ["rgba(255, 64, 64, 0.5)","rgba(255, 200, 100, 0.5)","rgba(102, 153, 0, 0.5)","rgba(51, 153, 255, 0.5)","rgba(255, 64, 64, 0.5)"];

class Dashboard extends Component {

  mapPropToDashboardData = (labels, diseases) => {
    return {
      labels: labels,
      datasets : diseases.map((element, index) => {
        let result = new Array(labels.length).map(element => 1);
        element.data.forEach(i => {
          let indexOfLabel = labels.indexOf(i.year);
          if(indexOfLabel !== -1) {
            result[indexOfLabel] = i.people;
          }
        });
        return { 
          label: element.name,
          data: result,
          fillColor: element.backgroundColor,
          strokeColor: element.backgroundColor,
          pointColor: element.backgroundColor,
          pointStrokeColor: element.backgroundColor,
          pointHighlightFill: element.backgroundColor,
          pointHighlightStroke: element.backgroundColor
        };
      })
    };
  }
  
  renderChartLegend = (data) => {
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
  
  renderDashboardLine = (labels, diseases) => {
    const data = this.mapPropToDashboardData(labels, diseases);
    return (
      <div>
        <Line data={data} options={dashboardOptions} />
        {this.renderChartLegend(data) }
      </div>
    );
  }
  
  renderDashboardBar = (labels, diseases) => {
    const data = this.mapPropToDashboardData(labels, diseases);
    return (
      <div>
        <Bar data={data} options={dashboardOptions} />
        {this.renderChartLegend(data) }
      </div>
    );
  }

  _onChangeInputFieldHandler = (diseaseId, year, people) => { 
    this.props.changeValuesFromDiseaseSelected(diseaseId, year, people);
  }

  renderDiseaseForm = ({ match }) => {
    const disease = this.props.dashboard.diseaseSelected;
    if(!disease.id)
      return (<div></div>)

    return ( 
      <div className="DashboardInput-form">
        <h1 className="DashboardInput-formtitle">{disease.name}</h1>
        <div className="DashboardInput-formcontent">
          {
            disease.data.map(d =>
              (
                <div className="DashboardInput-formYearBox" key={d.year}>
                  {/*<button className="delete" />*/}
                  <label>{d.year}</label>
                  <div className="field DashboardInput-field">
                    <p className="help is-info">Number of people</p>
                    <div className="control has-icons-left">
                      <input 
                        className="input" 
                        type="number" 
                        placeholder="Number of people" 
                        onChange={(e) => this._onChangeInputFieldHandler(disease.id, d.year, e.target.value) } 
                        value={d.people} />
                      <span className="icon is-small is-left">
                        <i className="fa fa-male fa-2x"></i>
                      </span>
                    </div>
                  </div>
                </div>
              )
            )
          }
        </div>
        <div className="DashboardInput-formActions" onClick={() => this.props.saveDiseaseSelected()}>
          Actions
        </div>
      </div>
    );
  }

  _handlerClickDisease = (diseaseId) => {
    this.props.setDiseaseToChange(diseaseId);
  }

  render() {
    let { diseases } = this.props.dashboard;
    const { match } = this.props;
    diseases = diseases.map((disease, i) => ({...disease, backgroundColor: getRgbIdealColor[i] }));
    return (<div className="Dashboard">
      <div className="DashboardArea">
        <div className="DashboardItem">
          {this.renderDashboardLine([2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007], diseases) }
        </div>
        <div className="DashboardItem">
          {this.renderDashboardBar([2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007], diseases) }
        </div>
      </div>
      <div className="DashboardinputData">
        <div className="DashboardInput-menu">
        {
          diseases.map(disease =>
            <Link key={disease.name}
              className="DiseaseCard has-text-grey-dark"
              to={`${match.url}/disease/${disease.id}`}
              onClick={() => this._handlerClickDisease(disease.id)}
              style={{ backgroundColor: disease.backgroundColor }}
            >
              {disease.name}
            </Link>
          )
        }
        </div>
        {<Route path={`${match.url}/disease/:id`} component={this.renderDiseaseForm} />}
      </div>
    </div>);
  }
}

function mapStateToProps(state) {
    return {
        dashboard: state.dashboard,
        app: state.app
    }
}

const { setDiseaseToChange, changeValuesFromDiseaseSelected, saveDiseaseSelected } = actions;

export default withRouter(connect(mapStateToProps, { setDiseaseToChange, changeValuesFromDiseaseSelected, saveDiseaseSelected })(Dashboard));