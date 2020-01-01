import React, { Fragment, Suspense, lazy } from 'react';
import './App.css';
import Iframe from './Iframe';
const ModuleLazyLoaded = lazy(() => import('@sinouhe/module/App'));



class App extends React.Component {
  render() {
    return(
      <Fragment>
        <div>
          load by iframe
        </div>
        <Iframe/>
        <div>
          load by lazy load
        </div>
        <Suspense fallback={<div>Chargement...</div>}>
          <ModuleLazyLoaded />
        </Suspense>
      </Fragment>
    );
  }
}


export default App;