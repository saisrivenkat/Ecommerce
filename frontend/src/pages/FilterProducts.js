import React from "react";

const prices = [
  {
    range: "0-500",
    high:500,
    low:0
  },
  {
    range: "500-1000",
    high:1000,
    low:500
  },
  {
    range: "1000-5000",
    high:5000,
    low:1000
  },
  {
    range: "5000 above",
    high:"max",
    low:5000
  },
];

function FilterProducts() {
    const [checked,setchecked]= React.useState(false);
    const[values,setvalues]=React.useState([])

    const change=(range)=>{
        setchecked(!checked)
        setvalues([...values,range]);
        console.log(range);
    }
  return (
    <div>
      <div>
        <h1>Filters</h1>
      </div>
      <div>
        <h3>Prices</h3>
        <div>
          {prices.map((item) => {
            return (
              <div className="flex gap-2 gap-col-3">
                <input type="checkbox" placeholder={item.range} value={checked} onChange={()=>change(item)} />
                {item.range}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FilterProducts;
