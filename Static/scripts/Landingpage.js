
function clearFields() {
    var inputElements = document.getElementsByTagName("input");
    for (var i = 0; i < inputElements.length; i++) {
        if (inputElements[i].type === "text" || inputElements[i].type === "password") {
            inputElements[i].value = "";
        }
    }
}

document.getElementById("clearButton").addEventListener("click", clearFields);

async function submitForm(event) {
event.preventDefault(); 
const formData = new FormData();
const formFields = {
    Phases: document.getElementById('Phases').value,
    EE_Office: document.getElementById('EE-Office').value,
    District: document.getElementById('District').value,
    AssemblyConstituency: document.getElementById('AssemblyConstituency').value,
    Mandal: document.getElementById('mandals').value,
    Name_village: document.getElementById('Name_village').value,
    Name_Hamlet: document.getElementById('Name_Hamlet').value,
    Latitude_location: document.getElementById('Latitude_location').value,
    Longitude_location: document.getElementById('Longitude_location').value,
    Population: document.getElementById('Population').value,
    Name_individual: document.getElementById('Name_individual').value,
    Name_Templeproposed: document.getElementById('Name_Templeproposed').value,
    Email_Address: document.getElementById('Email_Address').value,
    Phone_number: document.getElementById('Phone_number').value,
    Extent_land: document.getElementById('Extent_land').value,
    Details_available: document.getElementById('Details_available').value,
    Title_land: document.getElementById('Title_land').value,
    Survey_No: document.getElementById('Survey_No').value,
    Boundaries: document.getElementById('Boundaries').value,
    Whether_acceptance: document.getElementById('Whether_acceptance').value,
    Details_financial: document.getElementById('Details_financial').value
};

formData.append('form_data', JSON.stringify(formFields));
const documentsRequestee = document.getElementById('Documents_requestee').files[0];
if(documentsRequestee) formData.append('documents_requestee', documentsRequestee);

try {
    const response = await fetch('/submit_bhajana_mandir_form', {
        method: 'POST',
        body: formData,
    });
    if (response.ok) {
        alert('Form submitted successfully!');
    } else {
        throw new Error('Form submission failed with status: ' + response.status);
    }
} catch (error) {
    console.error('Error submitting form:', error);
    alert(error.message);
}
}
document.getElementById('bhajanaMandirForm').addEventListener('submit', submitForm);

