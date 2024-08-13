function makered(){
    document.body.style.backgroundColor = 'red'
}
// sustem 2 

const purple = document.getElementById('purple');
purple.onclick  = makepurple;


function makepurple(){
    document.body.style.backgroundColor = 'purple'
}

// system 3

const blue  = document.getElementById('blue');
blue.onclick = function(){
    document.body.style.backgroundColor = 'blue'
}


// system 4..........

const pink = document.getElementById('pink').addEventListener('click',makepink);

function makepink(){
    document.body.style.backgroundColor = 'pink'
}


// system 5

const tomato = document.getElementById('tomato').addEventListener('click', function(){
    document.body.style.backgroundColor = 'tomato'
})


// .................

function change(){
    const change = document.getElementById('text');
    change.innerText = 'ami changed'
}

// another

document.getElementById('event').addEventListener('click', function () {
    const change = document.getElementById('text');
    change.innerText = 'change by add event listner'
})