import React from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';

class AudioPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1>Album name</h1>
        <p className={s.text}>infomation about last album</p>
        <br/><br/><br/> 
        <div className={s.table}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div> 
        <br/><br/><br/>       
      </Layout>
    );
  }

}

export default AudioPage;