import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import ShowFullItem from './components/ShowFullItem';
import Categories from './components/Categories';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
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
          category: 'tables',
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
          category: 'light',
          price: '120',
        },
        {
          id: 5,
          title: 'Kėdė2',
          img: 'kede2.jpg',
          desc: 'Kompaktiška ir patogi Eichholtz kėdė puikiai tiks prie valgomojo stalo. Gražiai išformuota, kreminės spalvos.',
          category: 'chairs',
          price: '999.99',
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />

        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }
  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
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
