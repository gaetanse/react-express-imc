import { Modal } from "antd"
import { useNavigate } from "react-router-dom"

export default function LoginOk(props) {

  const navigate = useNavigate();

  const handleCancel = () => {
    props.show()
  }

  const handleGoToMain = () => {
    navigate("/main")
  }

  return (
    <Modal title="Message" visible={props.var} onOk={handleGoToMain} onCancel={handleCancel}>
      <p>Loging succes</p>
    </Modal>
  )
}