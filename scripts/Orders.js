import {
  getOrders,
  getInteriorMaterials,
  getPaintColors,
  getWheelStyles,
  getTechnologyPackages,
} from "./database.js";
const orders = getOrders();
const interiorMaterials = getInteriorMaterials();
const paintColors = getPaintColors();
const wheelStyles = getWheelStyles();
const technologyPackages = getTechnologyPackages();

const buildOrderListItem = (order) => {
  return `<li>
        Order #${order.id} was placed on ${order.timestamp}.
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
