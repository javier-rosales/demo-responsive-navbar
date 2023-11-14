const primaryNav = document.querySelector(".primary-navigation")
const navToggle = document.querySelector(".mobile-nav-toggle")
const overlay = document.querySelector(".overlay")

const iconMenu = createIcon("menu")
const iconClose = createIcon("close")

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.dataset.visible

    removeAllChildNodes(navToggle)

    if (visibility === "false") {
        primaryNav.dataset.visible = true
        navToggle.appendChild(iconClose)
        overlay.dataset.active = true
    } else if (visibility === "true") {
        primaryNav.dataset.visible = false
        navToggle.appendChild(iconMenu)
        overlay.dataset.active = false
    }
})

overlay.addEventListener("click", () => {
    removeAllChildNodes(navToggle)
    primaryNav.dataset.visible = false
    navToggle.appendChild(iconMenu)
    overlay.dataset.active = false
})

function createIcon(type) {
    const icon = document.createElement("span")
    icon.classList.add("material-symbols-outlined")
    icon.classList.add("size-36")

    icon.textContent = type

    return icon
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}