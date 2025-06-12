function showSection(sectionId){
    let section = document.querySelectorAll(".content-section");
    section.forEach(section => {
        section.classList.add("hidden");
    });

    document.getElementById(sectionId).classList.remove("hidden");
}

function searchContent(){
    let input = document.getElementById("searchBar").value.tolowerCase();
    let sections = document.querySelectorAll(".content-section");

    section.forEach(section => {
        let text = section.innerText.toLowerCase();
        if (text.includes(input)){

            section.classList.remove("hidden");
        } else {

            section.classList.add("hidden");
        }
    });
}