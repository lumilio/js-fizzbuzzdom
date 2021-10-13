
const theList = document.querySelector('#lista');

for (let i = 1; i <= 100; i++ ){
    const theBox = document.createElement("box");
    theBox.append(i)
    theList.append(theBox)
} 






