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
    let roomsBlock = $('#rooms-block');


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
        room.removeClass('selected');
        $('#' + this.id).toggleClass('selected');
        $('#enter-room').attr('disabled', false);
        $('#enter-room').css({'background-color': '#5a95e2'});
    });

    burger.hide();

    $(window).resize(function () {
        //if ($(window).width() <= 990)
        if(window.matchMedia('(max-width: 900px)').matches){
            // chatBlock.hide();
            burger.show();
            // roomsBlock.append(chatBlock);
            // chatBlock.width = '100%';
            // chatBlock.height = '100%';


        }


    });

    burger.click(function () {
                // chatBlock.removeClass('col-lg-4');
                // chatBlock.toggleClass('col-lg-9');
                // roomsBlock.hide();
                // chatBlock.width = '100%';
                // chatBlock.height = '100%';
                chatBlock.toggle();
            });









});