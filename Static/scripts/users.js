$(document).ready(function() {
    $('#usersTable').DataTable({
        "ajax": {
            "url": "/api/users",  
            "dataSrc": ""
        },
        "columns": [
            { "data": "username" },
            { "data": "email" },
            { "data": "phone_number" },
            {"data":"role"},
        ]
    });
});
function addUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const role = document.getElementById('role').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return; 
    }
    const userData = {
        username: username,
        email: email,
        phone: phone,
        password: password,
        role: role
    };

    fetch('/api/add_user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        $('#addUserModal').modal('hide');
       
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
