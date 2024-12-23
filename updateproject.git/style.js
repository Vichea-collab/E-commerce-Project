document.getElementById("notificationIcon").addEventListener("click", function(event) {
    const notificationPage = document.getElementById("noti");
    // Toggle display of the notification page
    if (notificationPage.style.display === "none" || notificationPage.style.display === "") {
        notificationPage.style.display = "flex";
    } else {
        notificationPage.style.display = "none";
    }
    // Prevent the click from propagating to the document
    event.stopPropagation();
});

// Close the notification page when clicking outside of it
document.addEventListener("click", function(event) {
    const notificationPage = document.getElementById("noti");
    const notificationIcon = document.getElementById("notificationIcon");

    // Check if the click is outside of the notification box and the bell icon
    if (!notificationPage.contains(event.target) && event.target !== notificationIcon) {
        notificationPage.style.display = "none"; // Hide notification if clicked outside
    }
});

window.addEventListener("scroll", function() {
    const notificationPage = document.getElementById("noti");
    if (notificationPage.style.display === "flex") {
        notificationPage.style.display = "none"; // Hide notification if scrolled outside
    }
});

document.getElementById("closeBtn").addEventListener("click", function(event) {
    const notificationPage = document.getElementById("noti");
    notificationPage.style.display = "none"; // Hide notification when close button is clicked
    event.stopPropagation(); // Prevent the click from propagating
});