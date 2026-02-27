// src/layouts/MainLayout.tsx
import React, {useState} from 'react';
import {Layout, Menu, Button, theme, Avatar, Space, Typography, Breadcrumb} from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    DashboardOutlined,
    ShoppingCartOutlined,
    UserOutlined,
    BellOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import {Outlet, Link, useLocation} from 'react-router-dom';

const {Header, Sider, Content} = Layout;
const {Text} = Typography;

const MainLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation(); // برای تشخیص اینکه در کدام صفحه هستیم

    const {
        token: {colorBgContainer, borderRadiusLG, colorBgLayout},
    } = theme.useToken();

    // تبدیل مسیر URL به عنوان برای Breadcrumb (مثل انتهای مسیر)
    const breadcrumbName = location.pathname === '/' ? 'Dashboard' :
        location.pathname.includes('inventory') ? 'Inventory' : 'Profile';

    return (
        <Layout style={{minHeight: '100vh', background: colorBgLayout, width: '100vw'}}>
            {/* سایدبار با استایل ثابت و سایه ظریف */}
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                theme="light"
                style={{
                    boxShadow: '2px 0 8px 0 rgba(29,35,41,.05)',
                    zIndex: 10,
                }}
            >
                <div style={{
                    height: 64,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid #f0f0f0'
                }}>
                    <div style={{
                        width: 32, height: 32, background: '#1677ff', borderRadius: 8, marginRight: collapsed ? 0 : 8
                    }}/>
                    {!collapsed && <b style={{fontSize: 16, color: '#1677ff'}}>QUANTUM PRO</b>}
                </div>

                <Menu
                    mode="inline"
                    defaultSelectedKeys={[location.pathname]}
                    style={{borderRight: 0, marginTop: 16}}
                    items={[
                        {key: '/', icon: <DashboardOutlined/>, label: <Link to="/">Dashboard</Link>},
                        {
                            key: '/inventory',
                            icon: <ShoppingCartOutlined/>,
                            label: <Link to="/inventory">Inventory</Link>
                        },
                        {key: '/profile', icon: <UserOutlined/>, label: <Link to="/profile">Profile</Link>},
                    ]}
                />
            </Sider>

            <Layout>
                {/* هدر مدرن با قابلیت‌های کاربردی */}
                <Header style={{
                    padding: '0 24px',
                    background: colorBgContainer,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 1px 4px rgba(0,21,41,.08)',
                    zIndex: 9
                }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{fontSize: 16, width: 40, height: 40}}
                    />

                    <Space size="large">
                        <Button type="text" icon={<BellOutlined/>}/>
                        <Space style={{cursor: 'pointer', padding: '0 8px', borderRadius: 8, transition: 'all 0.3s'}}
                               className="user-profile-hover">
                            <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
                            <Text strong> Admin </Text>
                        </Space>
                        <Button type="primary" danger ghost icon={<LogoutOutlined/>}>خروج</Button>
                    </Space>
                </Header>

                {/* بخش محتوا با Breadcrumb و پس‌زمینه مناسب */}
                <Content style={{margin: '0 24px 24px', overflow: 'initial'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                        <Breadcrumb.Item>{breadcrumbName}</Breadcrumb.Item>
                    </Breadcrumb>

                    <div style={{
                        padding: 24,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        minHeight: 'calc(100vh - 190px)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                    }}>
                        <Outlet/>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;