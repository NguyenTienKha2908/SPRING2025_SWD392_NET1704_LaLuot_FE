import React from 'react';
import { ConfigProvider, Button } from 'antd';

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#52c41a', // Màu xanh lá cây
        },
      }}
    >
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Tùy chỉnh Theme với Ant Design</h1>
        <Button type="primary">Nút Primary</Button>
      </div>
    </ConfigProvider>
  );
};

export default App;
