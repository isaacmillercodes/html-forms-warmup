$(document).ready(function() {
  console.log('test'); // sanity check
  $('#signup-form').on('submit', function(event) {
    event.preventDefault();
    console.log('this is working');
    var formFields = $(this).serialize();
    console.log(formFields);
  });
});
