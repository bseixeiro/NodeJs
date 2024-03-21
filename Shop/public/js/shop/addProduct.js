const test2 = (event) => {
     let input = document.getElementById("file")
    // console.log(input.value)
     let test = input.files
    // console.log(test)
    // const reader = new FileReader();
    // console.log(reader)

    // reader.addEventListener(
    //     "load",
    //     () => {
    //       // on convertit l'image en une chaîne de caractères base64
    //       preview.src = reader.result;
    //     },
    //     false,
    //   );

    // let img = document.getElementById("img")
    // file = input.value.split("\\").splice(-1)[0]
    // console.log(file)
    // img.src = input.value
    previewFile(test)
}

const autre = () => {
    reader.addEventListener(
        "load",
        () => {
          // on convertit l'image en une chaîne de caractères base64
          preview.src = reader.result;
        },
        false,
      );
}

function previewFile(file) {
    const preview = document.getElementById("img")
    const reader = new FileReader();
  
    reader.addEventListener(
      "load",
      () => {
        // on convertit l'image en une chaîne de caractères base64
        preview.src = reader.result;
      },
      false,
      );
      
      // if (file) {
    //   reader.readAsDataURL(file);
    // }
}



function test(event){
    const fileInput = document.getElementById("file");
    const preview = document.getElementById("img");
    const reader = new FileReader();
    function handleEvent(event) {

        if (event.type === "load") {
          preview.src = reader.result;
        }
      }
      
      function addListeners(reader) {
        reader.addEventListener("loadstart", handleEvent);
        reader.addEventListener("load", handleEvent);
        reader.addEventListener("loadend", handleEvent);
        reader.addEventListener("progress", handleEvent);
        reader.addEventListener("error", handleEvent);
        reader.addEventListener("abort", handleEvent);
      }
      
      function handleSelected(e) {
        const selectedFile = fileInput.files[0];
        if (selectedFile) {
          addListeners(reader);
          reader.readAsDataURL(selectedFile);
        }
      }
}


