document.getElementById("downloadBtn").addEventListener("click", function () {
  // Replace with the actual path to your resume file
  const fileUrl = "KarloJusto_resume.pdf";

  // Create a temporary link element
  const link = document.createElement("a");
  link.href = fileUrl;

  // Set the 'download' attribute to trigger download with a specific file name
  link.setAttribute("download", "KarloJusto_resume.pdf");

  // Append the link to the body (necessary for Firefox and some other browsers)
  document.body.appendChild(link);

  // Programmatically click the link to trigger the download
  link.click();

  // Remove the link after the download is triggered
  document.body.removeChild(link);
});
