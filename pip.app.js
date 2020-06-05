
$(document).ready(function(){

	var weapons= [
	{
		"name: 44_pistols",
		"damage: 48",
		"fire_rate: 6",
		"range:119",
		"accuracy: 66",
		"weight: 4.2",
		"value:99"
},
	{
		"name: 10mm_pistols",
		"damage: 18",
		"fire_rate: 46",
		"range:119",
		"accuracy: 61",
		"weight: 4.2",
		"value:53"
},
	{
		"name: assault_rifle",
		"damage: 30",
		"fire_rate: 40",
		"range:119",
		"accuracy: 72",
		"weight: 3.2",
		"value:144"
}

];


$('.item_list a').on('mouseenter', function(e){
	var current_item = $(e.currentTarget).attr('class');
	console.log(current_item);


});

});