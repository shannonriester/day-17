console.log('hi');

var settings = {
  //what kind of request do we want to make...
  type: 'Get',

  //from where do we get it...
  url: 'https://api.github.com/users/nicerhugs',

  //add timging callback function (called success) so everything comes in at the right time
  success: function(response) {
    console.log(response); //logs only the data that came back from the server...
    $('body').append($('<h1></h1>').text(response.name));
  } //want to get the data of 'responseJSON'
};

//make ajax request to server
// console.log($.ajax(settings));
$.ajax(settings);
  //this is the get and has a return value: {readyState:1}
    //it grabbed this object and then you can't access the rest of the data...only readyState:1
    //asynchronous: our page takes time to get info from the internet...
    //look at "Network" tab in chrom editor...
      //the data comes back after the jq code ran...so it doesn't know where the data came from

//if console.log($.ajax(settings)), you'll notice "responseJSON" as the object we need
  // $('<h1></h1>').text(data.responseJSON.name);

//$.ajax(settings);
  //we're calling the ajax method on the jQ object, settings
  //see api.jquery.com/query.ajax/#jQuery-ajax-settings
