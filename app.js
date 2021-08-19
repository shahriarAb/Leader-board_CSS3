document.getElementById('top-player-title').style.color = 'darkred';
document.getElementById('top-blog-title').style.color = 'darkred';

const players = document.getElementsByClassName('player');
for(const player of players){
    player.style.backgroundColor = 'rgba(141, 141, 141, 0.2)';
}
document.getElementById('click-btn').addEventListener('click', function(){
    const addCourse = document.getElementById('add-course');
    const li = document.createElement('li');
    li.innerText = addCourse.value;
    document.getElementById('course-container').appendChild(li);
    addCourse.value = '';
})