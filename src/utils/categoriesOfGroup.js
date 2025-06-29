const categoriesOfGroup = (products) => {
  return products.reduce((grouped, product) => {
    const { category } = product;
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(product);
    return grouped;
  }, {});
};

export default categoriesOfGroup;
