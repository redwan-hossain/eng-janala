const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(data => {
            displayLesson(data.data);
        })
}


const loadLevelWord = (id) => {
    const url = (`https://openapi.programming-hero.com/api/level/${id}`)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayLevelWord(data.data);
        })
}

const displayLevelWord = (words) => {

    const wordContainer = document.querySelector("#word-container");
    wordContainer.innerHTML = "";

    words.forEach(word => {
        wordContainer.innerHTML += `
    <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
            <h1 class="font-bold text-2xl">${word.word}</h1>
            <p class="font-semibold">meaning/pronounce</p>
            <div class="bangla-fontt text-2xl font-medium">${word.meaning}/>${word.pronunciation}</div>

            <div class="flex justify-between items-center">
                <button class="btn"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn"><i class="fa-solid fa-volume-low"></i></button>
            </div>

        </div>

       `

    })
}

const displayLesson = (lessons) => {

    const lesson_container = document.querySelector("#lesson-container");
    lesson_container.innerHTML = "";

    lessons.forEach(lesson => {
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        
                              <button onclick ="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson- ${lesson.level_no}
                                </button>

        `
        lesson_container.appendChild(btnDiv);

    });
}


loadLesson();