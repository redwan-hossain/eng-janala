const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(data => {
            displayLesson(data.data);
        })
}


const removeActiveClassBtn =() => {
    const primeBtn = document.querySelectorAll(".primaryBtn");
    primeBtn.forEach(btn => {
        btn.classList.remove('active');
    })
    console.log(primeBtn);
}


const loadLevelWord = (id) => {
    const url = (`https://openapi.programming-hero.com/api/level/${id}`)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            removeActiveClassBtn();
            const clickBtn = document.getElementById(`lesson-btn-${id}`)
            clickBtn.classList.add('active');
            displayLevelWord(data.data);
        })
}

const displayLevelWord = (words) => {

    const wordContainer = document.querySelector("#word-container");
    wordContainer.innerHTML = "";

    if (words.length === 0) {
        wordContainer.innerHTML = `
        
        <div class="bangla-font text-center text-gray-400 col-span-full py-10 px-5 space-y-5">

         <img class ="mx-auto" src="./assets/alert-error.png" alt="">

            <h1 class="text-xl font-semibold">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</h1>
            <p class="font-bold text-4xl">নেক্সট Lesson এ যান</p>
        </div>

        `
    }


    words.forEach(word => {
        wordContainer.innerHTML += `
    <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
            <h1 class="font-bold text-2xl">${word.word}</h1>
            <p class="font-semibold">meaning/pronounce</p>
            <div class="bangla-font text-2xl font-medium">${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"}/>${word.pronunciation}</div>

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
        
                              <button id ="lesson-btn-${lesson.level_no}" onclick ="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary primaryBtn"><i class="fa-solid fa-book-open"></i>Lesson- ${lesson.level_no}
                                </button>

        `
        lesson_container.appendChild(btnDiv);

    });
}


loadLesson();