import React, { useState } from 'react';
import {ReactComponent as UploadIcon} from "../../../../Icons/UploadIcon.svg";
import {ReactComponent as CloseIconWhite} from "../../../../Icons/CloseIconWhite.svg";
import "./UploaderModal.css";

const UploaderModal = (props) => {
    const dragStartHandler = props.dragStartHandler;
    const dragLeaveHandler = props.dragLeaveHandler;
    const onDropHandler = props.onDropHandler;
    const setUploaderShow = props.setUploaderShow;
    const drag = props.drag;
    const uploaderShow = props.uploaderShow;

    return (
        <div
            className="background"
            style={uploaderShow ? {
                display: "flex"
            } : {
                display: "none"
            }}
        >
            <div
                className="uploader"
                onDragStart = {e => dragStartHandler(e)}
                onDragLeave = {e => dragLeaveHandler(e)}
                onDragOver =  {e => dragStartHandler(e)}
                onDrop = {e => onDropHandler(e)}
            >
                <button className="icon" onClick={() => setUploaderShow(false)}>
                    <CloseIconWhite/>
                </button>
                <div className="upload-info__block">
                    <UploadIcon className="upload-icon"/>
                    {!drag ?
                        <h2>Перетащите .csv файл сюда</h2>
                        :
                        <h2>Отпустите .csv файл тут</h2>
                    }
                </div>
            </div>
        </div>
    );
};

export default UploaderModal;