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

function loadCommands(language) {

  location.hash = '';

  if(!language) {
    language = 'en';
  }

  $.getJSON("languages/"+language+".json", function(data) {

		console.log(data.commands);

		var search = new JsSearch.Search();
		search.addIndex('name');
		search.addDocuments(data.commands);
		var result = search.search('generate');

		console.log(result);

    // var languages = data.application.languages;
    var namespaces = data.commands;
    $.each(namespaces, function(namespace, commands) {
      var templateCommands = document.getElementById('commands_template').innerHTML;
      var commandsRender = Mustache.render(
        templateCommands,
        {
          "namespace": namespace,
          "commands": commands
        }
      );
      $(commandsRender).appendTo('#commands > .namespace-list');
    });
  }).fail(function(jqXHR, textStatus, errorThrown) { loadCommands('en'); });
}

function search(commandName){
	console.log(commandName);
}
