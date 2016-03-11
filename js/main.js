var $h1above = $('<h1>');
var $h1below = $('<h1>');
var $ulabove = $('<ul>');
var $ulbelow = $('<ul>');

$h1below.html('Below ground veggies');
$('body').append ($h1below)
$('body').append ($ulbelow)

$h1above.html('Above ground veggies');
$('body').append ($h1above)
$('body').append ($ulabove)

$('ul li').each (function() {
  if ($(this).hasClass('above')){
  $ulabove.append($(this));
} else{
  $ulbelow.append($(this));
}
});
