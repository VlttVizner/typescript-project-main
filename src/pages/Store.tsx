import React, { useState, useEffect } from "react";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
import { Row, Col, Button, Container } from "react-bootstrap";

export const FilterComponent: React.FC<{
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}> = ({ selectedCategory, onSelectCategory }) => {
  const handleCategoryChange = (category: string) => {
    if (selectedCategory === category) {
      onSelectCategory(null);
    } else {
      onSelectCategory(category);
    }
  };

  const handleShowAll = () => {
    onSelectCategory(null);
  };

  const buttonStyle = {
    backgroundColor: "#082567",
    borderColor: "#082567",
    fontSize: "1rem",
    color: "#fff",
    transition: "filter 0.3s ease",
    marginRight: "0.5rem",
  };

  const activeButtonStyle = {
    ...buttonStyle,
    filter: "brightness(140%)",
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
    <div className="mb-3">
      <div className="btn-group" role="group" aria-label="Категории">
        <Button
          type="button"
          className={`btn ${!selectedCategory ? "active" : ""}`}
          onClick={handleShowAll}
          style={selectedCategory ? buttonStyle : activeButtonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Всё
        </Button>
        <Button
          type="button"
          className={`btn ${selectedCategory === "food" ? "active" : ""}`}
          onClick={() => handleCategoryChange("food")}
          style={selectedCategory === "food" ? activeButtonStyle : buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Еда
        </Button>
        <Button
          type="button"
          className={`btn ${selectedCategory === "drink" ? "active" : ""}`}
          onClick={() => handleCategoryChange("drink")}
          style={selectedCategory === "drink" ? activeButtonStyle : buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Напитки
        </Button>
        <Button
          type="button"
          className={`btn ${selectedCategory === "coffee" ? "active" : ""}`}
          onClick={() => handleCategoryChange("coffee")}
          style={selectedCategory === "coffee" ? activeButtonStyle : buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Кофе
        </Button>
        <Button
          type="button"
          className={`btn ${selectedCategory === "no-coffee" ? "active" : ""}`}
          onClick={() => handleCategoryChange("no-coffee")}
          style={selectedCategory === "no-coffee" ? activeButtonStyle : buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Без кофеина
        </Button>
        <Button
          type="button"
          className={`btn ${selectedCategory === "snack" ? "active" : ""}`}
          onClick={() => handleCategoryChange("snack")}
          style={selectedCategory === "snack" ? activeButtonStyle : buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Закуски
        </Button>
        <Button
          type="button"
          className={`btn ${selectedCategory === "dish" ? "active" : ""}`}
          onClick={() => handleCategoryChange("dish")}
          style={selectedCategory === "dish" ? activeButtonStyle : buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Главное блюдо
        </Button>
        <Button
          type="button"
          className={`btn ${selectedCategory === "soup" ? "active" : ""}`}
          onClick={() => handleCategoryChange("soup")}
          style={selectedCategory === "soup" ? activeButtonStyle : buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Супы
        </Button>
        <Button
          type="button"
          className={`btn ${selectedCategory === "pizza" ? "active" : ""}`}
          onClick={() => handleCategoryChange("pizza")}
          style={selectedCategory === "pizza" ? activeButtonStyle : buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Пицца
        </Button>
        <Button
          type="button"
          className={`btn ${selectedCategory === "dessert" ? "active" : ""}`}
          onClick={() => handleCategoryChange("dessert")}
          style={selectedCategory === "dessert" ? activeButtonStyle : buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Десерты
        </Button>
      </div>
    </div>
  );
};

export const Store: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const savedCategory = localStorage.getItem("selectedCategory");
    if (savedCategory) {
      setSelectedCategory(savedCategory);
    }
  }, []);

  const handleSelectCategory = (category: string | null) => {
    setSelectedCategory(category);
    if (category) {
      localStorage.setItem("selectedCategory", category);
    } else {
      localStorage.removeItem("selectedCategory");
    }
  };

  const filteredItems = storeItems.filter(item => {
    if (!selectedCategory) {
      return true;
    }
    return item.index.includes(selectedCategory);
  });

  return (
    <Container className="mb-4" style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ fontSize: "4rem", color: '#082567', marginBottom: '2rem' }}>Меню</h1>
      <div style={{ marginBottom: '2rem' }}>
        <FilterComponent
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
      </div>
      <Row md={2} xs={1} lg={3} className="g-4">
        {filteredItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};




