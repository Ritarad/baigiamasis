import React from 'react';
class Users extends React.Component {
  users = [
    {
      id: 1,
      firstmane: 'Jon',
      lastmane: 'Marley',
      age: 49,
      isHappy: true,
    },
    { d: 2, firstmane: 'Elle', lastmane: 'Hops', age: 22, isHappy: false },
  ];
  render() {
    if (this.users.length > 0)
      return (
        <div>
          {this.users.map((el) => (
            <div className="user" key={el.id}>
              <h3>
                {el.lastmane} {el.firstmane}
              </h3>
              <p>{el.age}</p>
              <b>{el.isHappy ? 'laimingas' : 'nelaimingas'}</b>
            </div>
          ))}
        </div>
      );
    else
      return (
        <div className='="user'>
          <h3> Domenų nėra</h3>
        </div>
      );
  }
}

export default Users;
