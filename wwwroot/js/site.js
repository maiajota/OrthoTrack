// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$('tr[data-href]').on('click', (row) => {
    let href = row.currentTarget.getAttribute('data-href');
    window.location.href = href
})