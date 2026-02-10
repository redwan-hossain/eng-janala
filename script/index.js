const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(data => {
            displayLesson(data.data);
        })
}


const displayLesson = (lessons) => {

    const lesson_container = document.querySelector("#lesson-container");
    lesson_container.innerHTML = "";

    lessons.forEach(lesson => {
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        
                              <button class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson- ${lesson.level_no}
                                </button>

        `
        lesson_container.appendChild(btnDiv);
        
    });
}


loadLesson();