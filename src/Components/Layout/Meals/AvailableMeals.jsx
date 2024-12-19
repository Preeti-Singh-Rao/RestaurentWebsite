import "./AvailableMeals.css";
import OrderForm from "../QuantityForm/OrderForm";

const DummyMeals = [
  {
    id: "m1",
    name: "Sandwich",
    description: "Made with bread and vegetables",
    price: 50,
  },
  {
    id: "m2",
    name: "Paneer Chilli",
    description: "Made with paneer, capsicum, and some vegetables",
    price: 100,
  },
  {
    id: "m3",
    name: "Daal-Bati",
    description: "A traditional Rajasthani dish",
    price: 200,
  },
  {
    id: "m4",
    name: "Pasta",
    description: "A delicious Italian dish",
    price: 150,
  },
];

const AvailableMeals = () => {
  const mealsList = DummyMeals.map((meal) => (
    <li key={meal.id} className="meal-item">
        <div className="meal-details">
      <h3>{meal.name}</h3>
      <p>{meal.description}</p>
      <p>Price: ₹{meal.price}</p>
      </div>
      <OrderForm/>
    </li>
  ));

  return (
    <section className="meals">
      <ul className="meals-list">
        {mealsList}
      </ul>
    </section>
  );
};

export default AvailableMeals;
