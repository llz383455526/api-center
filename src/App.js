import React, {Component} from 'react';
import {Input, Button} from 'antd';
import History from './history/History.js'
import apiCenter from './apiCenter'
import './App.css';

const Search = Input.Search;

class App extends Component {
  constructor(props) {
    super(props);
    this.state={searchResult:[]}
  }
  render() {
    return (
      <div className="App">
        <Search
          placeholder="API名称/开发者姓名(pingyin)"
          className="search"
          onSearch={this.searchApi}
          size="large"
          type="primary"/>
        <History className="history" onHistorySelect={this.searchApi}></History>
        <ul>
        {
          this.state.searchResult.map((apiInfo)=>{
            return <li>{apiInfo.path}</li>
          })
        }
        </ul>

      </div>
    );
  }

  searchApi = (key) => {
    this.setState({
      searchResult: apiCenter.searchApi(key.toLowerCase())
    })
  }
}

export default App;
