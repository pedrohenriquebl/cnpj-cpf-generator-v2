import {CreateCNPJ} from '../src/model/CNPJ';
import {CreateCPF} from '../src/model/CPF';

function initializePopup () {
    const cpfContainer = document.getElementById('cpfContainer');
    const cnpjContainer = document.getElementById('cnpjContainer');
    const copyButton = document.getElementById('copyValue');
    const backButton = document.getElementById('backButton');
    const typeCpf = 'CPF'
    const typeCnpj = 'CNPJ'

    document.getElementById('generateCNPJ').addEventListener('click', function () {
        const newCnpj = new CreateCNPJ();
        const generatedCnpj = newCnpj.generateCnpj();

        handleElementsStyle(cnpjContainer, cpfContainer, copyButton, backButton, generatedCnpj, typeCnpj);

        copyButton.addEventListener('click', function () {
            actionCopyButton(generatedCnpj, typeCnpj);
        });

        backButton.addEventListener('click', function () {
            handleBackButton(cnpjContainer, copyButton, backButton);
        });
    });

    document.getElementById('generateCPF').addEventListener('click', function () {
        const newCpf = new CreateCPF();
        const generatedCpf = newCpf.generateCpf();

        handleElementsStyle(cpfContainer, cnpjContainer, copyButton, backButton, generatedCpf, typeCpf);

        copyButton.addEventListener('click', function () {

            actionCopyButton(generatedCpf, typeCpf);
        });

        backButton.addEventListener('click', function () {
            handleBackButton(cpfContainer, copyButton, backButton);
        });
    });
}

const handleElementsStyle = (visibleContainer, hiddenContainer, copyBtn, backBtn, dataGenerated, type) => {
    visibleContainer.textContent = `Generated ${type}: ${dataGenerated}`;
    visibleContainer.style.display = 'block';
    hiddenContainer.style.display = 'none';
    copyBtn.style.display = 'block';
    backBtn.style.display = 'block';
}

const actionCopyButton = (generateData, type) => {
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

const handleBackButton = (visibleContainer, copyButton, backButton) => {
    visibleContainer.style.display = 'none';
    copyButton.style.display = 'none';
    backButton.style.display = 'none';
    document.getElementById('copyMessage').style.display = 'none';
}

initializePopup();
