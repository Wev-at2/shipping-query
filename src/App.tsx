import * as React from "react";
import ShippingInfo from "./components/ShippingInfo/ShippingInfo";

const handleShippingInfoChange = (info: string) => {
  console.log("Endereço:", info);
};

const App: React.FC = () => {
  return (
    <main className="shipping-info-main">
      <ShippingInfo onShippingInfoChange={handleShippingInfoChange} />
    </main>
  );
};

export default App;
