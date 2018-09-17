require('jquery');
require('../css/indexCover.css');
var state = {
    num: 1,
    choice: false
}
function init() {
    bindEventSpect();
}
init();

function bindEventSpect() {
    $('.goods-sort').on('click', '.buy_spect_li',function () {
        console.log(6789)
        state.choice = true;
        $('.buy_spect_li').removeClass('active')
        $(this).addClass('active');
        $('.s').html($(this).attr('data-price'));
        state.num = 1;
        $('.buy_number_value').html(state.num);
    })
    $('.sub').click(function () {
        if(state.num > 1) {
            $('.init-num').html(--state.num);
        }    
    })
    $('.add').click(function () {
        $('.init-num').html(++state.num);
    })
    $('.btn').click(function () {
        if(state.choice == true) {
            alert('提交成功');
            window.open('http://localhost:8080/index.html');
        }else {
            alert('请选择规则');
        }
    })
}


