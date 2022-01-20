import React from 'react';
import OrderBox from './OrderBox';
import ResultBox from './ResultBox';
import './App.css';

function App() {
  return (
    <div id="container">
      <div id="header" className="clearfix">
          <div className="inner_container">
              <h1 id="header_logo"><a href="/">HOW MANY BEER AND PIZZA?</a></h1>
              <h3 id="header_about">人数を入れるとビールとピザの発注量を算出してくれるウェブサービスです。</h3>
          </div>
      </div>
      <div id="content" className="clearfix">
        <div className="inner_container">
          <OrderBox/>
          <ResultBox/>
        </div>
      </div>
    </div>
  );
}

export default App;
