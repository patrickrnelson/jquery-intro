console.log('js js js');

$(document).ready(onReady);

function onReady() {
  console.log('jq jq jq');

  const h1 = $('h1');
  console.log('h1', h1);

  const h2 = $('h2');

  h2.css('background-color', 'blue');

  (greenBackground = 'background-color'), 'green';

  h1.addClass('froggy');
}
