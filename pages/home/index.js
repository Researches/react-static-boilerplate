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
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';


class HomePage extends React.Component {

  

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };
  

  componentDidMount() {
    document.title = title;
  }

  
  render() {
    
    return (
      <Layout className={s.content}>
        <p>&nbsp;</p>
        <p><font color="#FFFFFF"><font face="Trebuchet MS, Helvetica, sans-serif"><font size="6">about tour</font></font></font></p>
        <p><font color="#FFFFFF"><font face="Trebuchet MS, Helvetica, sans-serif"><font size="4">information about tour and the artist</font></font></font></p>
        <p>&nbsp;</p>
        <p><font color="#FFFFFF"><font face="Trebuchet MS, Helvetica, sans-serif"><font size="3">City</font></font></font><font color="#FFFFFF"><font face="Trebuchet MS, Helvetica, sans-serif"><font size="3">      Date</font></font></font></p>
      </Layout>
    );
  }

}

let imgUrl = 'images/back.jpg'
    let styles = {
        root: {
            backgroundImage: 'url(' + imgUrl + ')',
            backgroundSize: 'cover',
            overflow: 'hidden',
        }
      }
export default HomePage;
