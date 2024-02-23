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
            const loginResponse = await axios({
                method: 'post',
                url: '/login',
                data: payload,
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            if (loginResponse.status === 200) {
                const roleResponse = await axios.get('/get_user_role');
                const role = roleResponse.data.role;
                switch(role) {
                    case 'admin':
                        window.location.href = "/Landingpage";
                        break;
                    case 'editor':
                        window.location.href = "/users";
                        break;
                    case 'agency':
                        window.location.href = "/Reports";
                        break;
                    default:
                        window.location.href = "/Landingpage";
                }
            } else {
                alert("Login failed");
            }
        } catch (error) {
            alert("Login failed: " + error.message);
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

        ctx.font = "16px Arial"; 
        ctx.fillStyle = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
        ctx.textAlign = "center";
        ctx.fillText(char, 10 + i * 20, canvas.height / 2 + 5); 
    }
    sessionStorage.setItem("captchaCode", captchaText);
}
