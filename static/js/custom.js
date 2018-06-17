$(document).ready(function () {
    let regBox = $('#registration-box');
    let authBox = $('#authorization-box');

    $('#auth_btn').click(function () {
        regBox.hide();
        authBox.show();
    });

    $('#reg_btn').click(function () {
        authBox.hide();
        regBox.show();
    })
});

