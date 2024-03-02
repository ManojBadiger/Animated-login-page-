$(document).ready(function(){
    $("#password").focusin(function(){
        $("form").addClass("up");
    });

    $("#password").focusout(function(){
        $("form").removeClass("up");
    });

    $(document).on("mousemove", function(event){
        let dw=$(document).width()/15;
        let dh= $(document).height()/15;
        let x= event.pageX/dw;
        let y= event.pageY/dh;
        $(".eye-ball").css({
            width:x,
            height: y
        })
    });

    $(".btn").click(function(){
        $("form").addClass("wrong-entry");
        setTimeout(function(){
            $("form").removeClass("wrong-entry");
        },30000)
    })


})