const totalLessons = 100; // يمكن تغييره لاحقاً

function getCompletedLessons(){
let count = 0;

for(let i = 1; i <= totalLessons; i++){
if(localStorage.getItem("lesson_" + i) === "true"){
count++;
}
}

return count;
}

function getProgressPercentage(){
let completed = getCompletedLessons();
return Math.floor((completed / totalLessons) * 100);
}