import React from 'react';
import { Card, Button, List, Typography, Row, Col, Badge, Space, Divider } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { pricingPlans, faqItems } from './data';
import { PricingCard } from './PricingCard';
import styles from './Pricing.module.css';

const { Title, Text } = Typography;

const Pricing = () => {
  return (
    <div className={styles.container}>
      <Space direction="vertical" size={48} style={{ width: '100%' }}>
        {/* Header Section */}
        <div className={styles.header}>
          <Title>Simple, Transparent Pricing</Title>
          <Text type="secondary" className={styles.subtitle}>
            Choose the plan that best fits your needs
          </Text>
        </div>

        {/* Pricing Cards */}
        <Row gutter={[32, 32]} justify="center">
          {pricingPlans.map((plan) => (
            <Col key={plan.title} xs={24} md={12} lg={8}>
              <PricingCard plan={plan} />
            </Col>
          ))}
        </Row>

        <Divider />

        {/* FAQ Section */}
        <div className={styles.faqSection}>
          <Title level={3}>Frequently Asked Questions</Title>
          <List
            className={styles.faqList}
            dataSource={faqItems}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={<Text strong>{item.title}</Text>}
                  description={item.content}
                />
              </List.Item>
            )}
          />
        </div>

        {/* Contact Support */}
        <div className={styles.support}>
          <Text type="secondary">
            Have more questions?
            <Button type="link" onClick={ () => window.open("https://github.com/WtecHtec/SparkleIssues", "_brank")}>Contact Support</Button>
          </Text>
        </div>
      </Space>
    </div>
  );
};

export default Pricing;