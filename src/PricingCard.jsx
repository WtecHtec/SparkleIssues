import React from 'react';
import { Card, Button, List, Typography, Badge, Space } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import styles from './Pricing.module.css';

const { Title, Text } = Typography;

export const PricingCard = ({ plan }) => {
  const { title, price, period, description, features, buttonText, popular } = plan;

  return (
    <Badge.Ribbon
      text="Popular"
      color="#1890ff"
      style={{ display: popular ? 'block' : 'none' }}
    >
      <Card
        hoverable
        className={`${styles.pricingCard} ${popular ? styles.popularCard : ''}`}
      >
        <Title level={3}>{title}</Title>
        
        <Space direction="vertical" size={0} className={styles.priceSection}>
          <Title level={2} className={styles.price}>
            {price}
            <Text type="secondary" className={styles.period}>
              /{period}
            </Text>
          </Title>
          <Text type="secondary">{description}</Text>
        </Space>

        <List
          className={styles.featureList}
          dataSource={features}
          renderItem={(feature) => (
            <List.Item className={styles.featureItem}>
              <Space>
                <CheckOutlined
                  className={feature.included ? styles.included : styles.excluded}
                />
                <Text
                  className={`${styles.featureText} ${
                    feature.highlight ? styles.highlightedFeature : ''
                  }`}
                >
                  {feature.text}
                </Text>
              </Space>
            </List.Item>
          )}
        />

  { 

      popular ?  <Button
      type={popular ? 'primary' : 'default'}
      size="large"
      block
      className={styles.actionButton}
      onClick={ 
         () => {
          window.open("https://ko-fi.com/r7777", "_brank")
         }
       }
       
      >
      {buttonText}
      </Button> : null
  }
        
      </Card>
    </Badge.Ribbon>
  );
};