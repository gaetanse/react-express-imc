import { Card } from 'antd';
export default function CardIMC() {
  return (
    <>
    <Card title="IMC" extra={<a href="#">IMC</a>} style={{ width: 300 }}>
      <small>Indice</small>
      <p>Date</p>
      <p>Card content</p>
      <p>Conseil Santé</p>
    </Card>
  </>
)}