var experience = {
    company_name,
    designation,
    tenure
}

experience.company_name = prompt("Where do you work?");
experience.designation = prompt(`what is your position/designation at ${experience.company_name}?`);
experience.tenure = prompt("Duration/tenure?");

document.querySelector("#company_name").innerHTML = experience.company_name;
document.querySelector("#designation").innerHTML = experience.designation;
document.querySelector("#tenure").innerHTML = experience.tenure;
