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
    let avatarUploader = $('.avatar-uploader');
    let avatar = $('.avatar');
    let packageUploader = $('.package-uploader');
    let addPackage = $('.add-package');

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

    $('.packages li').click(function () {
        $('.packages li').removeClass('selected');
        $('#' + this.id).toggleClass('selected');
    });

    burger.click(function () {
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

    $('.upload-package button').click(function () {
        let fileForm = $('#upload-package');
        let fileInput = fileForm.find('input[name="gamepack"]');
        let fd = new FormData();

        fd.append('gamepack', fileInput.prop('files')[0]);

        $.ajax({
            url: '/upload_pack',
            data: fd,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function (data) {
                let taskId = data['task_id'];
                $.getJSON('/get_status/' + taskId, function (data) {
                    console.log(data['result']+'\n'+data['state'])
                })
            }
        });
    })

});