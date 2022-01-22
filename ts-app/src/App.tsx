import React from 'react';
import OrderBox from './OrderBox';
import ResultBox from './ResultBox';
import Logic from './Logic';
import './App.css';

interface AppProps {
  number: number;
  brand: string;
}

interface AppStates {
  number: number;
  brand: string;
  beer: number;
  pizza: number;
  subtotal_beer: number;
  subtotal_pizza: number;
  total: number;
  price: number;
}

class App extends React.Component<AppProps, AppStates> {

  static defaultProps: AppProps = {
    number: 10,
    brand: "domino"
  }

  constructor(props: AppProps) {
    super(props);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleBrandChange = this.handleBrandChange.bind(this);

    const result = Logic.calculate(this.props.number, this.props.brand);

    this.state = {
      number: this.props.number,
      brand: this.props.brand,
      beer: result.beer,
      pizza: result.pizza,
      subtotal_beer: result.subtotal_beer,
      subtotal_pizza: result.subtotal_pizza,
      total: result.total,
      price: result.price
    };
  }
  
  handleNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    const number = Number(e.target.value);
    this.setState({number: number});

    const result = Logic.calculate(number, this.state.brand);
    this.setState(result);
  }

  handleBrandChange(e: React.ChangeEvent<HTMLInputElement>) {
    const brand = e.target.value;
    this.setState({brand: brand});

    const result = Logic.calculate(this.state.number, brand);
    this.setState(result);
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
              brand={this.state.brand}
              beer={this.state.beer}
              pizza={this.state.pizza}
              subtotal_beer={this.state.subtotal_beer}
              subtotal_pizza={this.state.subtotal_pizza}
              total={this.state.total}
              price={this.state.price}/>
          </div>
        </div>
      </div>
  );
  }
}

export default App;
