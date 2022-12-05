$(document).ready(function(){

$('#kids').mouseover(function(){ 
    $('#text2').fadeToggle()
})



$('#About').click(function(){ 
    $('#text1').slideDown()
})
$('#About').hover(function(){ 
    $('#text1').slideUp()
})
$('#Menu').click(function(){ 
    $('#itemlist').slideDown()
})

$('#Menu').hover(function(){ 
    $('#itemlist').slideUp()
})

$('#Recipe').click(function(){ 
    $('#rlist').slideDown()
})
$('#Recipe').hover(function(){ 
    $('#rlist').slideUp()
})
$('#btn1').click(function(){ 
    alert('information is yet to add')
})

})