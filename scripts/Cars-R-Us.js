import { PaintColors } from "./PaintColors.js";
import { InteriorMaterials } from "./InteriorMaterials.js";
import { TechnologyPackages } from "./TechnologyPackages.js";
import { WheelStyles } from "./WheelStyles.js";
// document.addEventListener("click", (event) => {
//   if (event.target.id === "orderButton") addCustomOrder();
// });
export const CarsRUs = () => {
  return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__paintColors options">
                <h2>Paint Colors</h2>
                ${PaintColors()}
            </section>
            <section class="choices__interiorMaterials options">
                <h2>Interior Materials</h2>
                ${InteriorMaterials()}
            </section>
            <section class="choices__wheelStyles options">
                <h2>Wheel Styles</h2>
                 ${WheelStyles()}
            </section>
            <section class="choices__technologyPackages options">
                <h2>Technology Packages</h2>
                 ${TechnologyPackages()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
            </article>
            
            <article class="customOrders">
            <h2>Custom Car Orders</h2>
            Orders Fn Here
        </article>
    `;
};
