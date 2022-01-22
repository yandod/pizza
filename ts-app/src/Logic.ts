interface PizzaResult {
    beer: number;
    pizza: number;
    total: number;
    price: number;
    subtotal_beer: number;
    subtotal_pizza :number;
}

class Logic {
  static calculate(peopleCount: number, brandName: string) {
    let base_price = 2550;
    let base_person = 3.06;

    switch (brandName) {
      case 'pizzala':
        base_price = 2991;
        base_person = 3.65;
        break;
      case 'pizzahut':
        base_price = 2500;
        base_person = 2.70;
        break;
      default:
        break;
    }

    const beer = Math.ceil(peopleCount * 1.5);
    const pizza = Math.ceil(peopleCount / base_person);
    const subtotal_beer = beer * 200;
    const subtotal_pizza = Math.ceil(pizza * base_price * 1.08);
    const total = subtotal_beer + subtotal_pizza;
    const price = total / peopleCount;

    const result: PizzaResult = {
      beer: beer,
      pizza: pizza,
      subtotal_beer: subtotal_beer,
      subtotal_pizza: subtotal_pizza,
      total: total,
      price: price
    }
    return result;
  }
}

export default Logic;