/*
$(function(){
	$('.page-title').click(function(){
		alert('se ha agregado el evento de clic desde hook');
	});
});*/

$(document).ready(function(){
    $('[class^="page-title"]').click(function(){
        alert('se ha agregado el evento de clic desde hook');
    });
});