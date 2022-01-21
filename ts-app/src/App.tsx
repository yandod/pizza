import React from 'react';
import OrderBox from './OrderBox';
import ResultBox from './ResultBox';
import './App.css';

interface AppProps {
  number: number;
  brand: string;
}

class App extends React.Component<AppProps, AppProps> {

  static defaultProps: AppProps = {
    number: 10,
    brand: "domino"
  }

  constructor(props: AppProps) {
    super(props);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleBrandChange = this.handleBrandChange.bind(this);
    this.state = {number: this.props.number, brand: this.props.brand};
  }
  
  handleNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    var number = Number(e.target.value);
    this.setState({number: number});
  }

  handleBrandChange(e: React.ChangeEvent<HTMLInputElement>) {
    var brand = e.target.value;
    this.setState({brand: brand});
  }

  render(): React.ReactNode {
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
            <OrderBox
              q={this.state.number}
              b={this.state.brand}
              onNumberChange={this.handleNumberChange}
              onBrandChange={this.handleBrandChange} />
            <ResultBox
              number={this.state.number}
              brand={this.state.brand} />
          </div>
        </div>
      </div>
  );
  }
}

export default App;
