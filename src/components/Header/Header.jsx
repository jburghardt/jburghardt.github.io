import React from 'react';

export default class Header extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      c_nav1: 'nav_1',
      c_nav2: 'nav_2',
      c_nav3: 'nav_4',
    }
  }

  toggleActive(n){
    this.setState({
      c_nav1: n === 1 ? 'nav_1 active' : 'nav_1',
      c_nav2: n === 2 ? 'nav_2 active' : 'nav_2',
      c_nav3: n === 3 ? 'nav_3 active' : 'nav_3',
    })
  }

  render() {
    return (
      <div className="header">
        <nav className="header__header_navbar">
          <a className={this.state.c_nav1} onClick={() => this.toggleActive(1)}>Home</a>
          <a className={this.state.c_nav2} onClick={() => this.toggleActive(2)}>Blog</a>
          <a className={this.state.c_nav3} onClick={() => this.toggleActive(3)}>About</a>
        </nav>
      </div>)
  }
}
