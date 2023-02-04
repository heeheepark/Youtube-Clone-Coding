const moreBtn = document.querySelector('.subject .subject_text .moreBtn');
const subject_name = document.querySelector('.subjext .subject_text .subject_name');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    subject_name.classList.toggle('clamp');
});