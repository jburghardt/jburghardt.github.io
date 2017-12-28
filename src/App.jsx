import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Blog from './pages/Blog/Blog';
import Header from './components/header/header';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.selectMenu = this.selectMenu.bind(this);
    this.state = {
      activeMenu: null
    }
  }

  selectMenu(n) {
    this.setState({
      activeMenu: n
    })
  }

  renderSelectedMenu() {
    if(this.state.activeMenu === 1) {
      return <Home />
    }
    if(this.state.activeMenu === 2) {
      return <Blog />
    }

  }

  render() {
    return (
      <div>
      <Header selectMenu={this.selectMenu}  />
       {this.renderSelectedMenu()}
      </div>
    )
};
}

ReactDOM.render(<App />, document.getElementById('app'));
