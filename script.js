
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
function showPage(pageId) {
    document.querySelectorAll(".page").forEach((page) => {
      page.classList.add("hidden"); // Hide all pages
    });
    document.getElementById(pageId).classList.remove("hidden"); // Show the selected page
  }
  