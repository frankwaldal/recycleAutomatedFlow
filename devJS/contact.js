function sendMessage(e) {
    e.preventDefault();

    var formCheck = /[A-Za-z0-9\- .]+/;
    var emailCheck = /^[a-z0-9\.\-_+!#$%&'*/=?\^`{}~|]+@([a-z0-9\-]+\.)+[a-z]{2,4}$/i;
    var phoneCheck = /^\+[0-9]{1,3}[0-9]{3,12}$/;

    var name = document.querySelector('#name');
    var email = document.querySelector('#email');
    var phone = document.querySelector('#phone');
    var message = document.querySelector('#message');

    if (formCheck.test(name.value)) {
        name.style.border = '';
        document.querySelector(`#${name.id}Err`).style.display = 'none';
    } else {
        name.style.border = '2px solid #f04d4d';
        document.querySelector(`#${name.id}Err`).style.display = 'block';
    }

    if (emailCheck.test(email.value)) {
        email.style.border = '';
        document.querySelector(`#${email.id}Err`).style.display = 'none';
    } else {
        email.style.border = '2px solid #f04d4d';
        document.querySelector(`#${email.id}Err`).style.display = 'block';
    }

    if (phoneCheck.test(phone.value) || phone.value === '') {
        phone.style.border = '';
        document.querySelector(`#${phone.id}Err`).style.display = 'none';
    } else {
        phone.style.border = '2px solid #f04d4d';
        document.querySelector(`#${phone.id}Err`).style.display = 'block';
    }

    if (formCheck.test(message.value)) {
        message.style.border = '';
        document.querySelector(`#${message.id}Err`).style.display = 'none';
    } else {
        message.style.border = '2px solid #f04d4d';
        document.querySelector(`#${message.id}Err`).style.display = 'block';
    }

    if (formCheck.test(name.value) && emailCheck.test(email.value) && (phoneCheck.test(phone.value) || phone.value === '') && formCheck.test(message.value)) {
        body = `name=${name.value}&userEmail=${email.value}&phone=${phone.value}&plainTextMessage=${message.value}`

        fetch('https://fwaldal.no/fed/emailFiles/simpleContact.php', {
            method: 'post',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: body
        })
            .then(resolve => {
                document.querySelector('#sendError').innerHTML = 'Your message was sent!';
                document.querySelector('#sendError').style.color = '#58bc6e';
            })
            .catch(error => {
                document.querySelector('#sendError').innerHTML = `Something went wrong sending the message.<br> Error: <i>${error}</i><br>Please try again, if the problem persists, contact site admin.`;
                document.querySelector('#sendError').style.color = '#f04d4d';
            })
    } else {
        document.querySelector('#sendError').innerHTML = 'Please correct the above fields.';
        document.querySelector('#sendError').style.color = '#f04d4d';
    }
}

function resetForm() {
    document.querySelector('#name').style.border = '';
    document.querySelector(`#nameErr`).style.display = 'none';
    document.querySelector('#email').style.border = '';
    document.querySelector(`#emailErr`).style.display = 'none';
    document.querySelector('#phone').style.border = '';
    document.querySelector(`#phoneErr`).style.display = 'none';
    document.querySelector('#message').style.border = '';
    document.querySelector(`#messageErr`).style.display = 'none';
    document.querySelector('#sendError').innerHTML = '';
}

function checkField(e) {
    var formCheck = /[A-Za-z0-9\- .]+/;
    var emailCheck = /^[a-z0-9\.\-_+!#$%&'*/=?\^`{}~|]+@([a-z0-9\-]+\.)+[a-z]{2,4}$/i;
    var phoneCheck = /^\+[0-9]{1,3}[0-9]{3,12}$/;

    var id = e.target.id + 'Err';

    if (e.target.id === 'email') {

        if (emailCheck.test(e.target.value)) {
            e.target.style.border = '';
            document.querySelector(`#${id}`).style.display = 'none';
        } else {
            e.target.style.border = '2px solid #f04d4d';
            document.querySelector(`#${id}`).style.display = 'block';
        }
    } else if (e.target.id === 'phone') {
        if (phoneCheck.test(e.target.value) || e.target.value === '') {
            e.target.style.border = '';
            document.querySelector(`#${id}`).style.display = 'none';
        } else {
            e.target.style.border = '2px solid #f04d4d';
            document.querySelector(`#${id}`).style.display = 'block';
        }
    } else {
        if (formCheck.test(e.target.value)) {
            e.target.style.border = '';
            document.querySelector(`#${id}`).style.display = 'none';
        } else {
            e.target.style.border = '2px solid #f04d4d';
            document.querySelector(`#${id}`).style.display = 'block';
        }
    }
}

document.querySelector('#submit').addEventListener('click', sendMessage);

document.querySelector('#reset').addEventListener('click', resetForm);

function eventListeners() {
    var inputs = document.querySelectorAll('fieldset input');
    var inputListeners = [];
    for (i=0;i<3;i++) {
        inputListeners.push(inputs[i]);
    }
    inputListeners.push(document.querySelector('textarea'));
    inputListeners.forEach(item => {
        item.addEventListener('blur', checkField);
    });
}

eventListeners();
