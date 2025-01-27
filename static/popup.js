import {CreateCNPJ} from '../src/model/CNPJ';
import {CreateCPF} from '../src/model/CPF';
import { handleElementsStyle } from "../utils/handleElementsStyle";
import { actionCopyButton, actionBackButton } from "../utils/actionButtons";

function initializePopup () {
    const cpfContainer = document.getElementById('cpfContainer');
    const cnpjContainer = document.getElementById('cnpjContainer');
    const copyButton = document.getElementById('copyValue');
    const backButton = document.getElementById('backButton');
    const typeCpf = 'CPF'
    const typeCnpj = 'CNPJ'

    const createCnpj = () => {
        const newCnpj = new CreateCNPJ();
        const generatedCnpj = newCnpj.generateCnpj();

        handleElementsStyle(cnpjContainer, cpfContainer, copyButton, backButton, generatedCnpj, typeCnpj);
        actionCopyButton(generatedCnpj, typeCnpj);

        backButton.addEventListener('click', function () {
            actionBackButton(cnpjContainer, copyButton, backButton);
        });
    }

    const createCpf = () => {
        const newCpf = new CreateCPF();
        const generatedCpf = newCpf.generateCpf();

        handleElementsStyle(cpfContainer, cnpjContainer, copyButton, backButton, generatedCpf, typeCpf);
        actionCopyButton(generatedCpf, typeCpf);

        backButton.addEventListener('click', function () {
            actionBackButton(cpfContainer, copyButton, backButton);
        });
    }

    document.getElementById('generateCNPJ').addEventListener('click', createCnpj);
    document.getElementById('generateCPF').addEventListener('click', createCpf);
}

initializePopup();
