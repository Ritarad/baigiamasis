import React from 'react';
import Header from './components/Header';
import Users from './components/Users';
import AddUser from './components/AddUser';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstmane: 'Jon',
          lastmane: 'Marley',
          bio: 'lorem ipsum dolor sit amet consectetur',
          age: 49,
          isHappy: true,
        },
        {
          d: 2,
          firstmane: 'Elle',
          lastmane: 'Hops',
          bio: 'lorem ipsum dolor sit amet consectetur',
          age: 22,
          isHappy: false,
        },
      ],
    };
    this.addUser = this.addUser.bind(this);
  }
  render() {
    return (
      <div>
        <Header title="Duomenu sarasas" />
        <main>
          <Users users={this.state.users} />
        </main>
        <aside>
          <AddUser onAdd={this.addUser} />
        </aside>
      </div>
    );
  }
  addUser(user) {
    const id = this.state.users.length + 1;
    this.setState({ users: [...this.state.users, { id, ...user }] });
  }
}

export default App;
