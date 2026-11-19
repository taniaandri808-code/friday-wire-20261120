export default function dottedMap(pins) {
  // Define region rectangles as [centerX, centerY, radiusX, radiusY]
  const REGIONS = [
    [150, 110, 90, 60],
    [235, 255, 55, 80],
    [445, 85, 45, 35],
    [470, 230, 60, 85],
    [600, 120, 130, 75],
    [740, 330, 45, 28]
  ];

  // Build SVG content
  let svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 840 440' width='840' height='440'>";

  // Draw dotted ellipses for each region
  for (const [cx, cy, rx, ry] of REGIONS) {
    for (let dx = -rx; dx <= rx; dx += 9) {
      for (let dy = -ry; dy <= ry; dy += 9) {
        if ((dx * dx) / (rx * rx) + (dy * dy) / (ry * ry) <= 1) {
          const x = cx + dx;
          const y = cy + dy;
          svg += `<circle cx='${x}' cy='${y}' r='2.6' fill='#5a5a5a'/>`;
        }
      }
    }
  }

  // Draw pins
  pins.forEach((p, i) => {
    const idx = i + 1;
    svg += `<circle cx='${p.x}' cy='${p.y}' r='9' fill='#c0392b' stroke='#fff' stroke-width='1.5'/>`;
    svg += `<text x='${p.x}' y='${p.y + 3}' font-size='9' text-anchor='middle' fill='white'>${idx}</text>`;
  });

  svg += "</svg>";
  return svg;
}
