import React, { useState } from "react";
import cl from './MyModal.module.css'

function MyModal({children}){

    return (
        <div className={[cl.MyModal, cl.active].join(' ')}>
            <div className={cl.myModalContent}>
                {children}
            </div>
        </div>
    )
}

export default MyModal