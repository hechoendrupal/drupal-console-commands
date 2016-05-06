// import React from 'react';
// import Home from './components/home';

// window.React = React;
// const mountNode = document.getElementById('app');

// React.render(<Home/>, mountNode);

$(function() {
  $.ajaxSetup( { "async": false } );

  var language = window.location.hash.substr(1);

  loadCommands(language);
});
