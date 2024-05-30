import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

export function Home() {
    return (
        <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh', textAlign: 'center', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#082567' }}>Добро пожаловать в наш ресторан!</h1>
            <div style={{ padding: '1rem', border: '1px solid #082567', borderRadius: '10px', backgroundColor: '#E6F2FA' }}>
                <p style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#0D2C52' }}>
                    Мы рады приветствовать Вас на сайте нашего ресторана!
                    Здесь вы cможете насладиться широким выбором блюд, напитков и десертов.
                    Погрузитесь в мир вкусной еды и уютной атмосферы!
                </p>
                <p style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#0D2C52' }}>
                    Посмотрите наше меню
                    <Link to="/store" style={{ fontWeight: 'bold', textDecoration: 'none', marginLeft: '10px', color: '#082567' }}>
                        <FaArrowRight style={{ color: '#082567', verticalAlign: 'middle' }} />
                    </Link>
                </p>
                <p style={{ fontSize: '1.5rem', color: '#0D2C52' }}>
                    Узнайте больше о нас
                    <Link to="/about" style={{ fontWeight: 'bold', textDecoration: 'none', marginLeft: '10px', color: '#082567' }}>
                        <FaArrowRight style={{ color: '#082567', verticalAlign: 'middle' }} />
                    </Link>
                </p>
            </div>
        </Container>
    );
}