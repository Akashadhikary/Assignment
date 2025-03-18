function changeColor(color) {
    document.getElementById('umbrellaImage').style.opacity = 0;

    setTimeout(() => {
        document.getElementById('umbrellaImage').src = `images/umbrella-${color}.png`;
        document.getElementById('umbrellaImage').style.opacity = 1;
        document.getElementById('uploadButton').style.backgroundColor = color;
        document.body.style.backgroundColor = getColorCode(color);
    }, 300);
}

function getColorCode(color) {
    const colorMap = {
        pink: "#FFB6C1",
        blue: "#ADD8E6",
        yellow: "#FFFACD"
    };
    return colorMap[color] || "#EAF6FF";
}

function uploadLogo(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const logo = document.getElementById('logoPreview');
            logo.src = e.target.result;
            logo.style.opacity = 1;
        };
        reader.readAsDataURL(file);
    }
}
