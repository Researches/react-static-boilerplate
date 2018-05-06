/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import Header from './Header';
import Footer from '../Footer';
import s from './Layout.css';
import Sidebar from 'react-sidebar';
import SidebarContent from './SidebarContent';
import MaterialTitlePanel from './MaterialTitlePanel';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    }

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.handleSidebar = this.handleSidebar.bind(this);
  }

  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }
  
  handleSidebar(sidebarOpen) {
    this.setState({ sidebarOpen });
  }

  toggleSidebar(e) {
    e.preventDefault();
    this.handleSidebar(!this.state.sidebarOpen);
  }
 
  render() {
    const sidebar = <SidebarContent />;

    const sidebarProps = {
      sidebar: sidebar,
      open: this.state.sidebarOpen,
      docked: this.state.docked,
      sidebarClassName: cx(s.sidebar),
      overlayClassName: cx(s.overlay),
      pullRight: this.state.pullRight,
      touchHandleWidth: this.state.touchHandleWidth,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: this.state.transitions,
      onSetOpen: this.handleSidebar
    };

    return (
      <Sidebar {...sidebarProps}>
        <div className="mdl-layout mdl-js-layout" ref={node => (this.root = node)}>
          <div className="mdl-layout__inner-container">
            <Header menuButtonClick={this.toggleSidebar} />
            <main className={cx(s.wrapper, "mdl-layout__content")}>
              <div {...this.props} className={cx(s.content, this.props.className)} />
              <Footer />
            </main>
          </div>
        </div>  
      </Sidebar>
    );
  }
}

export default Layout;
