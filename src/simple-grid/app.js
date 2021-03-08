document.onload = addEventListener('load',()=>{
    clicked.style.display = 'none'
})

clickVisible = () =>{
    var click   = document.getElementById('clickme')
    var clicked = document.getElementById('clicked')

    if(click){
        clicked.style.display = 'none'
        click.style.display   = 'flex'
    }if(clicked){
        click.style.display   = 'none'
        clicked.style.display = 'flex'
    }
}
clickedVisible = () =>{
    var click   = document.getElementById('clickme')
    var clicked = document.getElementById('clicked')

    if(clicked){
        click.style.display   = 'none'
        clicked.style.display = 'flex'
    } if(click){
        clicked.style.display = 'none'
        click.style.display   = 'flex'
    }
}