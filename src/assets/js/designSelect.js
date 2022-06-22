const select = document.querySelector("#type-system")
const option = document.querySelectorAll("[data-option]")
const selectEvent = (e) => {
    if (e.type == "click") {
        if (select.classList.contains("form__select--open")) {
            select.classList.remove("form__select--open")
        } else {
            select.classList.add("form__select--open")
        }
    }
    if (e.type == "blur") {
        select.classList.remove("form__select--open")
    }
}
const changeSelectValue = (e) => {
    const value = e.target.innerText
    select.value = value
}
select.addEventListener("blur", selectEvent)
select.addEventListener("click", selectEvent)
option.forEach(elem => elem.addEventListener('click', changeSelectValue))

