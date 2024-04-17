import { fireEvent } from '@testing-library/react';
import React from 'react';
class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: '',
      firstname: '',
      bio: '',
      age: 1,
      isHappy: false,
    };
  }
  render() {
    return (
      <form>
        <input
          placeholder="Pavardė"
          onChange={(e) => this.setState({ lastname: e.target.value })}
        />
        <input
          placeholder="Vardas"
          onChange={(e) => this.setState({ firstname: e.target.value })}
        />
        <input
          placeholder="Amžius"
          onChange={(e) => this.setState({ bio: e.target.value })}
        />
        <textarea
          placeholder="Info"
          onChange={(e) => this.setState({ age: e.target.value })}
        />
        <label htmlFor="isHappy">Laimingas?</label>
        <input
          type="checkbox"
          id="isHappy"
          onChange={(e) => this.setState({ isHappy: e.target.chacked })}
        />
        <button
          type="button"
          onClick={() =>
            this.props.onAdd({
              lastname: this.state.lastname,
              firstname: this.state.firstname,
              bio: this.state.bio,
              age: this.state.age,
              isHappy: this.state.isHappy,
            })
          }
        >
          Pridėti
        </button>
      </form>
    );
  }
}

export default AddUser;
