import React, {useState} from "react";
import "../styles/SelectProfileImage.css"

function SelectProfileImage() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(URL.createObjectURL(event.target.files[0]));
        }
    };

    return (
        <div className="select-profile-image-container">
            <h1 className="select-profile-image-header">Select your profile picture</h1>
            <div className="select-profile-image">
                <input type="file" accept="image/*" onChange={handleFileChange} className="file-input"/>
                {selectedFile && (<img src={selectedFile} alt="Selected Profile" className="selected-image"/>)}
            </div>
            <button className="profile-picture-button" onClick={() => window.location.href="/home"}>Confirm profile picture</button>
        </div>
    );
}

export default SelectProfileImage;
