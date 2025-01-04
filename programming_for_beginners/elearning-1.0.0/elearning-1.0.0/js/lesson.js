function toggleSection(sectionId) {
    const section = document.getElementById(`section-${sectionId}`);
    section.classList.toggle("hidden");
}
function goBack() {
    window.history.back();
}
