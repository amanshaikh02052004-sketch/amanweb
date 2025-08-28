document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('cta')?.addEventListener('click', () => {
    alert('You clicked the button! 🎉');
  });

  document.querySelector('form')?.addEventListener('submit', () => {
    alert('Thanks! (Demo only, not actually sending.)');
  });
});
