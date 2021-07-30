import { getWheelStyles } from "./database";

const wheelStyles = getWheelStyles();
// document.addEventListener("change", (event) => {
//   if (event.target.name === "wheelStyle") {
//     setSize(parseInt(event.target.value));
//   }
// });

export const WheelStyles = () => {
  let html = "<ul>";

  const listItems = wheelStyles.map((wheelStyle) => {
    return `<li>
            <input type="radio" name="wheelStyle" value="${wheelStyle.id}" /> ${wheelStyle.style}
        </li>`;
  });

  html += listItems.join("");
  html += "</ul>";

  return html;
};
