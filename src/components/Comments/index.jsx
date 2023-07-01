import React, {useEffect, useState} from "react";
import {Container} from "./styles.js";
import {AiOutlineLeft, AiOutlineRight, AiFillStar, AiOutlineStar} from "react-icons/ai"


export const Comments = ({nome, grade, context}) => {

  
    return (
        <Container>
            <h3>{nome}</h3>
            <div className="stars">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <p>{context}</p>
        </Container>
    )
};