
function BonClick(myId) {
    if(document.getElementById(myId).style.backgroundColor == 'red'){
        document.getElementById(myId).style.backgroundColor = 'green';
    }else{
        document.getElementById(myId).style.backgroundColor = 'red';
    }
    console.log('bonclick')
}
