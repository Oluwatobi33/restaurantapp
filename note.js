details = [];
const save = () => {
    if (localStorage.member) {
        details = JSON.parse(localStorage.member)
    }
    var userTitle = title.value;
    var userNote = note.value;
    informatio = {
        title:userTitle,
        note:userNote,
    }
    details.push(informatio)
    localStorage.member = JSON.stringify(details);

    let t = "";
    details = JSON.parse(localStorage.getItem("member"));
    for (let i = 0; i < details.length; i++) {
        t += `<tr>`
        t += `<th>${details[i].title}</th>`
        t += `</tr>`
        t += `<tr>`
        t += `<td>${details[i].note}</td>`
        t += `</tr>`
        console.log(details[i])
    }
    display.innerHTML = t;
}