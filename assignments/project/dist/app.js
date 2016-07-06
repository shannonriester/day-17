var resultsArr = [];
var settings = {
    type: 'Get',
    dataType: 'jsonp',
    url: 'https://api.etsy.com/v2/listings/active.js?api_key=9fqgwuh18f048n6kvgg8xvgr&keywords=whiskey&includes=Images,Shop',
    success: function(response) {
        resultsArr = response.results;
        resultsArr.forEach(function(itemObj) {
            var $itemContainerLink = $('<div class="divContainer" href="#"><main><a href="#" class="aImageIcons"><i class="fa fa-heart icon heartIcon" aria-hidden="true"></i><i class="fa fa-bars icon menuIcon" aria-hidden="true"></i><img src="#" /></a></main><section class="footer"><a href="#" class="aTitle"></a><section class="lowerFooterSection"><a href="#" class="aShopName"></a><a href="#" class="aPrice"></a></section></section></div>');

            $itemContainerLink.children('main').children('a').attr('href', itemObj.url);
            $itemContainerLink.children('main').children('a').children('img').attr('src', itemObj.Images[0].url_170x135);
            $itemContainerLink.children('.footer').children('.aTitle').attr('href', itemObj.url).text(itemObj.title);
            $itemContainerLink.children('.footer').children('.lowerFooterSection').children('.aShopName').attr('href', itemObj.url).text(itemObj.Shop.shop_name);
            $itemContainerLink.children('.footer').children('.lowerFooterSection').children('.aPrice').attr('href', itemObj.url).text('$' + itemObj.price);
            $('#mainContainer').prepend($itemContainerLink);

            //for icons


            console.log(itemObj);
        });
    }
};

$.ajax(settings);
