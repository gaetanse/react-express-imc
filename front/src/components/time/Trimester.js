import { DemoLine }  from "./../charts/ChartTrimester"

export default function Trimester(props) {
  return (
    <div>
      <DemoLine style={{width: "800px", margin: "auto auto"}} imcs={props.imcs}/>
    </div>
  )
}