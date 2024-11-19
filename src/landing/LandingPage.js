import LandingInput from "./LandingInput";
import {useState} from "react";
import CameraButton from "./CameraButton";

function LandingPage(){

    const [name,setName] = useState("")
    const [phone, setPhone] = useState("")
    const [image, setImage] = useState(null);

    return(
        <div className={"landing-page-container"}>
            <div className={"landing-header"}>
                Fill out your details to receive your photos
            </div>
            <div className={"landing-input-container"}>
                <LandingInput placeHolder={"Name"} inputValue={name} setValue={setName}/>
                <LandingInput placeHolder={"Phone"} inputValue={phone} setValue={setPhone}/>
            </div>
            <div className={"image_uploader_container"}>
                <CameraButton image={image} setImage={setImage}/>
            </div>


        </div>
    )
}

export default LandingPage