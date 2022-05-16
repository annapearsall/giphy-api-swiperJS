/*** Variables ***/
// API Key
const API_KEY = 'vRgpxNRNKxyIlc1sk9lEifd6kDJZDK57';
// limit
const limit = 25; 
// Get `input`
const inputField = document.querySelector('.search-input');
// Initialize or Default search query
inputField.value = '';

// Listen to key presses
inputField.addEventListener('keyup', event => {
  
  if (event.key === 'Enter') {
    
    // Go fetch Giphy API data
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${inputField.value}&limit=${limit}`)
      .then( response => response.json() )
      .then( gifs => {
     
      // check-check
      console.log(gifs);
      console.log(gifs.data);
      
      // Get container for data
      const videoContainer = document.querySelector('.videos');
      
      // Loop through the array of data
      gifs.data.forEach( gif => {
        
          // template 
          const template  = `
            <video src="${gif.images.original.mp4}" autoplay loop></video>
          `;
        
          // append
          videoContainer.insertAdjacentHTML("afterbegin", template);
        
      });
      
      
    });
    
    // Reset value and return cursor focus -- of input field
    inputField.value = '';
    inputField.focus();
    
  }
  
});

