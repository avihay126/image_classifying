import "./landingStyle.css"

function LandingInput({inputValue,placeHolder, setValue}){

    return(
        <input value={inputValue} className={"landing-input"} placeholder={placeHolder} onChange={e => setValue(e.target.value)}/>
    )
}

export default LandingInput