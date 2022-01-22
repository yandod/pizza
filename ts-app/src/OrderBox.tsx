import React from 'react';

interface OrderBoxProps {
    q: number;
    b: string;
    onNumberChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBrandChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

class OrderBox extends React.Component<OrderBoxProps> {
    static defaultProps: OrderBoxProps = {
        q: 10,
        b: 'domino',
    }

    constructor(props: OrderBoxProps) {
        super(props);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleBrandChange = this.handleBrandChange.bind(this);
    }

    handleNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.props.onNumberChange?.(e);
    }

    handleBrandChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.props.onBrandChange?.(e);
    }

    render(): React.ReactNode {
        return (
            <div id="form_area">
                <p id="input_box">
                    <input type="text" name="q" id="q" value={this.props.q} onChange={this.handleNumberChange}/>人分のビールとピザの発注量を計算する
                </p>
                <p id="brand_box">
                    <input type="radio" name="b" id="domino" value="domino" checked={this.props.b === "domino"} onChange={this.handleBrandChange}/>
                    <label htmlFor="domino">ドミノ・ピザ</label>
                    <input type="radio" name="b" id='pizzala' value="pizzala" checked={this.props.b === "pizzala"} onChange={this.handleBrandChange}/>
                    <label htmlFor='pizzala'>ピザーラ</label>
                    <input type="radio" name="b" id='pizzahut' value="pizzahut" checked={this.props.b === "pizzahut"} onChange={this.handleBrandChange}/>
                    <label htmlFor='pizzahut'>ピザハット</label>
                </p>
                <p id="submit_box">
                    <input type="button" id="submit_button" value="Calculate"/>
                </p>
            </div>
        );
    }
}

export default OrderBox;