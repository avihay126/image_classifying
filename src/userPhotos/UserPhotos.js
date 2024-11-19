import {useState} from "react";
import "./UserPhotosStyle.css"
import PhotoBlock from "./PhotoBlock";

function UserPhotos(){

    const [images,setImages] = useState(["https://picsum.photos/200/300?random=1"
        ,"https://picsum.photos/200/300?random=1","https://picsum.photos/200/300?random=1","https://picsum.photos/200/300?random=1","https://picsum.photos/200/300?random=1","https://picsum.photos/200/300?random=1"
    ])
    const [selectedImage, setSelectedImage] = useState(null)

    return(
        <div className={"landing-page-container"}>
            <div className={"landing-header"}>
                Hello user<br /> Here are your photos
            </div>
            <div className={"photos-container"}>
                {
                    images.map((image,index)=>{
                        return(
                            <div>
                                <img type={"gallery-image"} onClick={()=>setSelectedImage(index)} className={"user-image"} src={image}/>
                            </div>
                        )
                    })
                }

            </div>
            {
                selectedImage != null &&
                <div>
                    <PhotoBlock imageIndex={selectedImage} setImage={setSelectedImage} images={images}/>
                </div>
            }


        </div>
    )
}

export default UserPhotos;