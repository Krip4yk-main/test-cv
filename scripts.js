let theme = 'DARK';

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function() {
    let availWidth = window.screen.availWidth
    let width = availWidth*0.9
    document.getElementById('main').style.width = width.toFixed()
    console.log(width.toFixed())
});

function changeTheme() {
    let myHeaderStyle = document.getElementById('my-header').style
    let subHeaderStyle = document.getElementById('sub-header').style
    let buttons = document.getElementsByClassName('button')
    let logoStyle = document.getElementById('logo').style
    let bodyStyle = document.body.style
    // let textStyle = document.getElementById('text').style

    if (theme === 'DARK') {
        myHeaderStyle.backgroundColor = '#C81414'
        subHeaderStyle.backgroundColor = '#202020'
        subHeaderStyle.borderColor = '#323232'
        for (let button of buttons) {
            let buttonStyle = button.style
            buttonStyle.background = '#282828 linear-gradient(#323232, #202020)'
            buttonStyle.color = '#CCC'
            buttonStyle.border = '1px solid #202020'
            buttonStyle.boxShadow = 'inset 0 1px 0 rgb(0 0 0 / 10%), 0 1px 1px rgb(255 255 255 / 40%)'
        }
        logoStyle.filter = 'invert()'
        bodyStyle.backgroundImage = 'url("assets/images/image-2.png")'
        // textStyle.filter = 'invert()'

        theme = 'BRIGHT'
    } else {
        myHeaderStyle.backgroundColor = '#4073B4'

        subHeaderStyle.backgroundColor = '#ffcc00'
        subHeaderStyle.borderColor = '#f0b500'
        for (let button of buttons) {
            let buttonStyle = button.style
            buttonStyle.background = '#FFE788 linear-gradient(#ffe788, #ffce38)'
            buttonStyle.color = '#333'
            buttonStyle.border = '1px solid #dba500'
            buttonStyle.boxShadow = 'inset 0 1px 0 rgb(255 255 255 / 40%), 0 1px 1px rgb(0 0 0 / 10%)'
        }
        logoStyle.filter = 'none'
        bodyStyle.backgroundImage = 'url("assets/images/background.png")'
        // textStyle.filter = 'none'

        theme = 'DARK'
    }
}

function openGitHub() {
    window.open('https://github.com/Krip4yk-main/CV')
}