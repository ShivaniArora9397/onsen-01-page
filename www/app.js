//-- below doesn't work ---
// document.addEventListener('init', function(event) {
//   console.log('This is a lifecycle event!', event.target);

//   var page = event.target;
//   if (page.matches('#helloworld-page')) {
//     page.querySelector('ons-toolbar .center').innerHTML = 'My app';
//     page.querySelector('ons-button').onclick = function() {
//       ons.notification.alert('Hello world!');
//     };
//   }
// });

//--- runs after window.load  ---
ons.ready(function(event) {
  console.log('ons ready');
});

//--- this will run before ons.ready ---
window.onload = function(event) {
  console.log('windws on load');
};

function showMessage() {
  ons.notification.alert('Hello world!');
}

//--- below will only work if put in index.html and disabled this app.js ---
// document.getElementById('helloworld').addEventListener('init', function() {
//   console.log('Page Initialized.');
// });
