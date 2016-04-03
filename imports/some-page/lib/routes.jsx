import React from 'react';
import {mount} from 'react-mounter';
import Layout from '../../core/client/layout/layout.jsx';
import SomePage from '../client/some-page.jsx';

FlowRouter.route('/some-page', {
  action() {
    mount(Layout, {
      content: <SomePage />,
      isAtSomePage: true
    });
  }
});
