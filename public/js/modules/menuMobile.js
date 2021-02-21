export default function initMenuMobile(){
    const menuMobile = document.querySelector('[data-menu-mobile="menu"]')
    const menuHamburger = document.querySelector('[data-menu-mobile="bar"]')
    const subMenuMobile = document.querySelector('[data-menu-mobile="menu-mobile"]')
    const over = document.querySelector('[data-menu-mobile="over"]')

    function menuToggle(item){
        item.classList.toggle('ativar')
    }

    menuHamburger.addEventListener('click', function(){
        menuToggle(menuMobile)
    })

    subMenuMobile.addEventListener('click', function(){
        menuToggle(subMenuMobile)
    })

    over.addEventListener('click', function(){
        menuToggle(menuMobile)
    })
}