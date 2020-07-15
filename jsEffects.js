document.write('Practice1:');

// create div 
let newDiv1 = document.createElement('div')
let newBr1 = document.createElement('br')
let newBr2 = document.createElement('br')
document.body.appendChild(newDiv1);
newDiv1.appendChild(newBr1);

//---------------------operations with arrays------------------------
let array1 = ['p', 'b', 'c'];
let array2 = [5, 2, 3];
let array3 = ['friend'];
document.write('1------concat------' + '<br/>')
//-- method 'concat'
let arraySum = array1.concat(array2, array3);
let i;
for (i in arraySum) {
    document.write('-' + 'element' + i + ':' + arraySum[i] + '<br />');
}
document.write('2-----sort,pop,shift-------' + '<br/>')
//-- method 'sort', 'pop'(delete last el),'shift'(delete first el)
let arraySort = array1.sort();
let arrayPop = arraySort.pop();
for (i in arraySort) {
    document.write('-' + 'element' + i + ':' + arraySort[i] + '<br />');
}
document.write('-' + 'element' + ':' + arrayPop + '<br />');

let arrayShift = array2.shift();
for (i in array2) {
    document.write('-' + 'element' + i + ':' + array2[i] + '<br />');
}
document.write('-' + 'element' + ':' + arrayShift + '<br />');
document.write('3-----slice-------' + '<br/>')
//-- method 'slice'
let arraySlice1 = arraySum.slice(1);
for (i in arraySlice1) {
    document.write('-' + 'element' + i + ':' + arraySlice1[i] + '<br />');
}
document.write('------------' + '<br/>')
let arraySlice2 = arraySum.slice(0, 2);
for (i in arraySlice2) {
    document.write('-' + 'element' + i + ':' + arraySlice2[i] + '<br />');
}
document.write('------------' + '<br/>')
let arraySlice3 = arraySum.slice(-2);
for (i in arraySlice3) {
    document.write('-' + 'element' + i + ':' + arraySlice3[i] + '<br />');
}
//-- method 'push','unshift'
document.write('4------push,unshift------' + '<br/>')
let array4 = array2.push(2);
for (i in array2) {
    document.write('-' + 'element' + i + ':' + array2[i] + '<br />');
}
let array5 = array1.unshift('g');
for (i in array1) {
    document.write('-' + 'element' + i + ':' + array1[i] + '<br />');
}
//-- method 'splice','delete'
document.write('5----splice,delete--------' + '<br/>')
let array6 = arraySum.splice(2,2);
for (i in arraySum) {
    document.write('-' + 'element' + i + ':' + arraySum[i] + '<br />');
}
delete arraySum[0];
for (i in arraySum) {
    document.write('-' + 'element' + i + ':' + arraySum[i] + '<br />');
}
//-- method 'split','reverse','join'
document.write('6----split,reverse, join--------' + '<br/>')
let array7 = array3[0].split('').reverse().join('');
let array8 = array3[0];
    document.write('-' + 'element' +  ':' + array7 + '<br />');
    document.write('-' + 'element' +  ':' + array8 + '<br />');
let array9 = array8.split('').sort().join('')
document.write('-' + 'element' +  ':' + array9 + '<br />');


//---------------------------------------------------------------------
// createElement, create next div
let newDiv2 = document.createElement('div');
document.body.appendChild(newDiv2);
newDiv2.className = 'practice2';

// insertBefore, insert space before div
document.body.insertBefore(newBr2, newDiv2);

// createTextNode, craete text and put into div
let elem1 = document.createElement("h2");
let newText = document.createTextNode('Practice2:');
newDiv2.appendChild(elem1);
elem1.appendChild(newText);

// textContent, insert text
let elem2 = document.createElement("p");
elem2.textContent = "Inserted text";
newDiv2.appendChild(elem2);

// cloneNode, clone text and put it to body
let div2 = document.querySelector("div.practice2");
let firstElem = div2.firstChild.nextSibling;
let title2 = firstElem.cloneNode(true);
document.body.appendChild(title2);

// find element and change style
let nav2 = document.getElementsByClassName('practice2');
nav2[0].style.background = 'red';
let nav3 = document.getElementById('article');
nav3.closest('.practice').style.background = 'yellow';

//removeChild, remove element
let removeFromNode = document.querySelector("div.practice");
let removableNode = document.querySelectorAll("div.practice p")[1];
removeFromNode.removeChild(removableNode);

//replaceChild, replace element
let oldNode = document.querySelectorAll("div.practice p")[0];
let newNode = document.querySelectorAll("div.practice hr")[0];
removeFromNode.replaceChild(newNode, oldNode)
//-------------------------------------------------------------
