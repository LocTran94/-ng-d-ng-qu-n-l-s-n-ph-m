const arr = [];

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

        result += '<tr>\n' +
            '         <td>' + arr[i].id + '<button onclick="suaid('+ i +')" >Edit ID</button></td>\n' +
            '         <td>' + arr[i].name + ' <button onclick="suaname('+ i +')" >Edit Name</button></td>\n' +
            '         <td>' + arr[i].age + ' <button onclick="suaage('+ i +')" >Edit Age</button></td>\n' +
            '         <td>' + arr[i].gender + '<button onclick="suagender('+ i +')" >Edit Gender</button></td>\n' +
            '         <td>' + arr[i].grade + '<button onclick="suagrade('+ i +')" >Edit Gare</button></td>\n' +
            '         <td>' + arr[i].year + '<button onclick="suagyear('+ i +')" >Edit Year</button></td>\n' +
            ' <td><button onclick="xoa('+ i +')">Delete</button></td>\n' +

            '     </tr>'

    }
    document.getElementById('noidung').innerHTML = result;
}


function suaid(i) {
    let id2 = document.getElementById('id').value;

    let person2 = {
        'id': id2,
        'name': arr[i].name,
        'age': arr[i].age,
        'gender':  arr[i].gender,
        'grade': arr[i].grade,
        'year': arr[i].year,
    }
arr.splice(i,1,person2)

    Display();
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('grade').value = '';
    document.getElementById('year').value = '';
}






function suaname(i) {
    let name2 = document.getElementById('name').value;

    let person3 = {
        'id': arr[i].name,
        'name': name2,
        'age': arr[i].age,
        'gender':  arr[i].gender,
        'grade': arr[i].grade,
        'year': arr[i].year,
    }
    arr.splice(i,1,person3)

    Display();
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('grade').value = '';
    document.getElementById('year').value = '';
}



function suaage(i) {
    let age2 = document.getElementById('age').value;

    let person4 = {
        'id': arr[i].id,
        'name': arr[i].name,
        'age': age2,
        'gender':  arr[i].gender,
        'grade': arr[i].grade,
        'year': arr[i].year,
    }
    arr.splice(i,1,person4)

    Display();
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('grade').value = '';
    document.getElementById('year').value = '';
}



function suagender(i) {
    let gender2 = document.getElementById('gender').value;

    let person5 = {
        'id': arr[i].id,
        'name': arr[i].name,
        'age': arr[i].age,
        'gender': gender2 ,
        'grade': arr[i].grade,
        'year': arr[i].year,
    }
    arr.splice(i,1,person5)

    Display();
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('grade').value = '';
    document.getElementById('year').value = '';
}


function suagrade(i) {
    let grade2 = document.getElementById('grade').value;

    let person6 = {
        'id': arr[i].id,
        'name': arr[i].name,
        'age': arr[i].age,
        'gender': arr[i].gender ,
        'grade': grade2 ,
        'year': arr[i].year,
    }
    arr.splice(i,1,person6)

    Display();
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('grade').value = '';
    document.getElementById('year').value = '';
}


function suagyear(i) {
    let year2 = document.getElementById('year').value;

    let person7 = {
        'id': arr[i].id,
        'name': arr[i].name,
        'age': arr[i].age,
        'gender': arr[i].gender ,
        'grade': arr[i].grade ,
        'year': year2,
    }
    arr.splice(i,1,person7)

    Display();
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('grade').value = '';
    document.getElementById('year').value = '';
}
