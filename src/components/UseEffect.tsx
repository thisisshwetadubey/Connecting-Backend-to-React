import { useEffect, useState } from "react";

const UseEffect = () => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products");
    setProducts(["Shoes", "Sandals"]); //rendered => useEffect() => setData() => re-Rendered => useEffect() => setData() => re-Rendered
  }, []);
  return <> Product List </>;
};

export default UseEffect;
