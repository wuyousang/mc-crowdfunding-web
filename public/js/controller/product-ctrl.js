/**
 * Created by WuYou on 2016/3/30.
 */
/**
 * Created by WuYou on 2016/3/29.
 */
require.config({
    baseUrl: '../js',
    paths: {
        'Vue': './lib/vue.min'
    },
    shim: {
        'Vue': {
            exports: 'Vue'
        }
    }
});

require(['Vue'],
    function (Vue) {
        'use strict';
        Vue.config.delimiters = ['${', '}'];
        Vue.config.unsafeDelimiters = ['{!!', '!!}'];
        $(document).ready(function () {
            /*产品详情进行中*/
            $("#product-detail-ongoing").click(function () {
                location.href = '../product/product-ongoing';
            });
            /*产品详情预热中*/
            $("#product-detail-preheat").click(function () {
                location.href = '../product/product-preheat';
            });
            /*产品详情成功*/
            $("#product-detail-succeed").click(function () {
                location.href = '../product/product-success';
            });
            /*产品详情失败*/
            $("#product-detail-failed").click(function () {
                location.href = '../product/product-failed';
            });
            $("#join-product").click(function () {
                location.href = '../product/product-booking'
            })
        });

        $(document).ready(function () {
            var vm = new Vue({
                el: '#page-product-booking',
                data: {
                    inputPassword2: ''
                }
            });
            $("#submit-product-booking").click(function(){
                if(!vm.inputPassword2){
                    alert("请输入需要订购的产品数量");
                    return;
                }
                location.href='../product/product-booking-pay';
            });

            $("#product-booking-pay-confirm").click(function(){
                location.href='../product/product-booking-pay-confirm';
            });
        });

    });