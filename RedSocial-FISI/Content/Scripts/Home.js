var controller = siteRoot + 'Home/';

$(function () {
    window.fbAsyncInit = function () {
        FB.init({
            appId: '1638945733074153',
            cookie: true,  // enable cookies to allow the server to access 
            // the session
            xfbml: true,  // parse social plugins on this page
            version: 'v2.8' // use graph api version 2.8
        });

        FB.getLoginStatus(function (response) {
            //statusChangeCallback(response);
            if (response.status === 'connected') {
                //testAPI();
                document.getElementById('Estado').innerHTML = 'Esta Conectado a tu Aplicacion';
            } else if (response.status === 'not_authorized') {
                document.getElementById('Estado').innerHTML = 'Please log ' +
                  'into this app. Por inicie sesion en la aplicaciones';
            } else {
                document.getElementById('Estado').innerHTML = 'Please log ' +
                  'into Facebook. Debe iniciar sesion en facebook';
            }
        });

    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


});

function login() {
    FB.login(function (response) {
        if (response.status === 'connected') {
            //testAPI();
            document.getElementById('Estado').innerHTML = 'Esta Conectado a tu Aplicacion';
        } else if (response.status === 'not_authorized') {
            document.getElementById('Estado').innerHTML = 'Please log ' + 
              'into this app. Por inicie sesion en la aplicaciones';
        } else {
            document.getElementById('Estado').innerHTML = 'Please log ' +
              'into Facebook. Debe iniciar sesion en facebook';
        }
    });
}

function CerrarSesion() {
    FB.logout(function (response) {
        document.getElementById('Estado').innerHTML = 'El usuario cerro la sesion';
    });
}


function MostrarDatos() {
    FB.api('/me', 'GET', { "fields": "id,name,age_range,picture" }, function (response) {
        console.log(response);
        var User = response;
        var UrlImg = User.picture.data.url;
        document.getElementById('Datos').innerHTML = '<img src="' + UrlImg + '"/>';
    });
}