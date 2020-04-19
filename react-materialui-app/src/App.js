import React from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

import UnderstandingBreakpoints from './grid/UnderstandingBreakpoints.js';
import FillingSpace from './grid/FillingSpace.js';
import AbstractingContainersAndItems from './grid/AbstractingContainersAndItems.js';

function App() {
  return (
    <>

    <h2>Breakpoints</h2>
    <ul>
    <li>xs >= 0px</li>
    <li>sm >= 600px</li>
    <li>md >= 960px</li>
    <li>lg >= 1280px</li>
    <li>xl >= 1920px</li>
    </ul>
    <p>Setting to 'auto' helps during initial layout and development</p>

    <UnderstandingBreakpoints />

    <h2>Filling Space</h2>

    <FillingSpace />
    <h3>flex-start</h3>
    <FillingSpace justify='flex-start'/>
    <h3>flex-end</h3>
    <FillingSpace justify='flex-end'/>
    <h3>center</h3>
    <FillingSpace justify='center'/>
    <h3>space-between</h3>
    <FillingSpace justify='space-between'/>
    <h3>space-around</h3>
    <FillingSpace justify='space-around'/>

    <h2>Abstracting Containers and Items</h2>
    <AbstractingContainersAndItems />

    </>

  );
}

export default App;
