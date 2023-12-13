import React from 'react';
import {Button} from "antd";
import {useNavigate} from "react-router-dom";

const GoBackButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <Button
            type="link"
            style={{marginBottom: "20px"}}
            onClick={handleClick}
        >
            Назад
        </Button>
    );
};

export default GoBackButton;