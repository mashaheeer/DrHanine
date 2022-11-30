import React, { useEffect, useState } from "react";
import { Contact } from "../../components/contact/contact";
import { HealthCare } from "../../components/healthcare/healthCare";
import { Home } from "../../components/home/home";
import { MedicalCare } from "../../components/medicalcare/medicalCare";
import { Meet } from "../../components/meet/meet";
import { Navbar } from "../../components/navbar/navBar";
import { Review } from "../../components/reviews/review";
import { navData } from "../../data";
import './homeScreenStyles.css'
export const HomeScreen = () => {
    const API_KEY = 'AIzaSyAgrRmCcvLHL1eSm555t8CmtfJOIsdWlr8'
    const [windowDimension,setWindowDimension] = useState<number>(1)
    const onClickMap= (lat:number,lng:number) =>{
        window.open("https://maps.google.com?q="+lat+","+lng);
      }

    const [fullName,setFullName] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [message,setMessage] = useState<string>('')
    const [awards,setAwards] = useState<number>(0)
    
    return <div className="main-container">
        
        <Navbar data={navData} windowDimension={windowDimension} onChangeDimension={setWindowDimension}/>
        <Home title="WE USE LATEST MEDICAL TECHNOLOGY"
        subtitle="LET US BRIGHTEN YOUR SMILE"
        buttonText="WHO WE ARE"
        />
        <HealthCare
        title="WHAT WE DO"
        subtitle="True HealthCare For Your Family"
        rightSideTitle="Quality Control System"
        leftSideTitle="Quality Control System"
        rightSidedescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        leftSidedescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        buttonText="Get Appointment"
        />
        <MedicalCare />
        <Meet />
        <Review awards={awards} setAwards={setAwards}/>
        <Contact apikey={API_KEY} 
                 onClickMap={onClickMap} 
                 setFullName={setFullName}
                 setEmail={setEmail}
                 setMessage={setMessage}
        />
    </div>
} 