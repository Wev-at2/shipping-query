import axios from "axios";
import React, { useState } from "react";
import "./css/ShippingInfo.css";

interface ShippingInfoProps {
  onShippingInfoChange: (info: string) => void;
}

const ShippingInfo: React.FC<ShippingInfoProps> = ({
  onShippingInfoChange,
}) => {
  const [cep, setCep] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [addressInfo, setAddressInfo] = useState<string>("");

  const formatCep = (value: string) => {
    const numericValue = value.replace(/\D/g, "");

    if (numericValue.length === 8) {
      const formattedCep = numericValue.replace(/^(\d{5})(\d{3})$/, "$1-$2");
      return formattedCep;
    }

    return value;
  };

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCep = formatCep(event.target.value);
    setCep(formattedCep);
  };

  const handleSearchClick = async () => {
    setLoading(true);
    setError(null);

    try {
      if (cep.length === 9) {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const newAddressInfo = `CEP: ${response.data.cep}, ${response.data.logradouro} - ${response.data.bairro}, ${response.data.localidade} - ${response.data.uf}`;
        setAddressInfo(newAddressInfo);
        onShippingInfoChange(newAddressInfo);
      } else {
        setError("Formato de CEP inválido. Por favor, insira um CEP válido.");
      }
    } catch (error) {
      setError("Erro na consulta. Por favor, verifique o CEP e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="shipping-info-container">
      <h1 className="shipping-info-title">Consulta de CEP</h1>
      <div className="shipping-info-flex-left">
        <label className="shipping-info-label">CEP:</label>
        <input
          className="shipping-info-input"
          type="text"
          value={cep}
          onChange={handleCepChange}
          placeholder="(ex: xxxxx-xxx)"
          maxLength={9}
        />
      </div>
      <div className="shipping-info-flex-right">
        <button
          className="shipping-info-button"
          onClick={handleSearchClick}
          disabled={loading}
        >
          Consultar
        </button>
      </div>

      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {addressInfo && <p>{addressInfo}</p>}
    </div>
  );
};

export default ShippingInfo;
