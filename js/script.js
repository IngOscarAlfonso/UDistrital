const Card = document.querySelector("[data-card]");
const Name = document.querySelector("[data-name]");
const Img = document.querySelector("[data-img]");
const ImgContainer = document.querySelector("[data-img-container]");
const Id = document.querySelector("[data-id]");
const Types = document.querySelector("[data-types]");
const Stats = document.querySelector("[data-stats]");

const typeColors = {
  normal: "#FFEA70",
  effect: "#B09398",
  ritual: "#FF675C",
  fusion: "#0596C7",
  fusion: "#AFEAFD",
  synchro: "#999799",
  xyz: "#7AE7C7",
  link: "#4A9681",
  normal_pendulum: "#FFC6D9",
  effect_pendulum: "#561D25",
  ritual_pendulum: "#A2FAA3",
  fusion_pendulum: "#795663",
  syncro_pendulum: "#D2B074", 
  xyz_pendulum: "#DA627D",
  spell: "#1D8A99",
  trap: "#2F2F2F",
  token: "#2F2F2F",
  skill: "#2F2F2F",
  default: "#00000",
};

function YBuscar() {
  fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
    .then((response) => response.json())
    .then((datas) => {
      console.log(datas);
      const carta = document.getElementById("YugiCarta").value;
      console.log(carta);
      if( carta < 0 || carta >12475){
        alert("Ingrese un # de carta valido")
      }
      else{
      const {
        data: {
          [carta]: {
            desc,
            frameType,
            id,
            name,
            type,
            atk,
            def,
            card_images: {
              0: { image_url_cropped },
            },
          },
        },
      } = datas;
      console.log(image_url_cropped);
      console.log(atk);
      console.log(def);

      Name.textContent = name;

      Img.setAttribute("src", image_url_cropped);
      Id.textContent = `Nº ${id}`;

      Types.innerHTML = "";
      const typeTextElement = document.createElement("div");
      typeTextElement.style.color = type.default;
      typeTextElement.textContent = frameType;
      Types.appendChild(typeTextElement);
      Card.style.backgroundColor = typeColors[frameType];

      Stats.innerHTML = "";
      const statElement = document.createElement("div");
      const statElementName = document.createElement("div");
      const statElementAmount = document.createElement("div");
      const statElementName1 = document.createElement("div");
      const statElementAmount1 = document.createElement("div");
      statElementAmount.textContent = atk;
      statElementName.textContent = "Ataque: ";
      statElementAmount1.textContent = def;
      statElementName1.textContent = "Defensa: ";
      statElement.appendChild(statElementName);
      statElement.appendChild(statElementAmount);
      statElement.appendChild(statElementName1);
      statElement.appendChild(statElementAmount1);
      Stats.appendChild(statElement);
}});
  
}
