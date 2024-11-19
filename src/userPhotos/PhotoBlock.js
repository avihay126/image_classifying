import { saveAs } from "file-saver";
function PhotoBlock({imageIndex,setImage, images}){

    const changePhoto =(direction)=>{
        if (direction == "left"){
            if (imageIndex > 0){
                let val = imageIndex - 1
                setImage(val)
            }
        }else{
            if (imageIndex < images.length - 1){
                let val = imageIndex + 1
                setImage(val)
            }
        }
    }


    const downloadImage = async (url, filename) => {
        try {
            const response = await fetch(url); // הבאת הקובץ
            const blob = await response.blob(); // יצירת Blob מהקובץ
            const link = document.createElement("a");

            link.href = URL.createObjectURL(blob); // המרה לכתובת זמנית
            link.download = filename; // שם הקובץ
            link.style.display = "none";

            document.body.appendChild(link); // הוספה זמנית לדף
            link.click(); // הדמיית קליק להורדה
            document.body.removeChild(link); // הסרה מהדף
            URL.revokeObjectURL(link.href); // ניקוי משאבים
        } catch (error) {
            console.error("Error downloading the file:", error);
        }
    };




    return(
        <div className={"image-block-container"}>
            <div className={"photo-changer"} onClick={()=>changePhoto("left")}>&lt;</div>
            <div>
                <img type={"chosen-image"}  className={"user-image"} src={images[imageIndex]}/>
            </div>
            <div className={"photo-changer"} onClick={()=>changePhoto("right")}>&gt;</div>
            <div id={"close-photo"} onClick={()=>setImage(null)}>X</div>
            <a onClick={()=>downloadImage(images[imageIndex] , "image")} id={"download-icon"}>⬇</a>
        </div>
    )
}

export default PhotoBlock