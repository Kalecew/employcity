const inputFile = document.querySelector("#file")
const inputFileLabel = document.querySelector("#file-label")
const handleFiles = (e) => {
  const fileName = e.target.files[0].name
  inputFileLabel.textContent = fileName
}
inputFile.addEventListener("change", handleFiles)