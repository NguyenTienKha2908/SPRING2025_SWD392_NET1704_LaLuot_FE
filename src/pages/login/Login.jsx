import  { useEffect } from "react";
import { Button, Form, Input, Typography, Card } from "antd";
import Image from "../../components/image/Image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

const { Title } = Typography;

export default function Login() {
  const nav = useNavigate();
  const onFinish = (values) => {
    const hardcodedEmail = "test@example.com";
    const hardcodedPassword = "password123";

    if ( values.email === hardcodedEmail && values.password === hardcodedPassword) {
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        onClose: () => nav('/home')
      });      
    } else {
      toast.error("email or password is not correct!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);    
    toast.error(errorInfo.errorFields[0].errors[0], {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  const handleCredentialResponse = (response) => {
    const userObject = jwtDecode(response.credential);
    toast.success(`Welcome ${userObject.name}!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
    console.log("Google User: ", userObject);
  };

  useEffect(() => {
    const initGoogleLogin = () => {
      google.accounts.id.initialize({
        client_id: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });
      google.accounts.id.renderButton(document.getElementById("googleSignIn"), {
        theme: "outline",
        size: "large",
      });
      google.accounts.id.prompt();
    };

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = initGoogleLogin;
    document.body.appendChild(script);

    return () => {
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-primary-light p-[20px]">      
      <ToastContainer />
      <Card
        className="w-full max-w-md border-r-[10px]"
        style={{
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",          
        }}
      >
        <div className="flex justify-center mb-2">
          <Image
            width={"80px"}
            height={"80px"}
            src={"./src/assets/Medical_logo.png"}
          />
        </div>
        <Title level={3} className="text-center mb-2">
          Welcome Back
        </Title>
        <Form
          name="loginForm"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Form.Item>
            <div className="forgot-password text-left">
              <a
                href="/forgotPass"
                className="text-blue-500 hover:text-orange-600 pr-20"
              >
                Forget Password?
              </a>
            </div>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className="w-full border-none text-primary-light bg-primary-orange hover:bg-primary-orange-700 hover:text-primary-light hover:border-none">
              Log In
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center my-4">
          <div id="googleSignIn"></div>
        </div>

        <div className="text-center">
          <Typography.Text>
            Don&apos;t have an account? <Typography.Link onClick={() => nav('/signup')}>Sign Up</Typography.Link>
          </Typography.Text>
        </div>
      </Card>
    </div>
  );
}
