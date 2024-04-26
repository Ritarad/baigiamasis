import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}
export default App;
