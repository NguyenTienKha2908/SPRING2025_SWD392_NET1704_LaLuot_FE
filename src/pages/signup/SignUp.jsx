/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Button, Form, Input, Typography, Card } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

const { Title } = Typography;

export default function SignUp() {
  const nav = useNavigate();
  const handleGoogleSignUp = (response) => {
    const userObject = jwtDecode(response.credential);
    toast.success(`Welcome ${userObject.name}!`, {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
    });
    console.log('Google User: ', userObject);
  };

  useEffect(() => {
    const initGoogleSignUp = () => {
      google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
        callback: handleGoogleSignUp,
      });
      google.accounts.id.renderButton(
        document.getElementById('googleSignUp'),
        { theme: 'outline', size: 'large', text: 'signup_with' }
      );
      google.accounts.id.prompt();
    };

    
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.onload = initGoogleSignUp;
    document.body.appendChild(script);

    return () => {
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const onFinish = () => {
    toast.success('Sign Up successful!', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
      onClose: () => nav('/')
    });
  };

  const onFinishFailed = (errorInfo) => {
    toast.error(errorInfo.errorFields[0].errors[0], {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary-light p-[20px]">         
      <ToastContainer />
      <Card
        className="w-full max-w-md"
        style={{
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
        }}
      >
        <Title level={3} className="text-center mb-4">
          Create an Account
        </Title>
        <Form
          name="signUpForm"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name!' }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Please enter your password!' },
              { min: 6, message: 'Password must be at least 6 characters!' },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords do not match!'));
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full bg-primary-orange hover:bg-primary-orange">
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center my-4">
          <div id="googleSignUp"></div>
        </div>

        <div className="text-center">
          <Typography.Text>
            Already have an account? <Typography.Link onClick={() => nav('/')}>Log in</Typography.Link>
          </Typography.Text>
        </div>
      </Card>
    </div>
  );
}
