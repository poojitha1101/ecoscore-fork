import "../styles/InputPanel.css";

const InputPanel = ({ inputs, setInputs }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: parseFloat(value) });
  };

  return (
    <div className="input-panel">
      <div className="input-group">
        <label className="label highlight">01_PRODUCT_CATEGORY</label>
        <select name="categoryVal" onChange={handleChange} className="hud-select">
          <option value="10">Electronics</option>
          <option value="5">Apparel</option>
          <option value="8">Home Goods</option>
          <option value="12">Industrial</option>
        </select>
      </div>

      <div className="input-group">
        <label className="label highlight">02_MATERIAL_SELECTION</label>
        <select name="materialVal" onChange={handleChange} className="hud-select">
          <option value="15">Virgin Plastic</option>
          <option value="8">Recycled Aluminum</option>
          <option value="5">Organic Cotton</option>
          <option value="3">Bamboo</option>
        </select> [cite: 33]
      </div>

      <div className="input-group">
        <label className="label highlight">03_LOGISTICS_HUB</label>
        <select name="transportVal" onChange={handleChange} className="hud-select">
          <option value="20">Air Freight (Global)</option>
          <option value="10">Sea Freight</option>
          <option value="3">Road (Local Sourcing)</option>
        </select> [cite: 34]
      </div>

      <div className="input-group">
        <label className="label highlight">04_PACKAGING_TYPE</label>
        <select name="packagingVal" onChange={handleChange} className="hud-select">
          <option value="10">Single-use Plastic</option>
          <option value="5">Cardboard</option>
          <option value="2">Biodegradable</option>
        </select>
      </div>
      
      <div className="system-note">
        <p className="small-text">// DATA_INPUT_DEPENDENCY: ACTIVE</p> [cite: 79]
      </div>
    </div>
  );
};

export default InputPanel;
