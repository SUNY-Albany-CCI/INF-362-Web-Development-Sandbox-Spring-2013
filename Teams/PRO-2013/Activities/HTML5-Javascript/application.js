/****
* This code is udopted from The Pragmatic Bookshelf. http://www.pragmaticprogrammer.com/titles/bhh5
****/

$(function() {
  var contacts = $('#images img');
  contacts.attr('draggable', 'true');
  
  contacts.bind('dragstart', function(event) {
      var data = event.originalEvent.dataTransfer; 
      var src = $(this).attr("data-large");
      data.setData("Text", src); 
      return true;
  });
  

  
  var target = $('#preview');

  target.bind('drop', function(event) {
    var data = event.originalEvent.dataTransfer;
    var src = ( data.getData('Text') ); 
    
    var img = $("<img></img>").attr("src", src);
    $(this).html(img);
    if (event.preventDefault) event.preventDefault();
    return(false);
  });

 
  target.bind('dragover', function(event) {    
    if (event.preventDefault) event.preventDefault();
    return false;
  });

   target.bind('dragenter', function(event) {
     $(this).addClass('hover');
     if (event.preventDefault) event.preventDefault();
     return false;
   });

   target.bind('dragleave', function(event) {
     $(this).removeClass('hover');
     if (event.preventDefault) event.preventDefault();
     return false;  
  });


   contacts.bind('dragend', function(event) {
     if (event.preventDefault) event.preventDefault();
     return false;
   });

});