import React from 'react';
import NumberFormat from 'react-number-format';

interface ResultBoxProps {
    number?: number;
    brand?: string;
    beer?: number;
    pizza?: number;
    total?: number;
    price?: number;
    subtotal_beer?: number;
    subtotal_pizza? :number;
}

class ResultBox extends React.Component<ResultBoxProps> {
    static defaultProps: ResultBoxProps = {
        number: 0,
        brand: 'domino',
        beer: 0,
        pizza: 0,
        total: 0,
        price: 0,
        subtotal_beer: 0,
        subtotal_pizza: 0
    }

    render(): React.ReactNode {
        return (
            <div id="result_area">
                <h2 id="result_title">発注量</h2>
                <dl className="summary clearfix">
                    <dt>人数</dt>
                    <dd>{this.props.number}名</dd>
                    <dt>ビール(350ml缶)</dt>
                    <dd>{this.props.beer}本 (約 <NumberFormat value={this.props.subtotal_beer} displayType={'text'} thousandSeparator={true}/>円)</dd>
                    <dt>ピザ(Lサイズ) {this.props.brand}</dt>
                    <dd>{this.props.pizza}枚 (約<NumberFormat value={this.props.subtotal_pizza} displayType={'text'} thousandSeparator={true}/>円)</dd>
                    <dt>合計金額</dt>
                    <dd><NumberFormat value={this.props.total} displayType={'text'} thousandSeparator={true}/>円</dd>
                    <dt>一人あたりの金額</dt>
                    <dd><NumberFormat value={this.props.price} displayType={'text'} thousandSeparator={true}/>円</dd>
                </dl>
                <p id="banner_box">
                    <a href="https://click.linksynergy.com/fs-bin/click?id=NUwEQ5D8uZg&offerid=761398.13&type=4&subid=0"><img alt="ピザハットオンライン" src="https://static.pizzahut.jp/jp/content/234_60.jpg"/></a>
                    <br/>
                    <a href="https://click.linksynergy.com/fs-bin/click?id=NUwEQ5D8uZg&offerid=438529.5&type=4&subid=0"><img alt="なんでも酒やカクヤス(ビール・ワイン等の通販・宅配）" src="http://img.kakuyasu.co.jp/lsjbn/tuhantakuhai_234_60.jpg"/></a>
                </p>
            </div>
        );
    }
}

export default ResultBox;
