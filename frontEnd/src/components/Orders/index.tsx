import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
    "_id": "66bfbee33853e3d40ac8e698",
    "table": "2",
    "status": "WAITING",
    "products": [
        {
            "product": {

                "name": "Coca Cola",

                "imagePath": "1723842163346-coca-cola.png",
                "price": 7,



            },
            "quantity": 2,
            "_id": "66bfbee33853e3d40ac8e699"
        }
    ],
}
];

export function Orders(){
  return (
    <Container>
      <OrdersBoard
        icon="🕒"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="🧑‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container>
  )
}
