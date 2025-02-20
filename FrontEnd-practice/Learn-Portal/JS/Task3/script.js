const form = document.querySelector('#userForm');
const userNameInput = document.querySelector('#userName');
const userEmailInput = document.querySelector('#userEmail');
const usersTable = document.querySelector('#usersTable tbody');
const submitButton = form.querySelector('button[type="submit"]');

let editMode = false;
let editUserId = null;

form.addEventListener('submit', function(e) {
e.preventDefault();
const userName = userNameInput.value.trim();
const userEmail = userEmailInput.value.trim();

if (editMode) {
    document.querySelector(`#user-${editUserId}`).innerHTML = `
        <td>${userName}</td>
        <td>${userEmail}</td>
        <td>
            <button onclick="editUser('${editUserId}', '${userName}', '${userEmail}')">Edit</button>
            <button onclick="deleteUser('${editUserId}')">Delete</button>
        </td>`;
    editMode = false;
    form.reset();
    submitButton.textContent = 'Add User'; 
} else {
    const userId = Date.now().toString();
    usersTable.innerHTML += `
        <tr id="user-${userId}">
            <td>${userName}</td>
            <td>${userEmail}</td>
            <td>
                <button onclick="editUser('${userId}', '${userName}', '${userEmail}')">Edit</button>
                <button onclick="deleteUser('${userId}')">Delete</button>
            </td>
        </tr>`;
    form.reset();
}
updateTableVisibility();
});

window.editUser = (userId, name, email) => {
userNameInput.value = name;
userEmailInput.value = email;
submitButton.textContent = 'Edit User'; 
editMode = true;
editUserId = userId;
};

window.deleteUser = (userId) => {
document.querySelector(`#user-${userId}`).remove();
if (editMode && editUserId === userId) {
    editMode = false;
    form.reset();
    submitButton.textContent = 'Add User'; 
}
updateTableVisibility();
};

function updateTableVisibility() {
    const table = document.querySelector('#usersTable');
    if (usersTable.children.length === 0) {
        table.style.display = 'none';
    } else {
        table.style.display = 'table';
    }
}

updateTableVisibility();