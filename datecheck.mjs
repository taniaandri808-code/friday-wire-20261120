export function dateCheckHTML(D) {
  const text = D?.date_check ?? '';
  if (!text) return '';

  const style = `
.dc-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  background: #fff0f0;
  border: 1px solid #fcc;
  border-radius: 4px;
  font-family: system-ui, sans-serif;
  font-size: 13px;
  line-height: 1.4;
}
.dc-tag {
  background: #c00;
  color: #fff;
  padding: 2px 6px;
  border-radius: 3px;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: .5px;
  text-transform: uppercase;
  white-space: nowrap;
}
.dc-text {
  color: #333;
}`;

  const html = `
<div class="dc-bar">
  <span class="dc-tag">DATE CHECK</span>
  <span class="dc-text">${text}</span>
</div>`;

  return `<style>${style}</style>${html}`;
}
