$('tr[data-href]').on('click', (row) => {
    let href = row.currentTarget.getAttribute('data-href');
    window.location.href = href
})

function getTodayDate(){
    const date = new Date();
    const dateDay = date.getDate();
    const dateMonth = date.getMonth() + 1;
    const dateYear = date.getFullYear();

    return `${dateYear}-${'0' + dateMonth}-${dateDay}`;
}

document.querySelectorAll('input[type=date]')[1].value = getTodayDate()
