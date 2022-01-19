import React from 'react';

class OrderBox extends React.Component {
    render(): React.ReactNode {
        return (
            <div id="form_area">
                <p id="input_box">
                    <input type="text" name="q" id="q"/>人分のビールとピザの発注量を計算する
                </p>
                <p id="brand_box">
                    <input type="radio" name="b" value="domino"/>ドミノ・ピザ
                    <input type="radio" name="b" value="pizzala"/>ピザーラ
                    <input type="radio" name="b" value="pizzahut"/>ピザハット
                </p>
                <p id="submit_box">
                    <input type="button" id="submit_button" value="Calculate"/>
                </p>
            </div>
        );
    }
}

export default OrderBox;