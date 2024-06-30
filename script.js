const paletaCores = document.querySelectorAll(".colors-strips li span");
const carroSelecionado = document.querySelector(".car-img img");
const colecaoRodas = document.querySelectorAll(".wheels-collection li span");
let corSelecionada = "br";
let rodaSelecionada = "r1";

paletaCores.forEach((li) => {
  li.addEventListener("click", () => {
    paletaCores.forEach((span) => {
      span.classList.remove("selecionado");
    });

    li.classList.add("selecionado");

    corSelecionada = li.classList[0];
    updateCar();
  });
});

colecaoRodas.forEach((li) => {
  li.addEventListener("click", () => {
    colecaoRodas.forEach((span) => {
      span.classList.remove("selecionado");
    });

    li.classList.add("selecionado");
    rodaSelecionada = li.classList[0];
    updateCar();
  });
});

function updateCar() {
  carroSelecionado.src = `./images/p-${corSelecionada}-${rodaSelecionada}.jpeg`;
}
