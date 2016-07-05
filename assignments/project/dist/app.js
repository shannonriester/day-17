


var resultsArr = [];
var settings = {
  type: 'Get',
  dataType: 'jsonp',
  url: 'https://api.etsy.com/v2/listings/active.js?api_key=9fqgwuh18f048n6kvgg8xvgr&keywords=whiskey&includes=Images,Shop',
  success: function(response){
    // $('body').append($('<div class="objContainer"></div>').text(response));
    resultsArr = response.results;


    resultsArr.forEach(function(itemObj, i){
      var itemContainer = $('<div class"itemContainer"></div>');
      itemContainer.text(itemObj);
      $('#mainContainer').append(itemContainer);
      console.log(itemObj);
    });

    // return data;
  }
};

$.ajax(settings);
