document.addEventListener("DOMContentLoaded", () => {
    const btnTech = document.getElementById("btn-tech");
    const btnFounder = document.getElementById("btn-founder");
    const sectionTech = document.getElementById("tech-lead-content");
    const sectionFounder = document.getElementById("founder-content");

    // Toggle Logic
    btnTech.addEventListener("click", () => {
        btnTech.classList.add("active");
        btnFounder.classList.remove("active");
        
        sectionTech.classList.add("active-section");
        sectionTech.classList.remove("hidden-section");
        
        sectionFounder.classList.remove("active-section");
        sectionFounder.classList.add("hidden-section");

        document.body.classList.remove("founder-mode");
    });

    btnFounder.addEventListener("click", () => {
        btnFounder.classList.add("active");
        btnTech.classList.remove("active");
        
        sectionFounder.classList.add("active-section");
        sectionFounder.classList.remove("hidden-section");
        
        sectionTech.classList.remove("active-section");
        sectionTech.classList.add("hidden-section");

        document.body.classList.add("founder-mode");
    });

    // -----------------------------------------
    // FUTURE: WebGL Three.js Canvas Logic Here
    // -----------------------------------------
    console.log("V1 initialization complete. Ready for WebGL injection.");
});