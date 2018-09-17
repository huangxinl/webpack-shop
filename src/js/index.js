require('../css/index.css');
require('jquery');

function getGoodsList() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/api/goodsList.json',
        success: function (data) {
            createList(data);
        } 
    })
}
getGoodsList();
function createList(data) {
    console.log(data);
    var str = '';
    data.list.forEach(function (ele, index) {
        str += '<a href="http://localhost:8080/goodsInfor.html?id='+ ele.id +'"><div class="goods-item">\
                    <img src="'+ ele.imgurl[0] +'" alt="">\
                    <p class="infor">'+ ele.name +'</p>\
                    <p class="price">'+'￥'+ele.spectList[0].price+'</p>\
                </div></a>';
    })
    $('.tab-content').html(str);
}