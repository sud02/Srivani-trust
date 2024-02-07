$(document).ready(function () {
    generateCaptcha();
    $("#refresh-captcha").click(function () {
        generateCaptcha();
        $("#captcha-input").val("");
    });
});

async function Signin() {
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    var captchaInput = document.getElementById("captcha-input").value;

    if (username !== "" && password !== "" && captchaInput !== "") {
        var payload = new FormData();
        payload.append('username', username);
        payload.append('password', password);

        try {
            const response = await axios({
                method: 'post',
                url: '/login',
                data: payload,
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            if (response.status === 200) {
                window.location.href = "/Landingpage";
            } else {
                alert("Login failed: " + response.statusText);
            }
        } catch (error) {
            console.error("Error:", error.response.data.message);
            alert("Login failed: " + error.response.data.message);
        }
    } else {
        alert("Please enter all the details including captcha!");
    }
}

function generateCaptcha() {
    var canvas = $("#captcha")[0];
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var captchaText = "";
    for (var i = 0; i < 6; i++) {
        var char = chars.charAt(Math.floor(Math.random() * chars.length));
        captchaText += char;

        ctx.font = "20px Arial";
        ctx.fillStyle = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
        ctx.textAlign = "center";
        ctx.fillText(char, 20 + i * 30, canvas.height / 2);
    }
    sessionStorage.setItem("captchaCode", captchaText);
}