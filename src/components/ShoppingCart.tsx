import { useState, useEffect } from "react";
import { Offcanvas, Stack, Button, Modal } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems, clearCart } = useShoppingCart();
  const [isOrderModalOpen, setOrderModalOpen] = useState(false);

  useEffect(() => {
    if (cartItems.length === 0) {
      setOrderModalOpen(false);
    }
  }, [cartItems]);

  const handleClearCart = () => {
    clearCart();
    closeCart();
  };

  const handleOrder = () => {
    setOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setOrderModalOpen(false);
  };

  return (
    <>
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Корзина</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-5">
              Всего{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
            <div className="d-grid gap-2">
              <Button variant="#800000" onClick={handleClearCart} style={{ backgroundColor: "#800000", color: "#fff" }}>
                Очистить корзину
              </Button>
              {cartItems.length > 0 && (
                <Button variant="#082567" onClick={handleOrder} style={{ backgroundColor: "#082567", color: "#fff" }}>
                  Заказать
                </Button>
              )}
            </div>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>

      <Modal show={isOrderModalOpen} onHide={handleCloseOrderModal}>
        <Modal.Header closeButton>
          <Modal.Title>Подтверждение заказа</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack gap={3}>
            <div className="fw-bold">Ваш заказ:</div>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="fw-bold fs-5">
              Итого:{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
            <div className="fw-bold">Информация о доставке:</div>
            <div>Ваш адрес доставки: ...</div>
            <div>Ожидаемое время доставки: 2-3 часа</div>
            <div>Стоимость доставки: {formatCurrency(1000)}</div>
            <div className="fw-bold fs-5">
              Итого к оплате:{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0) + 1000
              )}
            </div>
          </Stack>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="#800000" onClick={handleCloseOrderModal} style={{ backgroundColor: "#800000", color: "#fff" }}>
            Отмена
          </Button>
          <Button variant="#082567" style={{ backgroundColor: "#082567", color: "#fff" }}>
            Оплатить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
