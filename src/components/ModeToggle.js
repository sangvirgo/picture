import React, { useState } from 'react';

function ModeToggle() {
    const [isBlack, setIsBlack]= useState(false);

    const toggleDarkMode=() => {
        setIsBlack(!isBlack);
    };

    return (
        <div>
            <div className={`container ${isBlack ? "black" : "white"}`}>Đã kiu hong nhấn òi mà. Lỡ òi thì anh muốn nói là anh iu em dữ lắm lun á hí hí năm mới vui vẻ nhen iu zợ số một</div>
            <button className="btn-clickme" onClick={toggleDarkMode}>
            Đừng nhấn nha
            </button>
        </div>
    );
}

export default ModeToggle;