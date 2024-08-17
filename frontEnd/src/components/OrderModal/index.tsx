import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';

import { Overlay, ModalBody, OrderDetails } from "./styles"

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
}

export function OrderModal({ visible, order }: OrderModalProps) {
  if (!visible || !order) {
    return null;
  }

  return (
    <Overlay>
        <ModalBody>
          <header>
            <strong>Mesa {order.table}</strong>

            <button type="button" >
              <img src={closeIcon} alt="ícone de Fechar" />
            </button>
          </header>

          <div className="status-container">
            <small>Status do pedido</small>
            <div>
              <span>
                {order.status === 'WAITING' && '🕑'}
                {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
                {order.status === 'DONE' && '✅'}
              </span>
              <strong>
                {order.status === 'WAITING' && 'Fila de espera'}
                {order.status === 'IN_PRODUCTION' && 'Em preparação'}
                {order.status === 'DONE' && 'Pronto!'}
              </strong>
            </div>
          </div>

          <OrderDetails>
            <strong>Itens</strong>

            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                />
              </div>
            ))}
          </OrderDetails>
        </ModalBody>
    </Overlay>
  )
}
