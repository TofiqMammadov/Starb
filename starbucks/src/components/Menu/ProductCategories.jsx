import { Link } from "react-router-dom";
// Product Categories Data
import {
  MenuProductCategoriesDrinks,
  MenuProductCategoriesFood,
  MenuProductCategoriesAtHomeCoffee,
  MenuProductCategoriesMerchandise,
  MenuProductCategoriesGiftCards,
} from "../../database/db";

const ProductCategories = () => {
  return (
    <nav className="product-categories">
      <ul className="product-categories-list">
        <li className="categories-item">
          <span>Drinks</span>
          {MenuProductCategoriesDrinks.map((item) => (
            <ul key={item.id}>
              <li className="categories-item">
                <Link to={"/menu"}>{item.content}</Link>
              </li>
            </ul>
          ))}
        </li>
        <li className="categories-item">
          <span>Food</span>
          {MenuProductCategoriesFood.map((item) => (
            <ul key={item.id}>
              <li className="categories-item">
                <Link to={"/menu"}>{item.content}</Link>
              </li>
            </ul>
          ))}
        </li>
        <li className="categories-item">
          <span>At Home Coffee</span>
          {MenuProductCategoriesAtHomeCoffee.map((item) => (
            <ul key={item.id}>
              <li className="categories-item">
                <Link to={"/menu"}>{item.content}</Link>
              </li>
            </ul>
          ))}
        </li>
        <li className="categories-item">
          <span>Merchandise</span>
          {MenuProductCategoriesMerchandise.map((item) => (
            <ul key={item.id}>
              <li className="categories-item">
                <Link to={"/menu"}>{item.content}</Link>
              </li>
            </ul>
          ))}
        </li>
        <li className="categories-item">
          <span>Gift Cards</span>
          {MenuProductCategoriesGiftCards.map((item) => (
            <ul key={item.id}>
              <li className="categories-item">
                <Link to={"/menu"}>{item.content}</Link>
              </li>
            </ul>
          ))}
        </li>
      </ul>
    </nav>
  );
};

export default ProductCategories;
