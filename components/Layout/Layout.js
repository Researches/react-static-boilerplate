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

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen (open) {
    this.setState({sidebarOpen: open});
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
 
  render() {
    const sidebar = <SidebarContent />;
    const sidebarProps = {
      sidebar: sidebar,
      open: this.state.sidebarOpen,
      docked: this.state.docked,
      sidebarClassName: 'custom-sidebar-class',
      pullRight: this.state.pullRight,
      touchHandleWidth: this.state.touchHandleWidth,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: this.state.transitions,
      onSetOpen: this.onSetSidebarOpen,
    };

    return (
      <Sidebar {...sidebarProps}>
        <div className="mdl-layout mdl-js-layout" ref={node => (this.root = node)}>
          <div className="mdl-layout__inner-container">
            <Header />
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
