const todown = (t) => {
    document.getElementById("cuerpo").style.overflowY = "auto";

    setTimeout(() => {
        document.getElementById("all__hero").style.height = "0";
        document.getElementById("text__hero").style.visibility = "hidden"; // Cambié display por visibility
        document.getElementById("btn__container").style.visibility = "hidden"; // Cambié display por visibility

        // Ajuste de desplazamiento
        window.scrollTo({
            top: document.getElementById('init').offsetTop,
            behavior: 'smooth'
        });
    }, t);
};

const showme = (site, status) => {
    const card = document.getElementById(`card__${site}`);

    if (!card) return; // Evitar errores si el elemento no existe

    if (status === 'on') {
        card.style.top = "50%";
        card.style.opacity = "1";
    } else if (status === 'off') {
        card.style.top = "30%";
        card.style.opacity = "0";
    }

    console.log(`La sección de ${site} está en ${status}`);
};
