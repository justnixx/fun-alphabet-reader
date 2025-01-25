// Importing the function to create the container and initialize the app
import { createContainerElement, runApp } from './app';

// Importing the styles for the app
import './index.scss';

// Immediately Invoked Function Expression (IIFE) to initialize the app
(() => {
  document.getElementById('app')?.appendChild(createContainerElement());
  runApp();
})();
