document.addEventListener('DOMContentLoaded', function () {
    const fontName = document.getElementById('fontName');
    const fontSearch = document.getElementById('fontSearch');
    const exampleText = document.getElementById('exampleText');
    const fontSize = document.getElementById('fontSize');
    const fontSizeValue = document.getElementById('fontSizeValue');
    const fontWeight = document.getElementById('fontWeight');
    const fontWeightValue = document.getElementById('fontWeightValue');
    const preview = document.getElementById('preview');
    const copyBtn = document.getElementById('copyBtn');

    function updatePreview() {
        preview.style.fontFamily = fontName.value;
        preview.style.fontSize = fontSize.value + 'px';
        preview.style.fontWeight = fontWeight.value;
        preview.textContent = exampleText.value || 'This is a preview text.';
        fontSizeValue.textContent = fontSize.value;
        fontWeightValue.textContent = fontWeight.value;
    }

    function filterFonts() {
        const filter = fontSearch.value.toLowerCase();
        for (let option of fontName.options) {
            const text = option.text.toLowerCase();
            option.style.display = text.includes(filter) ? '' : 'none';
        }
    }

    fontSearch.addEventListener('input', filterFonts);
    fontName.addEventListener('change', updatePreview);
    exampleText.addEventListener('input', updatePreview);
    fontSize.addEventListener('input', updatePreview);
    fontWeight.addEventListener('input', updatePreview);

    copyBtn.addEventListener('click', function () {
        const cssCode = `font-family: ${fontName.value}; font-size: ${fontSize.value}px; font-weight: ${fontWeight.value};`;
        navigator.clipboard.writeText(cssCode).then(function () {
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyBtn.textContent = 'Copy CSS';
            }, 2000);
        }, function (err) {
            console.error('Could not copy text: ', err);
        });
    });

    updatePreview();
});
