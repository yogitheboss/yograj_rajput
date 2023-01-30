import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./herosection.css";
var app = document.getElementById("typing");

const HeroContainer = styled.div`
  background: url("background.png") no-repeat;
  display: flex;
  justify-content: center;
  height: 90vh;
  @media only screen and (max-width: 870px){
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-item:center;
  }
`;
const ProfileContainer = styled.div`
  // margin-left: 5vw;
  display: flex;
  
  justify-content: left;
  align-items: center;
  img {
    height: 20rem;
    // border-radius: 10%;
  }
  @media only screen and (max-width: 870px){
    img{
      height: 10rem;
    }
    justify-content: center;
  margin-top:10px;    
  }
`;
const TypingContainer = styled.div`
  margin-right: 5vw;
  align-items: center;
  display: flex;
  flex-direction: column;

  justify-content: center;
  @media only screen and (max-width: 870px){

    margin-right: 0;
  }
  
  }
`;

function Herosection() {
  return (
    <HeroContainer>
      <TypingContainer>
        <h1> Hi I am Yograj</h1>
        <h3>A web developer</h3>
        <button className="skill_btn">My Skills</button>
      </TypingContainer>
      <ProfileContainer>
        <img src="profile.jpg" alt="profile_picture" />
      </ProfileContainer>
    </HeroContainer>
  );
}

export default Herosection;
