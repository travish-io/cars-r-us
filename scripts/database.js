const database = {
  paintColors: [
    { id: 1, color: "Silver", price: 499.99 },
    { id: 2, color: "Midnight Blue", price: 515.5 },
    { id: 3, color: "Firebrick Red", price: 556.45 },
    { id: 4, color: "Spring Green", price: 420.99 },
  ],
  interiorMaterials: [
    { id: 1, material: "Beige Fabric", price: 450.0 },
    { id: 2, material: "Charcoal Fabric", price: 499.99 },
    { id: 3, material: "White Leather", price: 669.69 },
    { id: 4, material: "Black Leather", price: 699.69 },
  ],
  technologyPackages: [
    { id: 1, package: "Basic Package", price: 300.99 },
    { id: 2, package: "Navigation Package", price: 459.99 },
    { id: 3, package: "Visibility Package", price: 666.69 },
    { id: 4, package: "Ultra Package", price: 1100.69 },
  ],
  wheelStyles: [
    { id: 1, style: "17-inch Pair Radial", price: 675.25 },
    { id: 2, style: "17-inch Pair Radial Black", price: 699.99 },
    { id: 3, style: "18-inch Pair Spoke Silver", price: 809.33 },
    { id: 4, style: "18-inch Pair Spoke Black", price: 847.5 },
  ],
  customOrders: [
    {
      id: 1,
      paintColorId: 3,
      interiorMaterialId: 2,
      wheelStyleId: 3,
      technologyPackageId: 1,
      timestamp: 1614659931693,
    },
  ],
  orderBuilder: {},
};

export const getPaintColors = () => {
  return database.paintColors.map((paintColor) => ({ ...paintColor }));
};
export const getInteriorMaterials = () => {
  return database.interiorMaterials.map((interiorMaterial) => ({
    ...interiorMaterial,
  }));
};
export const getTechnologyPackages = () => {
  return database.technologyPackages.map((technologyPackage) => ({
    ...technologyPackage,
  }));
};
export const getWheelStyles = () => {
  return database.wheelStyles.map((wheelStyle) => ({ ...wheelStyle }));
};
export const getOrders = () => {
  return database.customOrders.map((order) => ({ ...order }));
};
export const setPaintColor = (id) => {
  database.orderBuilder.paintColorId = id;
};
export const setInteriorMaterial = (id) => {
  database.orderBuilder.interiorMaterialId = id;
};
export const setTechnologyPackage = (id) => {
  database.orderBuilder.technologyPackageId = id;
};
export const setWheelStyle = (id) => {
  database.orderBuilder.wheelStyleId = id;
};
export const addCustomOrder = () => {
  // Copy the current state of user choices
  const newOrder = { ...database.orderBuilder };

  // Add a new primary key to the object
  const lastIndex = database.customOrders.length - 1;
  newOrder.id = database.customOrders[lastIndex].id + 1;

  // Add a timestamp to the order
  newOrder.timestamp = Date.now();

  // Add the new order object to custom orders state
  database.customOrders.push(newOrder);
  // Reset the temporary state for user choices
  console.log(database.orderBuilder);
  database.orderBuilder = {};

  // Broadcast a notification that permanent state has changed
  document.dispatchEvent(new CustomEvent("stateChanged"));
};
