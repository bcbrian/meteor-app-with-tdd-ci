import React from 'react';
import {mount} from 'react-mounter';
import Layout from '../client/layout/layout.jsx';
import Home from '../client/home/home.jsx';

FlowRouter.route("/", {
  action() {
    mount(Layout, {
        content: (<Home/>),
        isAtHome: true
    });
  }
});
