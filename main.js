const arr = [];
Display();

function add() {
    let id1 = document.getElementById('id').value;
    let name1 = document.getElementById('name').value;
    let age1 = document.getElementById('age').value;
    let gender1 = document.getElementById('gender').value;
    let grade1 = document.getElementById('grade').value;
    let year1 = document.getElementById('year').value;
    let person = {
        'id': id1,
        'name': name1,
        'age': age1,
        'gender': gender1,
        'grade': grade1,
        'year': year1,
    }
    arr.push(person)
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('grade').value = '';
    document.getElementById('year').value = '';
    Display();
}

function xoa(i) {
    arr.splice(i, 1);
    Display()
}


function Display() {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        console.log(i)
        result += `
        <tr>
        <td>${arr[i].id}</td>
        <td>${arr[i].name}</td>
        <td>${arr[i].age}</td>
        <td>${arr[i].gender}</td>
        <td>${arr[i].grade}</td>
        <td>${arr[i].year}</td>
        <td><button onclick="xoa(${i})">Delete</button></td>
        <td><button type="button" onclick="sua(${i})">Edit</button></td>
    </tr>`
    }
    document.getElementById('noidung').innerHTML = result;
}


function sua(i) {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let grade = document.getElementById('grade').value;
    let year = document.getElementById('year').value;
    let person1 = {
        'id': id,
        'name': name,
        'age': age,
        'gender': gender,
        'grade': grade,
        'year': year,
    }
arr.splice(i,1,person1)
    Display()
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('grade').value = '';
    document.getElementById('year').value = '';
}
