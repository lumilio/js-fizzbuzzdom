
const theList = document.querySelector('#list');

for (let i = 1; i <= 100; i++ ){
    const theBox = document.createElement("li");
    theBox.append(i)
    theList.append(theBox)
} 






