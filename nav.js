(function () {
    const toggle = document.querySelector(".navbar__toggle");
    const menu = document.getElementById("navbar-menu");
    if (!toggle || !menu) return;

    function setOpen(open) {
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
        menu.classList.toggle("is-open", open);
    }

    toggle.addEventListener("click", () => {
        setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    menu.addEventListener("click", (e) => {
        if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") setOpen(false);
    });
})();
