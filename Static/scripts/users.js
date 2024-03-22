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
    const phone_number = document.getElementById('phone').value; // Corrected variable name
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
        phone_number: phone_number, // Ensure this matches your FastAPI model
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
    .then(response => response.json().then(data => ({
        status: response.status,
        data,
    })))
    .then(result => {
        if (result.status !== 200) {
            throw result.data;
        }
        console.log("User added successfully:", result.data);
        $('#addUserModal').modal('hide');
        // Optional: Refresh the DataTable to show the new user
        $('#usersTable').DataTable().ajax.reload();
    })
    .catch(error => {
        console.error('Error adding user:', error);
        alert(`Error: ${error.detail.join("\n")}`);
    });
}
