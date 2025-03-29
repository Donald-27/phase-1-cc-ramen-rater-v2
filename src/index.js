// index.js
const baseURL = "http://localhost:3000/ramens";
// Callbacks
const handleClick = (ramen) => {
  // Add code
  document.querySelector(".detail-image").src = ramen.image;
  document.querySelector(".detail-image").alt = ramen.name;
  document.querySelector(".name").textContent = ramen.name;
  document.querySelector(".restaurant").textContent = ramen.restaurant;
  document.getElementById("rating-display").textContent = ramen.rating;
  document.getElementById("comment-display").textContent = ramen.comment;
};

const addSubmitListener = () => {
  // Add code
  document.getElementById("new-ramen").addEventListener("submit", event => {
    event.preventDefault();
    const newRamen = {
        name: event.target["new-name"].value,
        restaurant: event.target["new-restaurant"].value,
        image: event.target["new-image"].value,
        rating: event.target["new-rating"].value,
        comment: event.target["new-comment"].value,
    };
    renderRamen(newRamen);
    event.target.reset();
});

  
}

const displayRamens = () => {
// Add code
fetch(baseURL)
        .then(response => response.json())
        .then(ramens => {
            ramens.forEach(ramen => renderRamen(ramen));
        })
        .catch(error => console.error("Error fetching ramen data:", error));
};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

main() 


// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};