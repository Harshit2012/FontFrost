document.addEventListener('DOMContentLoaded', function() {
    const fontNameSelect = document.getElementById('fontName');
    const exampleTextInput = document.getElementById('exampleText');
    const fontSizeSlider = document.getElementById('fontSize');
    const fontSizeValue = document.getElementById('fontSizeValue');
    const fontWeightSlider = document.getElementById('fontWeight');
    const fontWeightValue = document.getElementById('fontWeightValue');
    const previewDiv = document.getElementById('preview');
    const copyButton = document.getElementById('copyButton');
    const fontCodeTextarea = document.getElementById('fontCode');

    function updatePreview() {
        const fontName = fontNameSelect.value;
        const exampleText = exampleTextInput.value || "This is a preview text.";
        const fontSize = fontSizeSlider.value;
        const fontWeight = fontWeightSlider.value;

        previewDiv.style.fontFamily = fontName;
        previewDiv.style.fontSize = fontSize + 'px';
        previewDiv.style.fontWeight = fontWeight;
        previewDiv.textContent = exampleText;

        fontCodeTextarea.value = `font-family: ${fontName}; font-size: ${fontSize}px; font-weight: ${fontWeight};`;
    }

    fontNameSelect.addEventListener('change', updatePreview);
    exampleTextInput.addEventListener('input', updatePreview);
    fontSizeSlider.addEventListener('input', function() {
        fontSizeValue.textContent = fontSizeSlider.value;
        updatePreview();
    });
    fontWeightSlider.addEventListener('input', function() {
        fontWeightValue.textContent = fontWeightSlider.value;
        updatePreview();
    });

    copyButton.addEventListener('click', function() {
        fontCodeTextarea.style.display = 'block';
        fontCodeTextarea.select();
        document.execCommand('copy');
        alert('Font code copied to clipboard!');
    });
    updatePreview();
});