// Lista svih bukmarka
var allLogins = [];
var listElement = $('#loginResults');

// Definisanje modela
function Login(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
}

// Kreiranje logina
function createLogin(firstName, lastName, email) {

    var login = new Login(firstName, lastName, email);
    allLogins.push(login);

    saveLocal();

    renderAllLogin();
    document.getElementById('myForm').reset();
}


// Save data to local storage
function saveLocal() {
    var str = JSON.stringify(allLogins);
    localStorage.setItem("logins", str);
}

// Get data from local storage
function getLocal() {
    var str = localStorage.getItem("logins");
    allLogins = JSON.parse(str);
    if(!allLogins){
        allLogins = [];
    }
}


// Render all logins
function renderAllLogin() {
    var listHtml = '';
    allLogins.forEach(function(login, index){
        listHtml += renderOneLogin(login, index);
    });
    listElement.html(listHtml);
}

// Render one login
function renderOneLogin(login) {
    return '<div class="well col-md-4">' + '<li>'+ login.firstName +'</li>'+
            '<li>'+ login.lastName +'</li>'+
            '<li>'+ login.email +'</li>' + '</div>';
}

// Initialize local storage
getLocal();
renderAllLogin();


// Slusanje eventa submita forme
// var createLoginForm = document.getElementById('createLoginForm');
$('#myForm').submit(function(e){
    e.preventDefault();
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;

    createLogin(firstName, lastName, email);
});


// JQuerry dropdown menu
$("#menu").click(function(event) {
    event.stopPropagation();
    $("#dropdown").toggle( "fast", function() {

    });
});
// Close dropdown menu by clicking anywhere on the screen
$(document).click( function(){
    $('#dropdown').hide("slow", function() {

    });
});
