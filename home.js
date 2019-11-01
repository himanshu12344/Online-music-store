$(document).ready(function(){
    $('ul ul').on('click',function(){
        var item=$(this).text().replace(/\-/g," ");
        var cartitem={item:item.val()};
        
        $.ajax({
            type:'POST',
            url:'/home',
            data:cart,
            success:function(cartitems){
                location.reload();
            }
        });
        return false;
    });
});