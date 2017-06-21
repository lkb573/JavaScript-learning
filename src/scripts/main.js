//입문
/*window.alert("안녕")

var a = 10;
var b = 20;

var result = a+b;

var d = null;

console.log(result);

document.write('<h2>한번 더 안녕</h2>')


var acc = 3;
acc += 5;
acc++;
console.log(acc);

var a =  '안녕안녕'
var b =  '한번더 안녕'
var c = true
console.log(a,b,c)*/


//for
/*for (var i=0; i<5; i++){
    console.log(i + ' 번째 출력')
}

for (var i=1; i<=100; i++){
    console.log(i + ' 번째 출력')
}

for (var i=1; i<=9; i++){
    for (var j=2; j<=9; j++) {
        console.log(i + '*' + j + '=' + i*j );
    }
}*/


//while
/*var i = 0;
while(i < 5){
    console.log(i + '번째 출력');
    i++;
}*/


//if
/*if(undefined){
    console.log('check false');
}else {
    console.log('check true');
}*/


/*var a;
var b = a || 0;
console.log(b);*/


//Array
/*var arr = ['h', 'a', 'p', 'p', 'y'];
arr.push('program');
console.log(arr);*/


/*var scores = [100, 90, 100];

for ( var i in scores ) {

    console.log(scores[i]);
}*/


//function
/*
function addTwoNum(a, b) {
    return a+b;
}
console.log(addTwoNum(2,3))

var subTwoNum = function (i, j) {
    return i-j;
};

console.log(subTwoNum(10,7))

var multiTwoNum = function (a, b) {
    console.log(a*b);
}

var ret = multiTwoNum(3,7);
console.log(ret);

function plusThree(a) {
    var result = a + 3;

    function plusTwo(b) {
        return result + 2;
    }

    return plusTwo(/!*result*!/);
}
console.log(plusThree(3));*/

//callback
/*function getCalcNum ( callback ) {

    var result = callback ( 10, 60 );
    return result;
}

var callbackFunction = function ( numOne, numTwo ) {
    return numOne + numTwo;
}

var result = getCalcNum ( callbackFunction );
console.log(result);*/

//function
/*
var adder = function (a,b) {
    return a+b;
}

var subber = function (a,b) {
    return a-b;
}

function getCalcNum(a,b,func) {
    return func(a,b);
}

function sum(data) {
    var acc = 0;
    for (var item in data){
        acc += data[item];
    }
    return acc;
}

function aver(data) {
   return sum(data) / data.length;
}

function square(val) {
    return function () {
        return val * val;
    }
}

function calcNum(data, func) {
    return func(data);
}

console.log(getCalcNum(4,10, adder));
console.log(getCalcNum(7,3, subber));

var arr=[1,2,3,4,5,6,7];
console.log(calcNum(arr,sum));
console.log(calcNum(arr, aver));

var sf = square(3);
console.log(sf());*/


//alert
/*window.alert('Hi');
var clickconfirm = window.confirm('안녕');

if(clickconfirm){
    console.log('check')
}else {
    console.log('cancel')
}*/


//Js Object
/*var obj = {};

var num = 5;
var str = 'hi';
var bool = true;
var arr = [];

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof arr);
console.log(typeof obj);


    var art1 = {
        aid : 1,
        title : 'hi',
        author : 'Lee',
        content : 'test action'
    };

    var art2 = {
        aid : 2,
        title : 'hi, man',
        author : 'Hong',
        content : 'check action',

        add: function(a,b) {
            return a + b;
        },
        sub: function (a, b) {
            return a -b;
        }
    };

    console.log(art2.add(3,5));*/

    /*var artList = [
        {
            aid : 1,
            title : 'hi',
            author : 'Lee',
            content : 'test action'
        },

        {
            aid : 2,
            title : 'hi, man',
            author : 'Hong',
            content : 'check action'
        }
    ];*/


//jQuery
jQuery(document).ready(function () {
/*    var theText = $('h1').text();

    console.log(theText);

    $('h1').text('MARVEL');*/

    /*$('li').text('Rome');*/

    /*$('#destination > li:even').text('change');
    $('.promotion')*/

    /*$('#bookBigCon').children(ul).first().children('li').first().next()
        .children('div.goods_img.bookTp').children('span').children('a').children('img')

    $('#eBookTabCon1').children('div.newGoodsArea').children('ul').children('li')
        .first().children('div.goods_info').children('p.goods_price')*/

    var priceTag = $('<p>Start $ 573.99</p>');

    $('button').on('click', function () {
        /*$('#destination').children('li.promotion').remove();*/

        $('#destination').children('li.vacation').append(priceTag);
        $(this).remove();
    });

    $('#destination').on('mouseenter', 'li:nth-child(2)',function () {
        $(this).parent('#destination').children('li:nth-child(4)').fadeOut();
    });

    $('#destination').on('mouseout', 'li:nth-child(2)',function () {
        $(this).parent('#destination').children('li:nth-child(4)').fadeIn();
    });

    $('#nForm').on('keyup', 'input:text', function () {
        var count = isNaN(+$(this).val()) ? 0 : +$(this).val();

        /*console.log(count);*/

        $('#destination').children('li:last-child').children('span').text(count * 375);
    });


    $('#nForm').on('click', 'input:button', function () {
       /*alert('check');
       console.log('check');*/

       $.ajax('https://api.github.com/users/lkb573',{
           success: function (reponse) {
               /*$('#resultDiv').text(reponse);*/

               var login = reponse.login;
               var id = reponse.id;
               var loc = reponse.location;
               var cAt = reponse.created_at;

               $('#destination').children(':first-child').children('h2').text(login);
               $('#destination').children(':nth-child(2)').text(id);
               $('#destination').children(':nth-child(3)').text(loc);
               $('#destination').children(':nth-child(4)').text(cAt);
           }
       })
       
       
    });




});

