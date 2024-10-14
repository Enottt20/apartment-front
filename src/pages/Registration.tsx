import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const { Title } = Typography;

interface LoginFormValues {
  username: string;
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const onFinish = (values: LoginFormValues) => {
    console.log('Успешная отправка:', values);
  };

  // Обработчик ошибок при отправке формы
  const onFinishFailed = (errorInfo: any) => {
    console.log('Ошибка при отправке:', errorInfo);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <Title level={2} style={styles.title}>Вход в систему</Title>
        <Form
          name="login_form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          autoComplete="off"
        >
          {/* Поле Электронная почта */}
          <Form.Item
            label="Электронная почта"
            name="email"
            rules={[
              { required: true, message: 'Пожалуйста, введите вашу почту!' },
              { type: 'email', message: 'Пожалуйста, введите корректный адрес почты!' },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Введите вашу почту"
            />
          </Form.Item>

          {/* Поле Пароль */}
          <Form.Item
            label="Пароль"
            name="password"
            rules={[
              { required: true, message: 'Пожалуйста, введите ваш пароль!' },
              { min: 6, message: 'Пароль должен содержать минимум 6 символов.' },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Введите ваш пароль"
            />
          </Form.Item>

          {/* Кнопка Отправки */}
          <Form.Item>
            <Button type="primary" htmlType="submit" style={styles.submitButton} block>
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
  },
  formWrapper: {
    padding: '40px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    animation: 'fadeIn 1s ease-in-out',
  },
  title: {
    textAlign: 'center',
    marginBottom: '24px',
  },
  submitButton: {
    height: '40px',
  },
};

export default LoginForm;