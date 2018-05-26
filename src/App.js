import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
// import Button from "antd/lib/button";
import Sider from './components/Sider/sider';
import IntervalChart from './components/Interval/interval';
import IntervalStack from './components/IntervalStack/interval_stack';
import LineChart from './components/LineChart/line_chart';
import './App.css';

const { Header, Footer, __, Content } = Layout;

class App extends Component {
  render() {

    return (
      <Layout>
        <Header className="App-header" style={{ backgroundColor: '#FFF' }}>Analysis</Header>
        <Row className="App-chart">
          <Col className="App-chart">
            <Sider>Sider</Sider>
          </Col>
          <Col className="App-chart">
            <Row>
            <Col className="App-chart">
              <IntervalChart></IntervalChart>
            </Col>
            <Col className="App-chart">
              <LineChart></LineChart>
            </Col>
            </Row>
            <Row className="App-chart">
              <Col>
                <IntervalStack></IntervalStack>
              </Col>
            </Row>
          </Col>
        </Row>

        <Footer className="App-footer">Powered by Hackers @2018</Footer>
      </Layout>
    );
  }
}

export default App;
