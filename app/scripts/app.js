var $ = require('jquery');

// Navigation
$('#portfolio-nav').click(function() {
  $('#alumni').hide();
  $('#portfolio').show();
  $('#portfolio-nav').addClass('active');
  $('#alumni-nav').removeClass('active');
});

$('#alumni-nav').click(function() {
  $('#alumni').show();
  $('#portfolio').hide();
  $('#portfolio-nav').removeClass('active');
  $('#alumni-nav').addClass('active');
});

// Templating
var alumniTemplateScript = $('#alumni-template').html();
var alumniTemplate = Handlebars.compile(alumniTemplateScript);

// Pulling from DB
var alumniRef = new Firebase("https://bdci.firebaseio.com/alumni");
alumniRef.on("value", function(snapshot) {
  var alumni = snapshot.val()
  for (var i = 1; i < alumni.length; i++) {
    console.log('Context: ', alumni[i]);
    var alumHtml = alumniTemplate(snapshot.val()[i]);
    $('#alumni').append(alumHtml);
  };
}, function(errorObject) {
  console.log('Read failure: ', errorObject.code)
});
