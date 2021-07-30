import { getInteriorMaterials } from "./database";
const interiorMaterials = getInteriorMaterials();

// document.addEventListener("change", (event) => {
//   if (event.target.name === "interiorMaterial") {
//     setSize(parseInt(event.target.value));
//   }
// });

export const InteriorMaterials = () => {
  let html = "<ul>";

  const listItems = interiorMaterials.map((interiorMaterial) => {
    return `<li>
            <input type="radio" name="interiorMaterial" value="${interiorMaterial.id}" /> ${interiorMaterial.material}
        </li>`;
  });

  html += listItems.join("");
  html += "</ul>";

  return html;
};
