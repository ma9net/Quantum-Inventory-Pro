import React from 'react'
import {Table, Typography, Tag, Space} from "antd";
import {useQuery} from '@tanstack/react-query';
import {fetchProducts} from '../services/productService.ts';

const {Title} = Typography;

const InventoryPage: React.FC = () => {
    const {data, isLoading, error} = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });

    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'title',
            key: 'title',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price: number) => `$${price}`,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            render: (category: string) => <Tag color="blue">{category.toUpperCase()}</Tag>,
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <a>Edit</a>
                    <a style={{color: 'red'}}>Delete</a>
                </Space>
            ),
        },
    ];


    if (error) return <div>Error loading data!</div>;

    return (
        <div>
            <Title level={2}>Inventory Management</Title>
            <Table
                columns={columns}
                dataSource={data}
                loading={isLoading}
                rowKey="id"
            />
        </div>
    );
};

export default InventoryPage;