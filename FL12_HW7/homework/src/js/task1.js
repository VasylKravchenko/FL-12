let user = prompt('Enter your login:', 'Your login');
const emailLenght = 5;
const passwordLenght = 6;
let emailUser = 'user@gmail.com';
let emailAdmin = 'admin@gmail.com';

if (user === emailUser || user === emailAdmin) {
    let password = prompt('Enter your password', '');
    if (user === emailUser && password === 'UserPass' || user === emailAdmin && password === 'AdminPass') {
        let changePaswAsk = confirm('Do you want to change your password?');
        if (changePaswAsk === false) {
            alert('You have failed the change.');
        } else if (changePaswAsk === true) {
            let password = prompt('Enter your old password', '');
            if (user === emailUser && password === 'UserPass' || user === emailAdmin && password === 'AdminPass') {
                let newPassword = prompt('Enter new password', '');
                if (!newPassword) {
                    alert('Canceled');
                } else if (newPassword.length < passwordLenght) {
                    alert('It\'s too short password. Sorry.');
                } else if (prompt('Enter new password again', '') !== newPassword) {
                    alert('You wrote the wrong password.');
                } else {
                    alert('You have successfully changed your password.');
                }
            } else if (password === '' || password === null) {
                alert('Canceled.');
            } else {
                alert('Wrong password')
            }
        }
    } else if (password === '' || password === null) {
        alert('Canceled.');
    } else {
        alert('Wrong password')
    }
} else if (user === '' || user === null) {
    alert('Canceled.');
} else if (user.length < emailLenght) {
    alert('I don\'t know any emails having name length less than' + emailLenght + 'symbols');
} else {
    alert('I don’t know you');
}
