// script.js

document.getElementById('loadData').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        // Use Fetch API to send the file to the server (example URL)
        fetch('your-upload-url-here', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server
            document.getElementById('ajaxContent').innerHTML = `<p>File uploaded successfully: ${data.fileName}</p>`;
        })
        .catch(error => {
            console.error('Error uploading file:', error);
            document.getElementById('ajaxContent').innerHTML = '<p>Error uploading file.</p>';
        });
    } else {
        alert('Please select a file to upload.');
    }
});
// document.getElementById("behanceBtn").addEventListener("click", function () {
//     window.open("https://www.behance.net/hariunnikrishnan", "_blank");
//   });
