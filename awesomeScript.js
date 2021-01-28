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

  const h1Text = h1.text();

  const loudText = h1Text.toUpperCase();

  $('#submit-button').on('click', addHarmonica);
  // same as...
  //$(document).on('click', '#submit-button', addHarmonica)

  // the initial thing you target has to be a parent
  $(document).on('click', '.delete-button', deleteMe);
  // could also be $('#harmonicaList').on('click', '.delete-button', deleteMe);
}

function deleteMe() {
  console.log('Delete!!');
  // This will remove all items that have this class
  // $('.harmonica-item').remove();

  // $(this) targets the button
  let thisThing = $(this);
  thisThing.parent().remove();
  //thisThing.remove() only removes the button
  //thisThing.parent() is the <li>
}

// event will give us the ability to call the function event.preventDefault()
function addHarmonica(event) {
  event.preventDefault();
  // what we do when we submit
  console.log('clicked the button!');

  // grab data from from
  let brand = $('#brand').val();
  console.log(brand);

  // push form data to the DOM
  $('#harmonicaList').append(`
  <li class="harmonica-item">
    Brand is: ${brand}
    <button class="delete-button">Delete</button>
  </li>`);
}
