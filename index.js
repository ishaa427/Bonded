// Simulating mentor data
const mentors = [
    { name: "Alice Johnson", major: "Computer Science", bio: "Passionate about coding and tech." },
    { name: "Ben Lee", major: "Mechanical Engineering", bio: "Love designing and building things." },
    { name: "Clara Smith", major: "Business Management", bio: "Excited to help students succeed." }
];

// Function to display mentors
function displayMentors() {
    const mentorList = document.getElementById("mentor-list");
    mentors.forEach(mentor => {
        const mentorDiv = document.createElement("div");
        mentorDiv.className = "mentor";
        mentorDiv.innerHTML = `
            <h3>${mentor.name}</h3>
            <p><strong>Major:</strong> ${mentor.major}</p>
            <p>${mentor.bio}</p>
        `;
        mentorList.appendChild(mentorDiv);
    });
}

// Load mentors when the page loads
document.addEventListener("DOMContentLoaded", displayMentors);
