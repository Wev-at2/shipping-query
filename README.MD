# Consulta de CEP em React por API

O componente **Consulta de CEP em React por API** é uma parte essencial do nosso aplicativo de consulta de frete.

## Instalação

Para instalar o componente em um projeto VTEX IO, siga os passos abaixo:

1. Certifique-se de estar utilizando o Yarn como gerenciador de pacotes. Se não estiver instalado, você pode instalá-lo globalmente usando o npm:

    ```bash
    npm install -g yarn
    ```

2. No diretório do seu projeto, instale o componente utilizando o Yarn:

    ```bash
    yarn add @seu-usuario/shipping-info
    ```

## Utilização

Para utilizar o componente em seu block ou theme VTEX IO, siga as etapas abaixo:

1. Importe o componente onde deseja utilizá-lo. Exemplo:

    ```tsx
    import ShippingInfo from '@seu-usuario/shipping-info';
    ```

2. Utilize o componente em seu block ou theme. Exemplo:

    ```tsx
    const MinhaPagina: React.FC = () => {
      return (
        <div>
          <h1>Minha Página</h1>
          <ShippingInfo onShippingInfoChange={handleShippingInfoChange} />
        </div>
      );
    };
    ```

Certifique-se de seguir os padrões e práticas recomendadas ao integrar este componente em seu projeto VTEX IO.
