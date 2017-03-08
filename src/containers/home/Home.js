import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import PieChart from 'react-simple-pie-chart';

import "./home.css";

import {updateChart} from '../../actions/graph';

class Home extends Component {
  constructor(props) {
    super(props);

    this.onUpdateChart = this.onUpdateChart.bind(this);
  }

  onUpdateChart(key) {
    const {dispatch} = this.props;
    dispatch(updateChart(key));
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-5">Redux & React - update the graph</h1>

            <div className="pie-chart">
              <PieChart
                slices={[
                  {
                    color: 'red',
                    value: this.props.red,
                  },
                  {
                    color: 'blue',
                    value: this.props.blue,
                  },
                  {
                    color: 'yellow',
                    value: this.props.yellow,
                  }
                ]}
              />
            </div>

            <div className="action-buttons">
              <button type="button" onClick={this.onUpdateChart.bind(this, 'red')} className="btn btn-default btn-red">+</button>
              <button type="button" onClick={this.onUpdateChart.bind(this, 'blue')} className="btn btn-default btn-blue">+</button>
              <button type="button" onClick={this.onUpdateChart.bind(this, 'yellow')} className="btn btn-default btn-yellow">+</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  red: PropTypes.number.isRequired,
  blue: PropTypes.number.isRequired,
  yellow: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const {graph} = state;
  return graph;
}

export default connect(mapStateToProps)(Home);