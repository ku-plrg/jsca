import is_number from 'is-number';

document.addEventListener('DOMContentLoaded', () => {
  $('div#root').html(
    `<h1>jquery works well</h1><h2>is 4 number? ${is_number(4)}</h2>`
  );
});
