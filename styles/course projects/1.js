const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const width = canvas.width;
const height = canvas.height;

// Array to hold properties for each line
const lineProperties = [];
const numLines = 7;

// Initialize line properties
for (let j = 0; j < numLines; j++) {
    lineProperties.push({
        offset: Math.random() * 500, // Random noise offset for each line
        amplitude: 200 + Math.random() * 50, // Amplitude of the wave
        color: `rgba(${Math.random() * 30}, 10, 20, ${Math.random() * 0.5 + 0.6})` // Random RGBA color
    });
}

// Perlin noise function
function perlin(mouseX, mouseY) {
    context.clearRect(0, 0, width, height); // Clear the canvas

    lineProperties.forEach((line, index) => {
        context.strokeStyle = line.color;
        context.lineWidth = 2;

        for (let i = 0; i <= width; i++) {
            let x = i;

            // Modify wave using mouse position and individual line properties
            let y =
                height / 3 +
                Noise.perlinNoise((i - 2 * index) / 300 + line.offset + mouseX / 500) *
                    (line.amplitude + mouseY / 20) +
                10 * index;

            context.strokeRect(x, y, 1, 1);
        }

        // Update noise offset for slight animation effect
        line.offset += 0.01;
    });
}

// Mouse interaction
canvas.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    perlin(mouseX, mouseY);
});

// Initial render
perlin(0, 0);