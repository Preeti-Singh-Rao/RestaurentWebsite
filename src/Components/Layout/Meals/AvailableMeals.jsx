import "./AvailableMeals.css";

const DummyMeals=[
    {
        id:"m1",
        name:"sandwich",
        description:"made with bread and vegitables",
        price:"50"
    },
    {
        id:"m2",
        name:"PaneerChilli",
        description:"made with paneer , capsicum and some vegitables",
        price:"100"
    },
    {
        id:"m3",
        name:"daal-bati",
        description:"it's rajasthani dish",
        price:"200"
    },
    {
        id:"m4",
        name:"pasta",
        description:"it's italian dish",
        price:"150"
    }
]

const AvailableMeals=()=>{
    const mealsList = DummyMeals.map((meal) => (
        <li key={meal.id}>
          <h3>{meal.name}</h3>
          <p>{meal.description}</p>
          <p>Price: ₹{meal.price}</p>
        </li>
      ));
return(
    <div className="meals">
    <ul className="ul">
        {mealsList}
    </ul>
    </div>
)
   

}

export default AvailableMeals;