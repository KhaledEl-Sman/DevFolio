$(document).ready(function () {

    //change text
    if ($('.text-slider').length == 1) {
        var typed_strings = $('.text-slider-items').text();
        var typed = new Typed('.text-slider', {
            strings: typed_strings.split(','),
            typeSpeed: 80,
            loop: true,
            backDelay: 1100,
            backSpeed: 30
        });
    }

    //navbar-toggler
    $('.first-button').on('click', function () {

        $('.animated-icon1').toggleClass('open');
    });

    //progress bars
    condition = true;
    function progress_bar() {
        $(".progress").eq(0).animate({ width: '85%' });
        $(".progress").eq(1).animate({ width: '75%' });
        $(".progress").eq(2).animate({ width: '50%' });
        $(".progress").eq(3).animate({ width: '90%' });
        condition = false;
    }

    //Navbar links color
    function nav_links() {

        //up button
        if ($(window).scrollTop() >= 320) {
            $(".up").css("display", "block");
        } else {
            $(".up").css("display", "none");
        }

        //navbar
        navbar();

        if ($(window).scrollTop() >= $("#home").offset().top && $(window).scrollTop() < $("#about").offset().top) {
            active(0);
        } else if ($(window).scrollTop() >= $("#about").offset().top && $(window).scrollTop() < $("#services").offset().top) {
            active(1);
        } else if ($(window).scrollTop() >= $("#services").offset().top && $(window).scrollTop() < $("#work").offset().top) {
            active(2);
        } else if ($(window).scrollTop() >= $("#work").offset().top && $(window).scrollTop() < $("#blog").offset().top) {
            active(3);
        } else if ($(window).scrollTop() >= $("#blog").offset().top && $(window).scrollTop() < $("#contact").offset().top) {
            active(4);
        } else {
            active(5);
        }

        //progress bars
        if ($(window).outerWidth() >= 1216) {
            $(".title").css("font-size", "4.5rem");
            $(".subtitle").css("font-size", "2.5rem");
            if ($(window).scrollTop() >= $("#about").offset().top - 265 && $(window).scrollTop() <= $("#end").offset().top) {
                if (condition) {
                    progress_bar();
                }
            }

        } else if ($(window).outerWidth() < 1216 && $(window).outerWidth() >= 1008) {
            $(".title").css("font-size", "4.5rem");
            $(".subtitle").css("font-size", "2.5rem");
            if ($(window).scrollTop() >= $("#about").offset().top - 175 && $(window).scrollTop() <= $("#end").offset().top) {
                if (condition) {
                    progress_bar();
                }
            }

        } else if ($(window).outerWidth() < 1008 && $(window).outerWidth() >= 784) {
            $(".title").css("font-size", "4.5rem");
            $(".subtitle").css("font-size", "2.5rem");
            if ($(window).scrollTop() >= $("#about").offset().top - 50 && $(window).scrollTop() <= $("#end").offset().top) {
                if (condition) {
                    progress_bar();
                }
            }

        } else {
            $(".title").css("font-size", "3.75rem");
            $(".subtitle").css("font-size", "2rem");
            if ($(window).scrollTop() >= $("#about").offset().top - 50 && $(window).scrollTop() <= $("#end").offset().top + 50) {
                if (condition) {
                    progress_bar();
                }
            }

        }

    }
    nav_links();

    //navbar
    function navbar() {
        if ($(window).scrollTop() >= 100) {
            if ($(window).outerWidth() >= 768) {
                $(".navbar").css('height', '85px');
                $("nav").eq(0).css("background-color", "white");
                $(".navbar-brand").css('color', '#0078ff');
                $(".nav-item a").css('color', '#0078ff');
                $("nav").addClass("shadow-sm");
                $(".nav-border").each(function () {
                    $(this).css("background-color", "#0078ff");
                })
                $("#navbarSupportedContent20").css("position", "unset");
            } else {
                $(".navbar").css('height', '85px');
                $("nav").eq(0).css("background-color", "white");
                $(".navbar-brand").css('color', '#0078ff');
                $(".nav-item a").css('color', '#0078ff');
                $("nav").addClass("shadow-sm");
                $(".nav-border").each(function () {
                    $(this).css("background-color", "#0078ff");
                })
                $("#navbarSupportedContent20").css("background-color", "#fff").css("position", "absolute").css("top", "85px");
            }
        } else {
            if ($(window).outerWidth() >= 768) {
                $(".navbar").css('height', '100px');
                $("nav").eq(0).css("background-color", "transparent");
                $(".navbar-brand").css('color', '#fff');
                $(".nav-item a").css('color', '#fff');
                $("nav").removeClass("shadow-sm");
                $(".nav-border").each(function () {
                    $(this).css("background-color", "#fff");
                })
                $("#navbarSupportedContent20").css("background-color", "transparent").css("position", "unset");
            } else {
                $(".navbar").css('height', '85px');
                $("nav").eq(0).css("background-color", "white");
                $(".navbar-brand").css('color', '#0078ff');
                $(".nav-item a").css('color', '#0078ff');
                $("nav").addClass("shadow-sm");
                $(".nav-border").each(function () {
                    $(this).css("background-color", "#0078ff");
                })
                $("#navbarSupportedContent20").css("background-color", "#fff").css("position", "absolute").css("top", "85px");
            }
        }
    }

    //navbar resize
    $(window).resize(function () { navbar(); })

    //active nav-item
    function active(x) {
        $(".nav-item").each(function () {
            $(this).removeClass("active");
        })
        $(".nav-item").eq(x).addClass("active");
    }

    //scroll code
    $(window).scroll(function () {

        nav_links();

    })

    //click up button
    $(".up").click(function () {

        $('html, body').animate({ scrollTop: 0 }, $(window).scrollTop() / 2);

    })

    // click nav links

    $(".nav-link").click(function () {

        let hRef = $(this).attr("href");
        $('html, body').animate({ scrollTop: $(hRef).offset().top + 1 }, 1000);

    })

    //counter
    $('.counter').counterUp({
        delay: 15,
        time: 2000
    });

    //slider
    $('.owl-carousel').owlCarousel({
        items: 2,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    //lightBox
    let current;
    let pictures = Array.from(document.querySelectorAll(".img"));
    for (let i = 0; i < pictures.length; i++) {
        $(pictures[i]).click(function (e) {
            current = i;
            let pic = $(this).children(":first").attr('src')
            $(".slideShow").children(":first").css("background-image", "url(" + pic + ")");
            $(".slideShow").css("transform", "scale(1,1)");
            $("body").css("overflow", "hidden");
        })
    }
    $("#exit").click(function () {
        $(".slideShow").css("transform", "scale(0,0)");
        $("body").css("overflow", "auto");
    })
    $("#goRight").click(function () {
        if (current == pictures.length - 1) {
            current = 0;
        } else {
            current++;
        }
        let pic = $(pictures[current]).children(":first").attr('src');
        $(".slideShow").children(":first").css("background-image", "url(" + pic + ")");
    })
    $("#goLeft").click(function () {
        if (current == 0) {
            current = pictures.length - 1;
        } else {
            current--;
        }
        let pic = $(pictures[current]).children(":first").attr('src')
        $(".slideShow").children(":first").css("background-image", "url(" + pic + ")");
    })
    document.addEventListener("keydown", function (e) {
        if (e.keyCode == 27) {
            $(".slideShow").css("transform", "scale(0,0)");
            $("body").css("overflow", "auto");
        }
        else if (e.keyCode == 39) {
            if (current == pictures.length - 1) {
                current = 0;
            } else {
                current++;
            }
            let pic = $(pictures[current]).children(":first").attr('src')
            $(".slideShow").children(":first").css("background-image", "url(" + pic + ")");
        }
        else if (e.keyCode == 37) {
            if (current == 0) {
                current = pictures.length - 1;
            } else {
                current--;
            }
            let pic = $(pictures[current]).children(":first").attr('src')
            $(".slideShow").children(":first").css("background-image", "url(" + pic + ")");
        }
    })

    //contact validation
    //name validation
    let nameVal = false;
    $("#name").keyup(function () {
        let name = $(this).val();
        let regName = /^[a-zA-Z]+ [a-zA-Z]{2,10}$/;
        if (!regName.test(name)) {
            $("#namealert").css("display", "block");
            disable();
        } else {
            $("#namealert").css("display", "none");
            nameVal = true;
            able();
        }
    })

    //email validation
    let emailVal = false;
    $("#email").keyup(function () {
        let email = $(this).val();
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(email)) {
            $("#emailalert").css("display", "block");
            disable();
        } else {
            $("#emailalert").css("display", "none");
            emailVal = true;
            able();
        }
    })

    //subject validation
    let subjectVal = false;
    $("#subject").keyup(function () {
        let subject = $(this).val();
        let regSubject = /^[A-Za-z]{3,20}$/;
        if (!regSubject.test(subject)) {
            $("#subjectalert").css("display", "block");
            disable();
        } else {
            $("#subjectalert").css("display", "none");
            subjectVal = true;
            able();
        }
    })

    //message validation
    let messageVal = true;
    $("#message").keyup(function () {
        let message = $(this).val();
        let regMessage = /^[\s\S]{0,100}$/;
        if (!regMessage.test(message)) {
            $("#messagealert").css("display", "block");
            messageVal = false;
            disable();
        } else {
            $("#messagealert").css("display", "none");
            messageVal = true;
            able();
        }
    })

    //disable function
    function disable() {
        document.querySelector("#submit").setAttribute("disabled", false);
    }

    //able function
    function able() {
        if (nameVal == true && emailVal == true && subjectVal == true && messageVal == true) {
            document.querySelector("#submit").removeAttribute("disabled", false);
        }
    }

    //clear function
    $("#submit").click(function () {
        document.getElementsByClassName("form-control").value = '';
    })

    // spinner
    $(".spinner").fadeOut(1000, function () {
        $("body").css("overflow", "auto");
    });

})