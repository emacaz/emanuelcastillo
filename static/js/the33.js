let = show_steps_btn = document.getElementById("show_all_steps_btn");

show_steps_btn.addEventListener("click", function(e) {
    e.preventDefault();
    if (show_steps_btn.textContent === "Show All") {
        document.getElementById("right_steps_div").style.display = "block"
        show_steps_btn.textContent = "Show Less"
    } else {
        document.getElementById("right_steps_div").style.display = "none"
        show_steps_btn.textContent = "Show All"; 
    }
})