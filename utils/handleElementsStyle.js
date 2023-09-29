/**
 *
 * @param visibleContainer
 * @param hiddenContainer
 * @param copyBtn
 * @param backBtn
 * @param dataGenerated
 * @param type
 */
export const handleElementsStyle = (visibleContainer, hiddenContainer, copyBtn, backBtn, dataGenerated, type) => {
    visibleContainer.textContent = `Generated ${type}: ${dataGenerated}`;
    visibleContainer.style.display = 'block';
    hiddenContainer.style.display = 'none';
    copyBtn.style.display = 'block';
    backBtn.style.display = 'block';
}