import React from "react";
import PhoneNumber from "../components/phone-number/phone-number.component";
import Logo from '../assets/images/duro.png';

const PhonenumberPage = () => {
    return(
        <div>
            <img src={Logo} className='h-12 p-2' alt="the official duro logo" />
            <PhoneNumber />
        </div>
    )
}

export default PhonenumberPage;