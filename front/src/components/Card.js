import { Card } from 'antd';
import {
  UserOutlined,
  CheckSquareOutlined,
  BarChartOutlined } from '@ant-design/icons';

export default function CardIMC(props) {
  return (
    <>
    <Card>
      <h1> {props.etat} </h1>
      <small>Indice</small>
      <p>{props.todayDate}</p>
      <p>Bandeau</p>
      <p>{props.description}</p>

      <UserOutlined />
      <CheckSquareOutlined />
      <BarChartOutlined />

    </Card>
  </>
)}