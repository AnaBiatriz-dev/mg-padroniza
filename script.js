const secoes = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let secaoAtual = "";

    secoes.forEach(secao => {
        const topo = secao.offsetTop - 150;
        const altura = secao.offsetHeight;

        if (window.scrollY >= topo && window.scrollY < topo + altura) {
            secaoAtual = secao.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("ativo");

        if (link.getAttribute("href") === "#" + secaoAtual) {
            link.classList.add("ativo");
        }
    });
});