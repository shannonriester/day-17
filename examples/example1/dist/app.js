//manipulating elements that were added to DOM via jq
// var $div = $('<div></div>'); //<-- if you put this in the click function, you click on the first div and then they will be added (one by one) with each click...
//
// //on is the event listener
// $('div').on('click', function(){
//   console.log('hi');
//   //adding it to the DOM
//   $('body').prepend($div); //--this won't work unless it's in the function...
// });
//
//
//
//
// //take the anonymous function and put it back in to the click event...
// //recursive...this function is calling itself from within itself...repeated over and over
// function clickCallBack (){
//   var $div = $('<div></div>');
//   $('body').append($div);
//   div.on('click', clickCallBack);
//   }
//
// });
