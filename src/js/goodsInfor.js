require('../css/goodsInfor.css');
require('./indexCover.js')


function getId() {
    var optionList = location.search.slice(1).split('&'), 
        idNum;
    optionList.forEach(function (ele, index) {
        if(ele.indexOf('id=') !== -1) {
            idNum = ele.slice(3);
        }
    })
    return idNum;
}
function getGoodsList() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/api/goodsList.json',
        success: function (data) {
            createGoodsInfo(data);
            console.log(data)
        } 
    })
}
getGoodsList();
function createGoodsInfo(data) {
    var idNum = getId(),
        dataList = data.list,
        len = dataList.length,
        str = '',
        liStr = '';
        console.log(dataList);
    for(var i = 0; i < len; i++) {
        if(dataList[i].id == idNum) {
            $('.pic').html('<img src="'+ dataList[i].imgurl[0] +'">');
            $('.two-infor').html(dataList[i].name);
            
            dataList[i].spectList.sort(findPrice('price'));
            $('.two-price').html('￥' + dataList[i].spectList[0].price + '-' + dataList[i].spectList[dataList[i].spectList.length -1].price);
            dataList[i].imgurl.forEach(function (ele, index) {
                str += '<img src="'+ ele +'"/>';
            });
            $('.picture').append($(str));
            dataList[i].spectList.forEach(function (ele, index) {
                liStr += '<li class="buy_spect_li" data-price="'+ ele.price +'">'+ ele.spect +'</li>';
            });
            $('.item2-s ul').html(liStr);

        }
    }
}
/暂时没搞懂/
function findPrice(str) {
    return function (a, b) {
        return a[str] - b[str];
     }
}


function bindEvent() {
    $('.goods-size').on('click', function () {
        console.log(6666)
        $('.buy-wrap').css('display','block');
        $('html').css({height:'100%',overflow: 'hidden'});
    })
    $('.gray').on('click', function () {
        $('.buy-wrap').css('display','none');
        $('html').css({height:'100%',overflow: 'visible'});
    })
}
bindEvent();

