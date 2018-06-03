import React from 'react';
import MaterialTitlePanel from './MaterialTitlePanel';
import Link from '../Link';
import PropTypes from 'prop-types';

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
  },
 
};

const SidebarContent = (props) => {
  const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;

  
  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
        <Link className="mdl-navigation__link" to="/" style={styles.sidebarLink}>Home</Link>
        <Link className="mdl-navigation__link" to="/audio" style={styles.sidebarLink}>Audio</Link>
        <Link className="mdl-navigation__link" to="/video" style={styles.sidebarLink}>Video</Link>
        <Link className="mdl-navigation__link" to="/comments" style={styles.sidebarLink}>Comments</Link>
        <Link className="mdl-navigation__link" to="/about" style={styles.sidebarLink}>About</Link>
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default SidebarContent;