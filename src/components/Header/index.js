import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Grid, Button, IconButton, Typography } from 'material-ui';
import Plus from 'mdi-material-ui/Plus';
import styled from '../../utils/styled';
import netlifyIdentity from 'netlify-identity-widget';

const HeaderWrapper = styled(Grid, {
  component: 'header',
  container: true,
  padding: 16,
})(theme => ({
  background: 'white',
  top: 0,
  left: 0,
  width: '100%',
  position: 'fixed',
  height: '4em',
  borderBottom: '1px solid',
  borderBottomColor: '#38ef7d',
}));
const Left = styled(Grid)(theme => ({
  textAlign: 'left',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));
const Middle = styled(Grid)(theme => ({
  textAlign: 'center',
}));
const Right = styled(Grid)(theme => ({
  textAlign: 'right',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));
const Navigation = styled('nav')(theme => ({
  padding: `${theme.spacing.unit * 1.5}px 0`,
}));
const NavButton = styled(Button, { component: Link })(theme => ({
  color: 'error',
}));
const AddButton = styled(Button)(theme => ({
  size: 'small',
}));

class Header extends Component {
  handleLogin = type => () => {
    netlifyIdentity.open(type);
  };
  render() {
    const { data: { site } } = this.props;
    return (
      <HeaderWrapper>
        <Left item xs={12} sm={6}>
          <Navigation>
            <NavButton to="/">Mosaic </NavButton>
          </Navigation>
        </Left>
        <Right item xs={12} sm={6}>
          <Navigation>
            {['/', '/blog'].indexOf(location.pathname) == -1 && (
              <Button onClick={this.handleLogin('login')}>Edit</Button>
            )}
          </Navigation>
        </Right>
      </HeaderWrapper>
    );
  }
}

export default Header;
