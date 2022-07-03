
function BonClick(myId) {
    if(document.getElementById(myId).style.backgroundColor == 'red'){
        document.getElementById(myId).style.backgroundColor = 'green';
    }else{
        document.getElementById(myId).style.backgroundColor = 'red';
    }
    console.log('bonclick')
}

var sel1 = document.getElementById('select1');

if(!localStorage.getItem('select1')) {
    populateStorage();
} 
else {
    setStyles();
}

function populateStorage() {
    console.log('populateStorage call');
    localStorage.setItem('select1',document.getElementById('select1').value);
    // localStorage.setItem('select1', document.getElementById('select1').value);
    // setStyles();
}
  
function setStyles() {
    console.log('setStyles call');
    var currentSelect1 = localStorage.getItem('select1');
    // document.getElementById('select1').value = currentSelect1;
  }
  
