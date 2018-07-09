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
        createBtn.css({ width: '100%'});
        // createBtn.style.width = "100%";
        // createBtn.innerHTML = "Запустить игру";
        creationMenu.show();
    });

    $('#back-btn-wrapper div').click(function () {
        creationMenu.hide();
        title.show();
        roomsList.show();
        enterBtn.show();
        createBtn.css({ width: '50%'});
    });

    room.click(function () {
        room.removeClass('selected');
        $('#' + this.id).toggleClass('selected');
        enterBtn.prop('disabled', false);
        enterBtn.style.backgroundColor = '#5a95e2';
    });

    // roomsList.click(function () {
    //     room.removeClass('selected');
    // });


    if (!room.hasClass('selected')){
        enterBtn.style.backgroundColor = '#717f95';
        enterBtn.prop('disabled', true);
    }




});