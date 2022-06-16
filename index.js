const form = document.getElementById('form')

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const firstname = form['firstname'].value;
    const lastname = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if(firstname === ''){
        addErrorTo('firstname', 'First Name cannot be empty');    
    } else {
        removeErrorFrom('firstname')
    }

    if(lastname === ''){
        addErrorTo('lastname', 'last Name cannot be empty');    
    } else {
        removeErrorFrom('lastname')
    }

    if(email === ''){
        addErrorTo('email', 'Email cannot be empty');    
    } else if (!isValid(email)){
        addErrorTo('email', 'Looks like this is not an email')
    } else {
        removeErrorFrom('email')
    }

    if(password === ''){
        addErrorTo('password', 'Password cannot be empty');   
    } else {
       removeErrorFrom('password')
    }

    // alert(firstname + lastname + email + password);
});

function addErrorTo(field, message){
    const control = form[field].parentNode
    control.classList.add('error')
    const para = form[field].parentNode.querySelector('p')
    para.innerText = message;
    para.style.opacity='1';
}

function removeErrorFrom(field){
    const control = form[field].parentNode
    control.classList.remove('error')
    const para = form[field].parentNode.querySelector('p')
    para.style.opacity='0';
}

function isValid(email){
    var property_test = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return property_test.test(String(email).toLowerCase());
}
