import { Modal } from "antd"

export default function LoginOk(props) {

  const handleCancel = () => {
    props.show()
  }

  return (
    <Modal title="Message" visible={props.var} onOk={handleCancel} onCancel={handleCancel}>
      <p>Loging succes</p>
    </Modal>
  )
}