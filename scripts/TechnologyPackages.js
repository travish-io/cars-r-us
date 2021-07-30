import { getTechnologyPackages } from "./database";

const technologyPackages = getTechnologyPackages();
// document.addEventListener("change", (event) => {
//   if (event.target.name === "technologyPackage") {
//     setSize(parseInt(event.target.value));
//   }
// });

export const TechnologyPackages = () => {
  let html = "<ul>";

  const listItems = technologyPackages.map((technologyPackage) => {
    return `<li>
            <input type="radio" name="technologyPackage" value="${technologyPackage.id}" /> ${technologyPackage.package}
        </li>`;
  });

  html += listItems.join("");
  html += "</ul>";

  return html;
};
