import React from 'react';
import { Container } from 'react-bootstrap';

export const About: React.FC = () => {
    return (
        <Container className="mb-4" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#082567' }}>О нас</h1>
            
            <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #082567', borderRadius: '10px', backgroundColor: '#E6F2FA' }}>
                <p style={{ fontSize: '1.5rem', color: '#0D2C52' }}>
                    Наш ресторан — это не просто место, где можно вкусно поесть, это настоящая история, начавшаяся в 2004 с простого семейного кафе.
                    Здесь, в каждом блюде, заложена частичка нашего сердца и старания, чтобы каждый гость почувствовал уют и радость, как дома.
                </p>
            </div>
            
            <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #082567', borderRadius: '10px', backgroundColor: '#E6F2FA' }}>
                <p style={{ fontSize: '1.5rem', color: '#0D2C52' }}>
                    Наш ресторан находится в самом сердце города, на улице Хххххх, 12. Мы открыты ежедневно с 11 утра до полуночи.
                </p>
            </div>

            <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #082567', borderRadius: '10px', backgroundColor: '#E6F2FA' }}>
                <p style={{ fontSize: '1.5rem', color: '#0D2C52' }}>
                    Мы стремимся создать атмосферу, где каждый может провести время с удовольствием — будь то ужин с семьей, романтическое свидание или встреча с друзьями.
                    Наш шеф-повар регулярно обновляет меню, стремясь учитывать пожелания наших гостей. Мы всегда открыты для новых идей и предложений!
                </p>
            </div>
            
            <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #082567', borderRadius: '10px', backgroundColor: '#E6F2FA' }}>
                <p style={{ fontSize: '1.5rem', color: '#0D2C52' }}>
                    Для бронирования столика или организации мероприятия вы можете связаться с нами по телефону: <strong>+7 (000) 000-00-00</strong> или по электронной почте: <strong>info@restaurant.com</strong>.
                </p>
            </div>
            
            <div style={{ padding: '1rem', border: '1px solid #082567', borderRadius: '10px', backgroundColor: '#E6F2FA' }}>
                <p style={{ fontSize: '1.5rem', color: '#0D2C52' }}>
                    Присоединяйтесь к нашему сообществу в социальных сетях, чтобы быть в курсе всех новостей и специальных предложений:
                    <br />
                    <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#082567', textDecoration: 'none' }}>ВКонтакте</a>,&nbsp;
                    <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#082567', textDecoration: 'none' }}>Телеграм</a>,&nbsp;
                    <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#082567', textDecoration: 'none' }}>Яндекс Дзен</a>
                </p>
            </div>
        </Container>
    );
};