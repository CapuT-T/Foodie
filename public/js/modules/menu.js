export default function initSubMenu(){
    const menu = document.querySelector('[data-menu="sub-menu"]')
    const subMenu = document.querySelector('[data-menu="sub-menu"] ul')
    
    
    function ativarMenu(){
        menu.classList.toggle('ativar')
        subMenu.classList.toggle('ativar')
    }
    
    menu.addEventListener('mouseover', ativarMenu)
    menu.addEventListener('mouseout', ativarMenu)
}

