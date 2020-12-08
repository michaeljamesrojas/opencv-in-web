//# FUNCTIONS DECLARATIONS
function includeJs(file){
    let extScript = document.createElement('script');
    extScript.src = file;
    extScript.type = "text/javascript";
    document.head.appendChild(extScript);
}

//# ACTUAL CODES
includeJs("opencv.js");

//! Add butt-add-saveslot functionality
    let canvasIdCtr = 1;    

    let buttAddSaveslot = document.getElementById("butt-add-saveslot");
    buttAddSaveslot.onclick = 
    function (){
    // create canvas container and add to document at last
        let divCanvas = document.createElement("div");
        divCanvas.classList.add("divCanvasWithDropdown");

    // create canvas and add to its container 
        let canvasSaver = document.createElement("canvas");
        canvasSaver.classList.add("canvasSaveSlot");
        canvasCurrentId = "canvasSaveSlot" + canvasIdCtr;
        canvasSaver.id = canvasCurrentId;
        canvasIdCtr++;
        divCanvas.appendChild(canvasSaver);
        // Add primary-image
            let imgElement = document.createElement("img");
            imgElement.src = "no-image.png";
            let mat = cv.imread(imgElement);
            alert(canvasCurrentId);
            let canvasGetter = document.getElementById(canvasCurrentId);
            cv.imshow(`canvasGetter`,mat);
            mat.delete();
        
    // create dropdown options for canvas and add at last
        // create dropdown div
            let divCanvasDropDown = document.createElement("div");
            divCanvasDropDown.classList.add("divCanvasDropDown");
        // create delete canvas option 
            let optionCanvasDelete = document.createElement("button");
            optionCanvasDelete.classList.add("canvasOption");
            optionCanvasDelete.textContent = "delete";
            optionCanvasDelete.onclick = 
            function (){
                optionCanvasDelete.parentElement.parentElement.remove();
                // alert("will be deleted");
            }
            divCanvasDropDown.appendChild(optionCanvasDelete);
            divCanvas.appendChild(divCanvasDropDown);

    //Add the save slot to the document
        let divSaveslots = document.getElementById("div-saveslots");
        divSaveslots.appendChild(divCanvas);   

    }
    










