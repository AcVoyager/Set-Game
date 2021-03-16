import React from 'react';
import PageHeaderNav from './PageHeaderNav';
import PageMain from './PageMain';
import PageFooter from './PageFooter';

const App = () =>

  <div className="d-flex flex-column div-app">

    <PageHeaderNav />

    <a className="visually-hidden-focusable" href="#content">Skip to main content</a>

    <PageMain />

    <PageFooter />

  </div>

export default App;