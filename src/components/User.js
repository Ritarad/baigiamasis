import React from 'react';
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5';

class User extends React.Component {
  user = this.props.user;
  render() {
    return (
      <div className="user">
        <IoCloseCircleSharp className="delete-icon" />
        <IoHammerSharp className="edit-icon" />
        <h3>
          {this.user.lastmane} {this.user.firstmane}
        </h3>
        <p>{this.user.bio}</p>
        <p>{this.user.age}</p>
        <b>{this.user.isHappy ? 'laimingas' : 'nelaimingas'}</b>
      </div>
    );
  }
}

export default User;
