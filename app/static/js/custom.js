$(document).ready(function () {
    let regBox = $('#registration-box');
    let authBox = $('#authorization-box');
    let chatBox = $('#live-chat');
    let sendForm = $('#send-form');
    let profileBox = $('.user-profile');
    let title = $('#title');
    let roomsList = $('#rooms-list');
    let enterBtn = $('.enter-btn');
    let createBtn = $('.create-btn');
    let creationMenu = $('.creation-menu');
    let room = $('.room');
    let headings = $('.headings');
    let chatBlock = $('#chat-block');
    let burger = $('.burger');
    // let roomsBlock = $('#rooms-block');
    let avatarUploader = $('.avatar-uploader');
    let avatar = $('.avatar');
    let packageUploader = $('.package-uploader');
    let addPackage = $('.add-package');
    // let delPackage = $('.del-package');

    packageUploader.hide();

    $('#auth_btn').click(function () {
        regBox.hide();
        authBox.show();
    });

    $('#reg_btn').click(function () {
        authBox.hide();
        regBox.show();
    });

    $('#profile-tab').click(function(){
        chatBox.hide();
        sendForm.hide();
        profileBox.show();
    });

    $('#chat-tab').click(function(){
        chatBox.show();
        sendForm.show();
        profileBox.hide();
    });

    $('#create-room').click(function(){
        title.hide();
        roomsList.hide();
        enterBtn.hide();
        headings.hide();
        createBtn.css({ width: '100%'});
        creationMenu.show();
    });

    $('#back-btn-wrapper div').click(function () {
        creationMenu.hide();
        title.show();
        roomsList.show();
        enterBtn.show();
        headings.show();
        createBtn.css({ width: '50%'});
    });

    $('#enter-room').attr('disabled', true);

    room.click(function () {
        let enterRoom = $('#enter-room');
        room.removeClass('selected');
        $('#' + this.id).toggleClass('selected');
        enterRoom.attr('disabled', false);
        enterRoom.css({'background-color': '#5a95e2'});
        enterRoom.hover(function () {$(this).css({'background-color':'#186ca3', 'transition':'0.3s'});},
                               function () {$(this).css({'background-color':'#5a95e2'})});
    });

    // $('.packages li').hover(function () {$(this).css({'background-color':'#186ca3', 'transition':'0.3s'});},
    //                            function () {$(this).css({'background-color':'#5a95e2'})});

    $('.packages li').click(function () {
        $('.packages li').removeClass('selected');
        $('#' + this.id).toggleClass('selected');
    });

    // $('.package-manager li').click(function () {
    //     $('.packages li').removeClass('selected');
    //     $('#' + this.id).toggleClass('selected');
    // });
    // if ($('.packages li').hasClass('selected')){
    //     $('.packages li:hover').hover(function () {$(this).css({'background-color':'#633bf3'});},
    //                            function () {$(this).css({'background-color':'#633bf3'})});
    // }

    // burger.hide();

    // $(window).resize(function () {
        //if ($(window).width() <= 990)
        // if(window.matchMedia('(max-width: 990px)').matches){
        //     // chatBlock.hide();
        //     burger.show();
        //
        //     // createBtn.click(function () {
        //     //     $('.creation-menu .wrapper').css({'display':'flex', 'justify-content':'center', 'align-items':'flex-start', 'flex-direction':'column'});
        //     // });
        //     // roomsBlock.append(chatBlock);
        //     // chatBlock.width = '100%';
        //     // chatBlock.height = '100%';
        //
        //
        // }


    // });

    burger.click(function () {
                // chatBlock.removeClass('col-lg-4');
                // chatBlock.toggleClass('col-lg-9');
                // roomsBlock.hide();
                // chatBlock.width = '100%';
                // chatBlock.height = '100%';
                chatBlock.toggle();
            });

    avatar.hover(function () {
                    avatarUploader.css({'height':'50px', 'opacity':'0.6', 'transition':'0.4s'});
                },
                function () {
                    avatarUploader.css({'height':'0px', 'opacity':'0', 'transition':'0.4s'});
                });

    avatarUploader.hover(function () {
                            avatarUploader.css({'height':'50px', 'opacity':'0.6'});

                        },
                        function () {
                            avatarUploader.css({'height':'0px', 'opacity':'0'});
                        });

    $('.avatar-uploader p a').hover(function () {
                                        $(this).css({'transition': '0.2s', 'color': '#ffb21b', 'font-size': '18px'})
                                    },
                                    function () {
                                        $(this).css({'transition': '0.2s', 'color': '#ffe682', 'font-size': '1rem'})
                                    });




    $('#room-link').click(function () {
        $(this).select();
        document.execCommand("copy");
    });

    addPackage.click(function () {
        packageUploader.toggle();
    });

    $('.close-btn').click(function () {
        packageUploader.hide();
    });


});