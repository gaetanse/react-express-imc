import { Modal } from "antd"
import React, { useState } from 'react'

export default function Logout() {
  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  }

  return (
    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <p>Some contents...</p>
    </Modal>
  )
}