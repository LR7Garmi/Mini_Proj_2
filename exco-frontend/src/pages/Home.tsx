import React from 'react';

import { Row, Typography, Button, Layout } from 'antd';

import '../Acid.css';
import NavMenu from './components/NavMenu';

const { Content, Footer } = Layout;
const { Title } = Typography;


const Home: React.FC = () => {

    document.title = "EXCO Exam Conductor";
    
    const loggedIn = localStorage.getItem('token') !== null;

    return (
        <>
            <NavMenu />
            <Content style={{ backgroundColor: 'rgba(10,10,112)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
                <Row>
                    <Title style={{ color: 'white' }}>An Self-hosting Quiz Platform</Title>
                </Row>
                <Row>
                    {
                        loggedIn ? (
                            <Button size="large" href="/exams">View Your Exams</Button>
                        ) : (
                            <Button size="large" href="/login">Get Started</Button>
                        )
                    }
                </Row>
            </Content>
            <Footer style={{ textAlign: 'center' }}>EduQuiz ©2024</Footer>
        </>
    );
};

export default Home;