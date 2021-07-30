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
