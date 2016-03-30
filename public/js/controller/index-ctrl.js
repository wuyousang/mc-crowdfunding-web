/**
 * Created by WuYou on 2016/3/29.
 */
require.config({
    baseUrl: './js',
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
        /*登录*/
        $(document).ready(function () {
            var vm = new Vue({
                el: '#page-login',
                data: {
                    username: '',
                    password: '',
                    captcha:''
                }
            });
            $("#login").click(function () {
                if (!vm.username) {
                   alert("请输入账号");
                    return;
                }
                if (!vm.captcha) {
                    alert("请输入验证码");
                    return;
                }
                if (!vm.password) {
                    alert("请输入密码");
                    return;
                }
                location.href = '/login-suc?username='+vm.username;
            });
        });
        /*注册*/
        $(document).ready(function () {
            //alert("aaaaaaaaaaaaaaaaaaaaaa");
            var vm = new Vue({
                el: '#page-reg-start',
                data: {
                    phone: '',
                    wechat:'',
                    password: '',
                    repassword:'',
                    validate:'',
                    captcha:''
                }
            });
            $("#reg-start-next").click(function(){
                if(!vm.phone){
                    alert("请输入电话号码");
                    return;
                }
                if(!vm.wechat){
                    alert("请输入微信号");
                    return;
                }
                if(!vm.password){
                    alert("请输入密码");
                    return;
                }
                if(!vm.repassword){
                    alert("请确认密码");
                    return;
                }
                if(!vm.validate){
                    alert("请输入验证码");
                    return;
                }
                if(!vm.captcha){
                    alert("请输入激活码");
                    return;
                }
                if(vm.password!=vm.repassword){
                    alert("两次密码输入不一致");
                    return;
                }
                location.href = '/reg-info';
            });

        });

        /*注册-基本信息*/
        $(document).ready(function () {
            //alert("aaaaaaaaaaaaaaaaaaaaaa");
            var vm_info = new Vue({
                el: '#page-reg-info',
                data: {
                    name: '',
                    id:'',
                    email: '',
                    address:''
                }
            });
            $("#reg-info-next").click(function(){
                if(!vm_info.name){
                    alert("请输入真实姓名");
                    return;
                }
                if(!vm_info.id){
                    alert("请输入身份证号");
                    return;
                }
                if(!vm_info.address){
                    alert("请输入详细地址");
                    return;
                }
                //alert("aaaaaaaaaaaaaaaaa");
                location.href = '/reg-platform';
            });

        });
    });