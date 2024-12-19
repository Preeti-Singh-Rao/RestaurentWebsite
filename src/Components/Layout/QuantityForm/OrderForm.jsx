import "./OrderForm.css";


const OrderForm=()=>{
return(
    <div>
      <form id="orderForm">
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="100"
            placeholder="1"
            
          />
        </div>
        <button type="button" className="add-button" id="addButton">
         +Add
        </button>
      </form>
    </div>
)
}
export default OrderForm;