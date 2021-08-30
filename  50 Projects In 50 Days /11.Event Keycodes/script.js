const insertEl = document.getElementById("insert")
window.addEventListener("keydown", (e) => {
    insertEl.innerHTML = `
    <div class="key">
        ${e.key === " " ? "Space" : e.key}
        <small>event.key</small>
    </div>
    <div class="key">
        ${e.keyCode}
        <small>event.Code</small>
    </div>
    <div class="key">
        ${e.code}
        <small>event.code</small>
    </div>
    `
})

