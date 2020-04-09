function animasiIntro() {
    $("#text span").velocity("transition.slideLeftIn",{
                                stagger: 100,
                                complete: function(){
                                    animasiButtonStart();
                                }
                            });
}

function animasiButtonStart() {
    $("#start").velocity("transition.bounceUpIn")
               .mouseenter(function(){
                   $(this).velocity({width:100});
                })
               .mouseleave(function(){
                    $(this).velocity({width:125});
                });
}

function animasiIntroOut() {
    $("#start").attr("disable", true).css({"color":"black"});
    $("#start").velocity("transition.whirlOut",{
                            stagger: 100,
                            complete: function(){
                                $("#text").velocity({"font-size":"20px", 
                                                     "top":"95%"
                                                    }, {
                                                        duration: 950,
                                                        complete: function(){
                                                            callMenu();
                                                            $("#menu ul li a[href='what_we_do']").trigger("click");
                                                            $("#start").attr("disable", false).css({"color":"black"});
                                                        }
                                                    });
                            }
                        });
}

function callMenu() {
    $("#menu ul li").velocity("transition.slideLeftIn",{
                                stagger: 200
                            });

    $("#menu ul li a").off().click(function(event){
        event.preventDefault();
        $(this).parent("li").addClass("active").siblings().removeClass("active");

        var hrefstring = $(this).attr("href");
        if(hrefstring == "back_to_intro"){
            back_to_intro();
        }else{
            if(!$("#" + hrefstring).is(":visible")){
                $(".container-content").fadeOut(950);
                setTimeout(function(){
                    $("#" + hrefstring).show();
                    window[hrefstring]();
                }, 950);
            }
        }    
    });                        
}

function what_we_do() {
    $("#what_we_do img").velocity("transition.flipYIn", {duration:1000});
    $("#what_we_do .title").velocity("transition.slideUpIn", {duration:1000});
    $("#what_we_do div").velocity("transition.slideDownIn", {duration:1000});
}

function our_team() {
    $(".members.top240").velocity("transition.slideUpIn", {stagger:95});
    $(".members.top170").velocity("transition.slideDownIn", {stagger:95});
}

function back_to_intro() {
    $("#menu ul li").hide();
    $(".container-content").hide();
    $("#text").velocity({"font-size":"90px", 
                         "top":"50%"
                        }, {
                            duration: 950,
                            complete: function(){
                                $("#start").velocity("transition.whirlIn");
                            }
                        });
                            
}

$(document).ready(function(){
    animasiIntro();
});