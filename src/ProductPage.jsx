import React from 'react';
import { Typography, Card, Row, Col, Button, Space, List, Divider } from 'antd';
import { 
  FileProtectOutlined, 
  SecurityScanOutlined, 
  ThunderboltOutlined,
  CheckCircleOutlined 
} from '@ant-design/icons';
import Head from 'next/head';

const { Title, Paragraph, Text } = Typography;

const ProductPage = () => {
  return (
    <>
      <Head>
        <title>SparkleEasy - The Ultimate Sparkle Configuration & Permission Management Tool for macOS</title>
        <meta name="description" content="SparkleEasy simplifies macOS app updates and permission management. Generate Sparkle configuration files and manage app permissions effortlessly." />
        <meta name="keywords" content="Sparkle, macOS, app updates, permission management, configuration generator, developer tools" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="SparkleEasy - Simplify Your macOS App Management" />
        <meta property="og:description" content="Generate Sparkle configurations and manage app permissions with ease. Perfect for macOS developers." />
        <meta property="og:image" content="/vite.png" />
        <meta property="og:url" content="https://sparkleeasy.pages.dev/" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SparkleEasy - macOS App Management Made Simple" />
        <meta name="twitter:description" content="The ultimate tool for Sparkle configuration generation and permission management on macOS." />
        <meta name="twitter:image" content="/vite.png" />
      </Head>

      <div style={{ padding: '40px 20px' }}>
        {/* Hero Section */}
        <section style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Title level={1}>
            SparkleEasy
          </Title>
          <Title level={2} style={{ fontWeight: 'normal', marginBottom: '40px' }}>
            Simplify Your macOS App Management
          </Title>
          <Paragraph style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
            The all-in-one solution for generating Sparkle configuration files and managing application permissions on macOS.
          </Paragraph>
        </section>

        {/* Main Features */}
        <Row gutter={[32, 32]} style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Col xs={24} md={12}>
            <Card 
              title={
                <Space>
                  <FileProtectOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
                  <span>Sparkle Configuration Generator</span>
                </Space>
              }
              style={{ height: '100%' }}
            >
              <List
                dataSource={[
                  'Generate Sparkle configuration files in seconds',
                  'Intuitive user interface for version management',
                  'Built-in validation and error checking',
                  'Support for multiple update channels'
                ]}
                renderItem={item => (
                  <List.Item>
                    <Space>
                      <CheckCircleOutlined style={{ color: '#52c41a' }} />
                      <Text>{item}</Text>
                    </Space>
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card 
              title={
                <Space>
                  <SecurityScanOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
                  <span>Permission Management</span>
                </Space>
              }
              style={{ height: '100%' }}
            >
              <List
                dataSource={[
                  'Scan and display all active permissions',
                  'One-click permission reset',
                  'Quick access to system settings',
                  'Real-time permission status monitoring'
                ]}
                renderItem={item => (
                  <List.Item>
                    <Space>
                      <CheckCircleOutlined style={{ color: '#52c41a' }} />
                      <Text>{item}</Text>
                    </Space>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>

        {/* Why Choose SparkleEasy */}
        <section style={{ maxWidth: '1200px', margin: '60px auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
            Why Choose SparkleEasy?
          </Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Card>
                <ThunderboltOutlined style={{ fontSize: '32px', color: '#1890ff', marginBottom: '16px' }} />
                <Title level={4}>Lightning Fast</Title>
                <Paragraph>
                  Generate configuration files in seconds, not minutes. Streamline your development workflow.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card>
                <SecurityScanOutlined style={{ fontSize: '32px', color: '#1890ff', marginBottom: '16px' }} />
                <Title level={4}>Secure & Reliable</Title>
                <Paragraph>
                  Built with security in mind. Manage permissions safely and efficiently.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card>
                <FileProtectOutlined style={{ fontSize: '32px', color: '#1890ff', marginBottom: '16px' }} />
                <Title level={4}>User Friendly</Title>
                <Paragraph>
                  Intuitive interface designed for developers of all experience levels.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Call to Action */}
        <section style={{ textAlign: 'center', margin: '60px 0' }}>
          <Title level={2}>Ready to Simplify Your Workflow?</Title>
          <Paragraph style={{ fontSize: '18px', marginBottom: '32px' }}>
            Join thousands of developers who are already using SparkleEasy
          </Paragraph>
          <Space size="large">
            <Button type="primary" size="large" onClick={() => window.open("https://github.com/WtecHtec/SparkleIssues/releases", "_brank")}>
              Download Now
            </Button>
            <Button size="large" onClick={() => window.open("https://www.youtube.com/watch?v=_ebL7AyCYmA", "_brank")}>
              Learn More
            </Button>
          </Space>
        </section>

        {/* Technical Specifications */}
        <section style={{ maxWidth: '800px', margin: '60px auto' }}>
          <Divider />
          <Title level={3}>Technical Specifications</Title>
          <Row gutter={[32, 16]}>
            <Col xs={24} md={12}>
              <Title level={4}>System Requirements</Title>
              <List
                size="small"
                dataSource={[
                  'macOS 10.13 or later',
                  'Intel or Apple Silicon processor',
                  '50MB disk space',
                  'Administrative privileges for permission management'
                ]}
                renderItem={item => <List.Item>{item}</List.Item>}
              />
            </Col>
            <Col xs={24} md={12}>
              <Title level={4}>Supported Features</Title>
              <List
                size="small"
                dataSource={[
                  'Sparkle 2.0+ compatible',
                  'Multiple update channels',
                  'Permission management',
                  'Automatic updates'
                ]}
                renderItem={item => <List.Item>{item}</List.Item>}
              />
            </Col>
          </Row>
        </section>
      </div>
    </>
  );
};

export default ProductPage;