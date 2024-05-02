import React, { Component } from 'react';

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'Viskas',
        },
        {
          key: 'chairs',
          name: 'Kėdės',
        },
        {
          key: 'tables',
          name: 'Stalai',
        },
        {
          key: 'sofa',
          name: 'Sofos-lovos',
        },
        {
          key: 'light',
          name: 'Lempos',
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
