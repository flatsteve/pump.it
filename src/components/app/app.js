import React, { Component } from 'react';
import classNames from 'classnames';
import Menu from '../menu/menu';
import NavBar from '../nav/nav_bar/nav_bar';
import Footer from '../footer/footer';
import './app.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false
    };
  };

  componentWillUpdate() {
    this.closeMenu();
  }

  closeMenu = () => {
    if (this.state.menuOpen) {
      this.setState({
        menuOpen: false
      });
    }
  }

  toggleMenu = (isBodyClick) => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  render() {
    let appClass = classNames({
      'app': true,
      'app--menu-open': this.state.menuOpen
    });

    return (
      <div className="app__container">
        <Menu open={this.state.menuOpen} toggleMenu={this.toggleMenu} />

        <div className={appClass}
          onClick={this.closeMenu}>
          <NavBar toggleMenu={this.toggleMenu} />

          <div className="app__content">
            {React.cloneElement(this.props.children, this.props)}
          </div>

          <Footer />
        </div>
      </div>
    );
  };
};

export default App;
