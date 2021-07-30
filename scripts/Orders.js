import {
  getOrders,
  getInteriorMaterials,
  getPaintColors,
  getWheelStyles,
  getTechnologyPackages,
} from "./database.js";

const interiorMaterials = getInteriorMaterials();
const paintColors = getPaintColors();
const wheelStyles = getWheelStyles();
const technologyPackages = getTechnologyPackages();

const buildOrderListItem = (order) => {
  const foundInteriorMaterials = interiorMaterials.find((interiorMaterial) => {
    return interiorMaterial.id === order.interiorMaterialId;
  });
  const foundPaintColors = paintColors.find((paintColor) => {
    return paintColor.id === order.paintColorId;
  });
  const foundWheelStyles = wheelStyles.find((wheelStyle) => {
    return wheelStyle.id === order.wheelStyleId;
  });
  const foundTechnologyPackages = technologyPackages.find(
    (technologyPackage) => {
      return technologyPackage.id === order.technologyPackageId;
    }
  );
  const totalCost =
    foundInteriorMaterials.price +
    foundPaintColors.price +
    foundWheelStyles.price +
    foundTechnologyPackages.price;
  const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return `<li>
        Order #${order.id} was placed on ${order.timestamp} and costs ${costString}.
    </li>`;
};

export const Orders = () => {
  const orders = getOrders();
  let html = "<ul>";
  console.log(orders);
  const listItems = orders.map((order) => buildOrderListItem(order));

  html += listItems.join("");
  html += "</ul>";

  return html;
};
