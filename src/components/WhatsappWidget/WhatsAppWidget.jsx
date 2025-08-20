import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppWidget.css'

const WhatsAppWidget = () => {
  const phoneNumber = "918460384838" // Replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-widget"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  )
}

export default WhatsAppWidget
