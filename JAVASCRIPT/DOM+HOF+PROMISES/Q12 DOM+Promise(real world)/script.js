// Q12 — DOM + Promise (real-world)

// Create a button "Save":
// on click → disable button + show "Saving..."
// after 2 seconds → enable button + show "Saved"
// Must use Promise.
let btn=document.getElementById("saveBtn");
let textDiv=document.getElementById("textContainer");
function ButtonPromise(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve();
        },2000);
    });
}
btn.addEventListener("click", function(){
    // btn.setAttribute("disabled", "true");
    btn.disabled=true;
    textDiv.innerText="🫸 Saving...";
    
    ButtonPromise().then(()=>{
        btn.disabled=false;
        textDiv.innerText="✅ Saved";
    });

});