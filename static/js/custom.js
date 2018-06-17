$(document).ready(function () {
    let regBox = $('#registration-box');
    let authBox = $('#authorization-box');
    // let sysMsg = $('.sys-messages');

    $('#auth_btn').click(function () {
        // sysMsg.hide();
        regBox.hide();
        authBox.show();
    });

    $('#reg_btn').click(function () {
        // sysMsg.hide();
        authBox.hide();
        regBox.show();
    })
});

