import React, { useState } from 'react'
import './PortFolioItem.css'
import { FaRegWindowClose } from "react-icons/fa";

const PortFolioItem = ({ img, title, details }) => {
    // PortFolio Section
    const [modal, setModal] = useState(false);

    // Function to close Toggle
    const toggleModal = () => {
        setModal(!modal);
    }
    return (
        // PortFolio Image
        <div className="PortFolioItem">
            <img src={img} alt="PortFolio Image" className="portFolio_image" />

            <div className="PortFolio_hover" onClick={toggleModal}>
                <h3 className="portFolio_title">{title}</h3>
            </div>

            {/* PortFolio Modal */}
            {modal && (
                <div className="portFolio_modal">
                    <div className="modal_close" onClick={toggleModal}><FaRegWindowClose /></div>
                    <h2 className='modal_title'>{title}</h2>
                    <div className="modal_lists_item">
                        {details.map(({ icon, title, desc }, index) => {
                            return (
                                <li className="modal_item" key={index}>
                                    <span className='modal_icon'>{icon}</span>
                                    <span className='modal_details'>
                                        {title}:<a href={desc} target="_blank" className="modal_link">Website</a>
                                        </span>
                                </li>
                            )
                        })}
                    </div>
                    <img src={img} alt="" className="modal_image" />
                </div>
            )}
        </div>
    )
}

export default PortFolioItem