import React from 'react';
import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
import UnderstandingBreakpoints from './grid/UnderstandingBreakpoints.js';

import FillingSpace from './grid/FillingSpace.js';
function App() {
  return (
    <>

    <h1>Breakpoints</h1>
    <ul>
    <li>xs >= 0px</li>
    <li>sm >= 600px</li>
    <li>md >= 960px</li>
    <li>lg >= 1280px</li>
    <li>xl >= 1920px</li>
    </ul>
    <p>Setting to 'auto' helps during initial layout and development</p>

    <UnderstandingBreakpoints />

    <h1>Filling Space</h1>

    <FillingSpace />
    <h2>flex-start</h2>
    <FillingSpace justify='flex-start'/>
    <h2>flex-end</h2>
    <FillingSpace justify='flex-end'/>
    <h2>center</h2>
    <FillingSpace justify='center'/>
    <h2>space-between</h2>
    <FillingSpace justify='space-between'/>
    <h2>space-around</h2>
    <FillingSpace justify='space-around'/>

    </>

  );
}

export default App;
