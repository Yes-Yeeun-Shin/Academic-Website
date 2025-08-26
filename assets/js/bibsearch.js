document.addEventListener("DOMContentLoaded", function () {
    const bibsearchInput = document.getElementById("bibsearch");

    if (!bibsearchInput) {
        return;
    }

    // actual bibsearch logic
    const filterItems = (searchTerm) => {
        const searchTermLower = searchTerm.toLowerCase();

        document.querySelectorAll(".publications .row").forEach((element) => {
            element.style.display = ""; // Reset display
        });

        if (searchTermLower === "") {
            return; // Show all items if search is empty
        }

        // Hide non-matching items
        document.querySelectorAll(".publications .row").forEach((element) => {
            const text = element.innerText.toLowerCase();
            if (text.indexOf(searchTermLower) === -1) {
                element.style.display = "none";
            }
        });
    };

    const updateInputField = () => {
        const hashValue = decodeURIComponent(window.location.hash.substring(1)); // Remove the '#' character
        bibsearchInput.value = hashValue;
        filterItems(hashValue);
    };

    // Sensitive search. Only start searching if there's been no input for 300 ms
    let timeoutId;
    bibsearchInput.addEventListener("input", function () {
        clearTimeout(timeoutId); // Clear the previous timeout
        const searchTerm = this.value.toLowerCase();
        timeoutId = setTimeout(() => filterItems(searchTerm), 300);
    });

    window.addEventListener("hashchange", updateInputField); // Update the filter when the hash changes

    updateInputField(); // Update filter when page loads
});
