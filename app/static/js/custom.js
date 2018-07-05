$(document).ready(function () {
    let regBox = $('#registration-box');
    let authBox = $('#authorization-box');
    let chatBox = $('#live-chat');
    let sendForm = $('#send-form');
    let profileBox = $('.user-profile');

    // profileBox.hide();

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


});