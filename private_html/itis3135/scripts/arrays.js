const person = []
const salary = []

function addSalary(){
    const newperson = document.getElementById('employee').options[document.getElementById('employee').selectedIndex].value
    const moners = parseFloat(document.getElementById('salary').value)
    if(moners>0&&!(person.includes(newperson))){
        person.push(newperson);
        salary.push(moners);
        document.getElementById('error').innerHTML = null
    }
    else if(moners<0){
        document.getElementById('error').innerHTML = "Please enter an appropriate salary"
    }
    else{
        document.getElementById('error').innerHTML = "No Duplicates please"
    }
}

function displayResults(){
    document.getElementById('results table').innerHTML = null
    const average = ((salary.reduce((sum, mony) => sum + mony, 0))/salary.length)
    const highest = Math.max(...salary);
    const output = `<h2>Results</h2><br><p>Average Salary: $${average.toFixed(2)}</p><br><p>Highest Salary: $${highest.toFixed(2)}</p>`;
    document.getElementById('results').innerHTML = output
}

function displaySalary(){
    document.getElementById('results').innerHTML = null
    let table = '<h2>Table of Salaries</h2><br><tr><td>Employee</td><td>Salary</td></tr>'
    for(let i = 0; i < salary.length; i++){
        sin = person[i.toString]
        table+=`<tr><td>${person[i]}</td><td>$${salary[i]}</td></tr>`
    }
    document.getElementById('results table').innerHTML = table
}

document.getElementById('dissal').addEventListener('click', displaySalary)
document.getElementById('disres').addEventListener('click', displayResults)
document.getElementById('addsal').addEventListener('click', addSalary)