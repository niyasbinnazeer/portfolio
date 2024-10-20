/* Reset basic styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
    overflow-x: hidden;
    scroll-behavior: smooth;
}

header {
    text-align: center;
    padding: 80px 0;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
}

header h1 {
    font-size: 2.5rem;
}

header p {
    font-size: 1.2rem;
    margin-top: 10px;
}

nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;
}

section {
    padding: 100px 20px;
    min-height: 100vh;
}

#about, #skills, #experience, #projects, #contact {
    background-color: #fff;
    margin-bottom: 50px;
    border-radius: 15px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
    padding: 50px;
}

#about h2, #skills h2, #experience h2, #projects h2, #contact h2 {
    font-size: 2rem;
    margin-bottom: 30px;
    position: relative;
}

#about p, #skills ul, #experience div, #projects div {
    font-size: 1.1rem;
    color: #555;
}

/* Horizontal Portfolio Section */
.project-container {
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    gap: 30px;
}

.project {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    min-width: 300px;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
    transform: scale(1);
}

.project:hover {
    transform: scale(1.05);
    box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.15);
}

.project h3 {
    margin-bottom: 10px;
    font-size: 1.5rem;
}

/* Gradient backgrounds for sections */
#skills, #experience, #projects {
    background: linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%);
    color: white;
}

/* Smooth scrolling and responsive design */
@media (max-width: 768px) {
    nav ul {
        flex-direction: column;
    }

    .project-container {
        flex-direction: column;
    }

    .project {
        margin-bottom: 30px;
        min-width: 100%;
    }
}