import React from "react";
import { Wallet } from "@mercadopago/sdk-react";

// Definindo o tipo das props
type CheckoutButtonProps = {
  preferenceId: string;
};

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ preferenceId }) => {
  return (
    <div>
      <h2>Compre agora o seu produto</h2>
      {/* Botão de pagamento */}
      <Wallet
        initialization={{ preferenceId }}
        customization={{
          texts: {
            valueProp: "smart_option", // Personalize o texto do botão
          },
        }}
      />
    </div>
  );
};

export default CheckoutButton;
