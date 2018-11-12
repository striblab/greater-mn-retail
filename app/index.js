/**
 * Main JS file for project.
 */

// Define globals that are added through the js.globals in
// the config.json file, here, mostly so linting won't get triggered
// and its a good queue of what is available:
// /* global _ */

// Dependencies
import Content from '../templates/_index-content.svelte.html';
import utils from './shared/utils.js';
import cityRetail from '../assets/data/greater-mn-retail.json';

// Mark page with note about development or staging
utils.environmentNoting();

// Auto enable Pym for embedding.  This will enable a Pym Child if
// the url contains ?pym=true
let pymChild = utils.autoEnablePym();

// Set up
const app = new Content({
  target: document.querySelector('.article-lcd-body-content'),
  data: {
    cities: cityRetail,
    pymChild,
    embedded: utils.isEmbedded()
  }
});

window.___app = app;
