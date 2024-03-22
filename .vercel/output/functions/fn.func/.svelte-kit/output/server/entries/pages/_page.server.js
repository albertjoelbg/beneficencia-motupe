const aniversario = "/_app/immutable/assets/aniversario.9iXku0hG.jpg";
const programa = "/_app/immutable/assets/programa.6FhR7kc5.jpg";
const reunion = "/_app/immutable/assets/reunion.C4s0sDiC.jpg";
function load() {
  return {
    imagenes: [
      {
        alt: "Aniversario",
        src: aniversario
      },
      {
        alt: "Programa",
        src: programa
      },
      {
        alt: "Reunion",
        src: reunion
      }
    ]
  };
}
export {
  load
};
