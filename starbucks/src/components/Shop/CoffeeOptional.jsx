// React Icons
import { CiCoffeeCup } from "react-icons/ci";
const CoffeeOptional = () => {
  return (
    <section className="coffee-optional">
      <div className="container">
        <div className="row">
          <div className="size-options">
            <h2 className="size-options-title">Size options</h2>
            <div className="size-option">
              <div className="size">
                <div className="cup-icon">
                  <CiCoffeeCup />
                </div>
                <div className="size-title">
                  <p>Short</p>
                </div>
                <div className="size-ft">
                  <p>8 ft az</p>
                </div>
              </div>
              <div className="size">
                <div className="cup-icon">
                  <CiCoffeeCup />
                </div>
                <div className="size-title">
                  <p>Tall</p>
                </div>
                <div className="size-ft">
                  <p>12 ft az</p>
                </div>
              </div>
              <div className="size">
                <div className="cup-icon">
                  <CiCoffeeCup />
                </div>
                <div className="size-title">
                  <p>Grande</p>
                </div>
                <div className="size-ft">
                  <p>16 ft az</p>
                </div>
              </div>
              <div className="size">
                <div className="cup-icon">
                  <CiCoffeeCup />
                </div>
                <div className="size-title">
                  <p>Venti</p>
                </div>
                <div className="size-ft">
                  <p>20 ft az</p>
                </div>
              </div>
            </div>
          </div>
          <div className="customizations">
            <h2 className="customizations-title">Customizations </h2>
            <div className="customizations-edits">
              <div className="customizations-edit">
                <span>Flavors</span>
                <span>Edit</span>
              </div>
              <div className="customizations-edit">
                <span>Toppings</span>
                <span>Edit</span>
              </div>
              <div className="customizations-edit">
                <span>Tea</span>
                <span>Edit</span>
              </div>
              <div className="customizations-edit">
                <span>Sweeteners</span>
                <span>Edit</span>
              </div>
              <div className="customizations-edit">
                <span>Water</span>
                <span>Edit</span>
              </div>
              <div className="customizations-edit">
                <span>Signature Espresso Roast</span>
                <span>Edit</span>
              </div>
              <div className="customizations-edit">
                <span>Cup Options</span>
                <span>Edit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeOptional;
