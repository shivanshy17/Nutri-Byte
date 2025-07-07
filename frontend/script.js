// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.getAttribute("data-page");

  if (page === "analyse") {
    setupUpload();
    renderCharts();
  }

  if (page === "about") {
    animateAboutPage();
  }

  if (!page || page === "home") {
    animateHomePage();
  }
});

// 🌟 Home Page: Animate "How it Works" and Testimonials
function animateHomePage() {
  const headings = document.querySelectorAll(".animate-heading");
  headings.forEach((el, i) => {
    el.style.opacity = "0";
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200 + i * 300);
  });
}

// 📄 About Page: Animate Paragraph Fade-in
function animateAboutPage() {
  const para = document.querySelector(".nutribyte-is");
  if (para) {
    para.style.opacity = "1";
    para.style.transform = "translateY(0)";
  }
}

// 📷 Analyse Page: Upload Handler
function setupUpload() {
  const uploadBtn = document.getElementById("upload-btn");
  const fileInput = document.getElementById("file-upload");
  const uploadedText = document.getElementById("uploaded-file");

  if (uploadBtn && fileInput && uploadedText) {
    uploadBtn.addEventListener("click", () => fileInput.click());

    fileInput.addEventListener("change", () => {
      const file = fileInput.files[0];
      uploadedText.textContent = file
        ? `Selected: ${file.name}`
        : "No file selected";
    });
  }
}

function renderCharts() {
  const positiveCtx = document.getElementById("positiveChart")?.getContext("2d");
  const negativeCtx = document.getElementById("negativeChart")?.getContext("2d");

  if (!positiveCtx || !negativeCtx) return;

  const baseOptions = {
    indexAxis: 'y', // 🔁 This makes the bars horizontal
    responsive: true,
    barThickness: 14, // 🎯 Makes bars thinner
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      },
      y: {
        ticks: {
          color: "#fff", // optional for dark cards
          font: { weight: 'bold' }
        }
      }
    }
  };

  new Chart(positiveCtx, {
    type: 'bar',
    data: {
      labels: ['Protein', 'Fiber', 'Vitamin C'],
      datasets: [{
        label: 'Positive Nutrients',
        data: [8, 6, 7],
        backgroundColor: ['#28a745', '#34c38f', '#20c997']
      }]
    },
    options: baseOptions
  });

  new Chart(negativeCtx, {
    type: 'bar',
    data: {
      labels: ['Sugar', 'Trans Fats', 'Sodium'],
      datasets: [{
        label: 'Negative Nutrients',
        data: [9, 7, 6],
        backgroundColor: ['#dc3545', '#e74c3c', '#c82333']
      }]
    },
    options: baseOptions
  });
}
// 🌟 Highlight active nav link
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar a");
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href.includes(currentPath)) {
      link.classList.add("active-link");
    }
  });
});
