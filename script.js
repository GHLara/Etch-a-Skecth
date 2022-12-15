const small = document.getElementById('small')
const medium = document.getElementById('medium')
const big = document.getElementById('big')
const container = document.getElementById('container');
const color = document.getElementById('color-selector')

function sketch(){
    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener('mousemove', () => {
            item.style.backgroundColor = color.value
        })
    })
}

function GridResize(NewSize){
        const deletedSquare = document.querySelectorAll('.square')
        deletedSquare.forEach(item => {item.remove()})
        for(let i = 1; i <= (NewSize * NewSize); i++){
            const square = document.createElement('div');
            square.classList.add('square')
            square.style.border = '0.2px solid antiquewhite'
            square.style.backgroundColor = 'white'
            container.appendChild(square)
        }
        container.style.gridTemplateColumns = `repeat(${NewSize}, auto)`;
        container.style.gridTemplateRows = `repeat(${NewSize}, auto)`;
        sketch()
}

GridResize(16)
sketch()

small.addEventListener('click', () => {
    GridResize(16);
})

medium.addEventListener('click', () => {
    GridResize(32);
})

big.addEventListener('click', () => {
    GridResize(64);
})

