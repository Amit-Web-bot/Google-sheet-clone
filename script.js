// Column Addition 
const col_header = document.getElementById("cl_hdr")
for(let i =65; i<=90; i++){
    let char = String.fromCharCode(i);

    const bold = document.createElement("b");
    bold.innerText = char;
    col_header.appendChild(bold);
}

// Row addition 
let row = document.createElement("div")
row.className = "row";
for(let i = 64; i<=90; i++){
    if(i==64){
         const b = document.createElement("b")
         b.innerText = "1";
         row.appendChild(b)
    }else{
        const div= document.createElement("div")
        row.appendChild(div)
    }
}
let parent = document.getElementById("grid")

function createRow(rowNum){
    let row = document.createElement("div")
    row.className = "row";
    for(let i = 64; i<=90; i++){
        if(i==64){
            const b = document.createElement("b")
            b.innerText = rowNum;
            row.appendChild(b)
        }else{
            const cell = document.createElement("div")
            cell.contentEditable="true";
            cell.id =String.fromCharCode(`${i}`)+rowNum;
            cell.addEventListener("focus", onCellFocus)
            row.appendChild(cell)
        }
    }
    parent.appendChild(row);
}
for(let k =1; k<=100; k++){
    createRow(k);
    }

const defaultOptionsState ={
    fontfamily: "",
    isBoldSelected: false,
    isItalicSelected: false,
    isUnderlineSelected: false,
    textAlign: "left",
    textColor: "#000",
    backgroundColor: "#fff",
    fontSize: "14"
};

let activeOptionsState;

// cell Address and on focus ooptions 

const activeCellElement = document.getElementById("active-cell");

let activeCell = "null";

function onCellFocus(e){
    activeCell= e.target;
    activeCellElement.innerText = activeCell.id;
    const computedStyle = getComputedStyle(activeCell);
    activeOptionsState={
        fontfamily: computedStyle.fontFamily,
        isBoldSelected: computedStyle.fontWeight==="600",
        isItalicSelected: computedStyle.fontStyle==="italic",
        isUnderlineSelected: computedStyle.textDecorationLine==="underline",
        textAlign: computedStyle.textAlign,
        textColor: computedStyle.color,
        backgroundColor: computedStyle.backgroundColor,
        fontSize: computedStyle.fontSize
    }
    console.log(activeOptionsState)

}


function contentBold(buttonref){
    buttonref.classList.toggle("toggle-active");
   if(activeCell){
    activeOptionsState
    if(activeOptionsState.isBoldSelected===false){
        activeCell.style.fontWeight = "600"
    }else{
        activeCell.style.fontWeight="400"
    }
   }
   activeOptionsState.isBoldSelected=!activeOptionsState.isBoldSelected;
}

function contentItalic(buttonref){
    buttonref.classList.toggle("toggle-active");
   if(activeCell){
    activeOptionsState
    if(activeOptionsState.isItalicSelected===false){
        activeCell.style.fontStyle = "italic"
    }else{
        activeCell.style.fontStyle="normal"
    }
   }
   activeOptionsState.isItalicSelected=!activeOptionsState.isItalicSelected
}

function contentUnder(buttonref){
    buttonref.classList.toggle("toggle-active");
   if(activeCell){
   activeOptionsState
   if(activeOptionsState.isUnderlineSelected==false){
    activeCell.style.textDecorationLine="underline"
   }else{
    activeCell.style.textDecorationLine="none"
   }
   activeOptionsState.isUnderlineSelected=!activeOptionsState.isUnderlineSelected
   }
}
let textAlignElements = document.getElementsByClassName("text-align")
function highlightAlignButton(alignValue){
    for(let i=0; i<textAlignElements.length; i++){
        if(textAlignElements[i].getAttribute("data-value")===alignValue){
            textAlignElements[i].classList.add("toggle-active")
        }
        else{
            textAlignElements[i].classList.remove("toggle-active")
        }
    }


}
function onClickTextAlign(textAlignButton){
    let selectedValue = textAlignButton.getAttribute("data-value")
    highlightAlignButton(selectedValue);
    if(activeCell){
        activeCell.style.textAlign = selectedValue;
        activeOptionsState.textAlign = selectedValue;
    }

}
function onChangeTextColor(buttonreff){
    let selectedColor = buttonreff.value;
    if(activeCell){
        activeCell.style.color = selectedColor;
        activeOptionsState.textColor = selectedColor;
    }
}

function onChangeBGColor(buttonreff){
    let selectedColor = buttonreff.value;
    if(activeCell){
        activeCell.style.backgroundColor = selectedColor;
        activeOptionsState.backgroundColor = selectedColor;
    }
}
function changeFontSize(buttonref){
    let selectedSize = buttonref.value;
    if(activeCell){
        activeCell.style.fontSize = selectedSize;
        activeOptionsState.fontSize = selectedSize;
    }
}

function changeFontStyle(buttonref){
    let selectedStyle = buttonref.value;
    if(activeCell){
        activeCell.style.fontFamily = selectedStyle;
        activeOptionsState.fontFamily = selectedStyle;
    }
}