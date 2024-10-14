import React, { useState } from 'react';
import { Form, Input, Button, Typography, Radio } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const { Title } = Typography;

interface LoginFormValues {
  email: string;
  password: string;
  role?: 'seller' | 'buyer'; // Роль теперь необязательная для формы логина
}

const RegistrationForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false); // Стейт для переключения форм

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
        <Title level={2} style={styles.title}>{isLogin ? 'Вход в систему' : 'Регистрация'}</Title>
        <Form
          name={isLogin ? "login_form" : "registration_form"} // Изменить имя формы в зависимости от состояния
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

          {/* Выбор роли только для регистрации */}
          {!isLogin && (
            <Form.Item
              label="Выберите вашу роль"
              name="role"
              rules={[{ required: true, message: 'Пожалуйста, выберите вашу роль!' }]}
            >
              <Radio.Group>
                <Radio value="buyer">Покупатель</Radio>
                <Radio value="seller">Продавец</Radio>
              </Radio.Group>
            </Form.Item>
          )}

          {/* Кнопка Отправки */}
          <Form.Item>
            <Button type="primary" htmlType="submit" style={styles.submitButton} block>
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </Form.Item>

          {/* Переключение между формами */}
          <Form.Item>
            <Button type="link" onClick={() => setIsLogin(!isLogin)} block>
              {isLogin ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
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
    justifyContent: 'center', // Центрировать по горизонтали
    alignItems: 'center',
    minHeight: '100vh', // Занять всю высоту экрана
  },
  formWrapper: {
    padding: '40px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    animation: 'fadeIn 1s ease-in-out',
    width: '500px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '24px',
  },
  submitButton: {
    height: '40px',
  },
};

export default RegistrationForm;
