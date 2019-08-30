import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Link from '@material-ui/core/Link';

const styles = {
    root: {
      flexGrow: 1,
      paddingTop: '20px'
    },
    
    title: {
      flexGrow: 1,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
    },
    drawerInner: {
      padding: '20px'
    }
};


class Navigation extends Component {
  constructor(props){
    super(props);

    this.state = {
      openDrawer: false
    }
  }

  handleDrawerOpen = () => {
    this.setState({ drawerIsOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ drawerIsOpen: false });
  };

  render(){
    return (
      <div style={styles.root}>
        <AppBar position="fixed" color="inherit" >
          <Toolbar>
            <IconButton onClick={()=> this.handleDrawerOpen()} edge="start" style={styles.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
            <Typography variant="h4" color="primary" style={styles.title}>
              {this.props.content.heading}
            </Typography>
            <LanguageSwitcher {...this.props} />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="persistent"
          open={this.state.drawerIsOpen}
        >
          <div style={styles.drawerHeader}>
            <IconButton onClick={() => this.handleDrawerClose()}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <div style={styles.drawerInner}>
            <p>
              <Link href="#inspiration" onClick={() => this.handleDrawerClose()}>
                Inspiration
              </Link>
            </p>
            <p>
              <Link href="#gallery" onClick={() => this.handleDrawerClose()}>
                Gallery
              </Link>
            </p>
            <p>
              <Link href="#episodes" onClick={() => this.handleDrawerClose()}>
                Episodes
              </Link>
            </p>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Navigation;