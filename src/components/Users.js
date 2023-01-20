import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(u => (
            <li key={u.username}>
              <p>Name: {u.username}</p>
              <p>Hometown: {u.hometown}</p>
            </li>
          ))}
          <p>Total users: {this.props.users.length}</p>
        </ul>
      </div>
    );
  };

};

const mapStateToProps = (state) => {
  // debugger;
  return { users: state.users }
};

export default connect(mapStateToProps)(Users);