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

    document.getElementById('generateCNPJ').addEventListener('click', function () {
        const newCnpj = new CreateCNPJ();
        const generatedCnpj = newCnpj.generateCnpj();

        handleElementsStyle(cnpjContainer, cpfContainer, copyButton, backButton, generatedCnpj, typeCnpj);

        copyButton.addEventListener('click', function () {
            actionCopyButton(generatedCnpj, typeCnpj);
        });

        backButton.addEventListener('click', function () {
            actionBackButton(cnpjContainer, copyButton, backButton);
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
            actionBackButton(cpfContainer, copyButton, backButton);
        });
    });
}

initializePopup();
