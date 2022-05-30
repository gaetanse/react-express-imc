import "./../styles/Card.css"
import { Card,Col,Row } from 'antd'
import { UserOutlined, CheckSquareOutlined, BarChartOutlined } from '@ant-design/icons'
import { Progress } from 'antd'

export default function CardIMC(props) {
  return (
    <Col span={8}>
      <Card className="border" style={{margin: "10px 10px", height:"auto", width: "auto"}}>
        <p className="readable bold">IMC</p>
        <p className="big bold">{ parseInt((props.infos.imc)) }</p>
        <p className="bold">{new Date(props.todayDate).toDateString()}</p>
        <p>
          {Array(props.infos.numero+1).fill(1).map((i) =>
            <Progress key={i} percent={100} showInfo={false} strokeColor={props.color} style={{width:"30px", marginLeft:"5px"}}/>
          )}
        </p>
        <div style={{backgroundColor: props.color,color: "white",padding: "5px"}}>
          <Row gutter={[8, 8]}>
            <Col span={8} > <UserOutlined  style={{fontSize:"25px"}}/> </Col>
            <Col span={8} > <CheckSquareOutlined  style={{fontSize:"25px"}}/> </Col>
            <Col span={8} > <BarChartOutlined style={{fontSize:"25px"}} /> </Col>
            <Col span={8} > {props.infos.weight} </Col>
            <Col span={8} > {props.etat} </Col>
            <Col span={8} > {props.calculWithLast} </Col>
          </Row>
        </div>
        <p className="grey">{props.description}</p>
      </Card>
    </Col>
)}