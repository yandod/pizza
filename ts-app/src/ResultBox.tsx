import React from 'react';
import NumberFormat from 'react-number-format';

class ResultBox extends React.Component {
    render(): React.ReactNode {
        var number = 10;
        var beer = 8;
        var pizza = 2;
        var total = 20000;
        var price = 1000;
        var brand = 'domino';
        var subtotal_beer = 3000;
        var subtotal_pizza = 17000;

        return (
            <div id="result_area">
                <h2 id="result_title">発注量</h2>
                <dl className="summary clearfix">
                    <dt>人数</dt>
                    <dd>{number}名</dd>
                    <dt>ビール(350ml缶)</dt>
                    <dd>{beer}本 (約 <NumberFormat value={subtotal_beer} displayType={'text'} thousandSeparator={true}/>円)</dd>
                    <dt>ピザ(Lサイズ) {brand}</dt>
                    <dd>{pizza}枚 (約<NumberFormat value={subtotal_pizza} displayType={'text'} thousandSeparator={true}/>円)</dd>
                    <dt>合計金額</dt>
                    <dd><NumberFormat value={total} displayType={'text'} thousandSeparator={true}/>円</dd>
                    <dt>一人あたりの金額</dt>
                    <dd><NumberFormat value={price} displayType={'text'} thousandSeparator={true}/>円</dd>
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