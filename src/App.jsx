import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import ProductPage from './ProductPage';
import PricingPage from './Pricing';
import styles from './App.module.css';

const { Header, Content, Footer } = Layout;

const App = () => {
  const menuItems = [
    { key: '/', label: 'Home' },
    { key: '/pricing', label: 'Pricing' },
  ];

  return (
    <BrowserRouter>
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <div className={styles.logo}>
            SparkleEasy
          </div>
          <Menu
            mode="horizontal"
            items={menuItems}
            className={styles.menu}
            selectedKeys={[window.location.pathname]}
            onSelect={({ key }) => window.location.href = key}
          />
        </Header>

        <Content className={styles.content}>
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
        </Content>

        <Footer className={styles.footer}>
          SparkleEasy ©{new Date().getFullYear()} Created with ❤️
        </Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default App;