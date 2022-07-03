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
    location.reload()
}
function show() {
    details = JSON.parse(localStorage.getItem("member"));
    let t = ""
    let b = ""
    for (let i = 0; i < details; i++) {
        t += `<h2 class="note_title" id="notetitle">${details[i].title}</h2>`
        t += `<p class="note_body" id="notebody">${details[i].note}</p>`
        t += `<button class="note_btn note_view">View Detail</button>
        </td><td><button class="note_btn note_delete">Delete Note</button></td>` 
        console.log(details[i])
    }
    display.innerHTML = t;
    // details = JSON.parse(localStorage.getItem("member"));
    // let t = "";
    // for (let i = 0; i < details.length; i++) {
    //     t += `<tr>`
    //     t += `<th>${details[i].title}</th>`
    //     t += `</tr>`
    //     t += `<tr>`
    //     t += `<td>${details[i].note}</td>`
    //     t += `</tr>`
    //     console.log(details[i])
    // }
    // display.innerHTML = t;
    // details = JSON.parse(localStorage.getItem("member"));
    // let t = ""
    // for (let i = 0; i < details.length; i++) {
    //     t += `<tr>`
    //     t += `<td>${details[i].title}</td><td><button class='btn btn-danger' onclick='dele("+i+")'>delet</button></td><td><button class='btn btn-primary' onclick='edit("+i+")'>edit</button></td>`
    //     t += `</tr>` 
    //     console.log(details[i])
    // }
    // display.innerHTML = t;
}