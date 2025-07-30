let skillList = [{
        skillName: "HTML",
        uniqueNo: 1,
    },
    {
        skillName: "CSS",
        uniqueNo: 2,
    },
    {
        skillName: "JavaScript",
        uniqueNo: 3,
    }
];

let skillsContainerElement = document.getElementById("skillListContainer");
 
function colorchange(checkboxId, labelId) {
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("color");
}

function createAndAppendSkill(skill) {
    let checkboxId = "checkbox" + skill.uniqueNo;
    let labelId = "label" + skill.uniqueNo;

    let skillElement = document.createElement("li");
    skillElement.classList.add("p-1");
    skillsContainerElement.appendChild(skillElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    skillElement.appendChild(inputElement);
    inputElement.onclick = function() {
        colorchange(checkboxId, labelId);
    }

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = skill.skillName;
    skillElement.appendChild(labelElement);




}
for (let skill of skillList) {
    createAndAppendSkill(skill);
}