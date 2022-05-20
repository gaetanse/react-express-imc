import { Card } from 'antd';
import {
  UserOutlined,
  CheckSquareOutlined,
  BarChartOutlined } from '@ant-design/icons';

export default function CardIMC() {
  return (
    <>
    <Card>
      <h1>TITRE</h1>
      <small>Indice</small>
      <p>Date</p>
      <p>Card content</p>
      <p>Conseil Santé</p>

      <UserOutlined />
      <CheckSquareOutlined />
      <BarChartOutlined />

    </Card>
  </>
)}