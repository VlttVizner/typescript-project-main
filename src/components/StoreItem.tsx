import React from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export const StoreItem: React.FC<StoreItemProps> = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  const buttonStyle = {
    backgroundColor: "#082567",
    borderColor: "#082567",
    padding: "0.5rem 0.75rem",
    fontSize: "1rem",
    borderRadius: "0.3rem",
    color: "#fff",
    transition: "filter 0.3s ease",
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = event.target as HTMLButtonElement;
    target.style.filter = "brightness(140%)";
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = event.target as HTMLButtonElement;
    target.style.filter = "brightness(100%)";
  };

  return (
    <Card className="h-100">
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className="mb-3">
          <span className="fs-4">{name}</span>
        </Card.Title>
        <Card.Img
          variant="top"
          src={imgUrl}
          height="200px"
          style={{ objectFit: "cover", marginBottom: "1rem" }}
        />
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <span className="text-muted" style={{ fontSize: "1.1rem" }}>
              {formatCurrency(price)}
            </span>
          </div>
          <div className="d-flex align-items-center">
            {quantity === 0 ? (
              <Button
                onClick={() => increaseCartQuantity(id)}
                style={buttonStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Добавить в корзину
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => decreaseCartQuantity(id)}
                  style={{ ...buttonStyle, marginRight: "0.3rem" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  -
                </Button>
                <span className="fs-5 mx-1">{quantity}</span>
                <Button
                  onClick={() => increaseCartQuantity(id)}
                  style={{ ...buttonStyle, marginLeft: "0.3rem" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  +
                </Button>
                <Button
                  onClick={() => removeFromCart(id)}
                  size="sm"
                  style={{ ...buttonStyle, backgroundColor: "#800000", borderColor: "#800000", marginLeft: "0.3rem" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Убрать
                </Button>
              </>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};



