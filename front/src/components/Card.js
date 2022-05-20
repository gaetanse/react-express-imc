import { Card,Col } from 'antd';
import {
  UserOutlined,
  CheckSquareOutlined,
  BarChartOutlined } from '@ant-design/icons';
  import { Progress } from 'antd';

export default function CardIMC(props) {
  return (
    <Col className="gutter-row" span={8}>
    <Card >
      <small>Indice</small>
      <p>{props.infos.imc}</p>
      <p>{props.todayDate}</p>
      <p>
        {Array(props.infos.numero+1).fill(1).map((el, i) =>
          <Progress key={i} percent={100} showInfo={false} strokeColor={props.color} style={{width:"50px"}}/>
        )}
      </p>

      <div style={{backgroundColor: props.color,color: "white"}}>
        <UserOutlined /> {props.infos.weight}
        <CheckSquareOutlined /> {props.etat}
        <BarChartOutlined /> {props.calculWithLast}
      </div>

      <p>{props.description}</p>
    </Card>
      </Col>
)}