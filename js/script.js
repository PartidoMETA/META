function toggleCV() {
    const teamSection = document.getElementById("teamSection");
    if (teamSection.style.display === "none" || teamSection.style.display === "") {
        teamSection.style.display = "block";
    } else {
        teamSection.style.display = "none";
    }
}
