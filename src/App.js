import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Kėdė',
          img: 'kėdė.jpg',
          desc: 'Prabangi valgomojo kėdė, plieninė, moderni, smėlio spalvos.',
          category: 'chairs',
          price: '185.99',
        },
        {
          id: 2,
          title: 'Stalas',
          img: 'stalas.jpg',
          desc: 'Ąžuolo masyvo stalviršis sujungtas su išskirtinio dizaino itin tvirta plieno konstrukcija.',
          price: '255.99',
        },
        {
          id: 3,
          title: 'Sofa-lova',
          img: 'kampas.jpg',
          desc: 'Elegantiškas minkštas kampas Poeme suteiks novatoriškumo Jūsų namams!',
          category: 'sofa',
          price: '1850',
        },
        {
          id: 4,
          title: 'Lempa',
          img: 'Lempa2.jpg',
          desc: 'Lempa naktinis šviestuvas, pastatoma.',
          category: 'sofa',
          price: '120',
        },
        {
          id: 1,
          title: 'Kėdė',
          img: 'kede2.jpg',
          desc: 'Kompaktiška ir patogi Eichholtz kėdė puikiai tiks prie valgomojo stalo. Gražiai išformuota, kreminės spalvos.',
          category: 'chairs',
          price: '999.99',
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}
export default App;
