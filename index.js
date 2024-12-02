
const mentors = [
    { name: "ISHA GUPTA", major: "Information Technology", bio: "Passionate about coding and tech." },
    { name: "YASH VASHISHTA", major: "Computer Science", bio: "Love designing and building things." },
    { name: "RUSHIL SAXENA", major: "Data Science", bio: "Excited to help students succeed." }
];


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


document.addEventListener("DOMContentLoaded", displayMentors);
