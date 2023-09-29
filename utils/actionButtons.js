/**
 *
 * @param generateData
 * @param type
 */
export const actionCopyButton = (generateData, type) => {
    const textarea = document.createElement('textarea');
    textarea.value = generateData;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    const copyMessage = document.getElementById('copyMessage');
    copyMessage.textContent = `${type} Copied!`;
    copyMessage.style.display = 'block';

    setTimeout(function () {
        copyMessage.style.display = 'none';
    }, 5000);
}

/**
 *
 * @param visibleContainer
 * @param copyButton
 * @param backButton
 */
export const actionBackButton = (visibleContainer, copyButton, backButton) => {
    visibleContainer.style.display = 'none';
    copyButton.style.display = 'none';
    backButton.style.display = 'none';
    document.getElementById('copyMessage').style.display = 'none';
}