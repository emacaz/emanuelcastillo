// get current year
// let currentYear = document.getElementById('current_year_id');
// year =  new Date().getFullYear();
// currentYear.innerHTML = year

let open_menu_btn = document.getElementById("btn_menu_id");
let menu_id = document.getElementById("menu");
let close_menu_btn = document.getElementById('close-menu-btn');
let show_all_about_info_btn = document.getElementById('show_all_about_btn_id');
let show_all_experience_btn = document.getElementById("show_all_experiece_id")


open_menu_btn.addEventListener("click", function(e) {
    e.preventDefault();
    menu_id.style.left = "0%";
    menu_id.style.width = "100vw";
    menu_id.style.backgroundColor = "#6fe64a59";
    document.body.style.position = "fixed";

})

close_menu_btn.addEventListener("click", function(e){

    e.preventDefault();;
    menu_id.style.left = "-100vw";
    document.body.style.position = "unset";
    menu_id.style.backgroundColor = "unset";
})

document.getElementById("go_home_id").addEventListener("click", function(e) {
    e.preventDefault();;
    menu_id.style.left = "-100vw";
    document.body.style.position = "unset";
    menu_id.style.backgroundColor = "unset";
})

document.getElementById("go_about_id").addEventListener("click", function(e) {
    e.preventDefault();;
    menu_id.style.left = "-100vw";
    document.body.style.position = "unset";
    menu_id.style.backgroundColor = "unset";
    document.getElementById("about-section-id").scrollIntoView({behavior: 'smooth'});
})

document.getElementById("go_project_id").addEventListener("click", function(e) {
    e.preventDefault();;
    menu_id.style.left = "-100vw";
    document.body.style.position = "unset";
    menu_id.style.backgroundColor = "unset";
    document.getElementById("project-section-id").scrollIntoView({behavior: 'smooth'});
})

document.getElementById("go_experience_id").addEventListener("click", function(e) {
    e.preventDefault();;
    menu_id.style.left = "-100vw";
    document.body.style.position = "unset";
    menu_id.style.backgroundColor = "unset";
    document.getElementById("experience-section-id").scrollIntoView({behavior: 'smooth'});
})

document.getElementById("go_contact_id").addEventListener("click", function(e) {
    e.preventDefault();;
    menu_id.style.left = "-100vw";
    document.body.style.position = "unset";
    menu_id.style.backgroundColor = "unset";
    document.getElementById("contact-section-id").scrollIntoView({behavior: 'smooth'});
})

show_all_about_info_btn.addEventListener("click", function(e) {
    e.preventDefault();

    if (show_all_about_info_btn.textContent === "Show All") {
        document.getElementById('description-second-paragraph').style.display = "block";
        show_all_about_info_btn.textContent = "Show Less";

    } else {
        document.getElementById('description-second-paragraph').style.display = "none";
        show_all_about_info_btn.textContent = "Show All";
    }
})


show_all_experience_btn.addEventListener("click", function(e) {
    e.preventDefault();
    let hidden_experience = document.getElementsByClassName("hidden-experience-desktop");

    if (show_all_experience_btn.textContent === "Show All") {
        
        for (let experience of hidden_experience) {
            experience.style.display = "block";
        }
        show_all_experience_btn.textContent = "Show Less";
    } else {
        show_all_experience_btn.textContent = "Show All";
        for (let experience of hidden_experience) {
            experience.style.display = "none";
        }
    }
})