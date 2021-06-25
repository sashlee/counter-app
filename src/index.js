import React from 'react';
import ReactDOM  from "react-dom";
import Counter from "./app";
import 'antd/dist/antd.css';
import Timer from './timer';
import { Layout, Breadcrumb, Button } from "antd";

const {Content} = Layout;
class App extends React.Component{
    constructor (props) {
    super (props)
  

    this.state = {
      mount: true
    }

    this.mount = () => this.setState({mount: true})
    this.unmount = () => this.setState({mount: false})
  }
  render () {
    return (
      <Layout>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <div className="row"> 
              <Button type="primary" style={{ marginRight: 20, width: '15%' }} onClick={this.mount} disabled={this.state.mount} ghost>Mount Counter </Button>
              <Button type="danger"  style={{  width: '15%' }} onClick={this.unmount} disabled={!this.state.mount}>Unmount Counter</Button>
            </div>
            <div style={{ marginTop: 20 }}  >
                {this.state.mount ? <Counter/> : null } 
            </div>
            <div style={{ marginTop: 20 }}  >
                 <Timer/> 
            </div>               
          </div>
        </Content>
    </Layout>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
