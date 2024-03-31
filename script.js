

document.addEventListener("DOMContentLoaded", function() {
    fetchQuranChapters();
});

function fetchQuranChapters() {
    fetch('https://api.quran.com/api/v4/chapters')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const chapters = data.chapters;
            displayQuranChapters(data.chapters);
        })
        .catch(error => {
            console.error('Error fetching Quran chapters:', error);
        });
}

function displayQuranChapters(chapters) {
    const quranChaptersList = document.querySelector('.quran-chapters-list');
    chapters.forEach(chapter => {
        const listItem = document.createElement('li');
        listItem.textContent = `${chapter.id}. ${chapter.name}`;
        quranChaptersList.appendChild(listItem);
    });
}
function navigateToNewPage() {
    console.log("Button clicked");
    window.location.href = "recitation_page.html"; 
}
