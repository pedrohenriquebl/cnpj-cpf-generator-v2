import { CreateCNPJ } from '../src/model/CNPJ';
import { CreateCPF } from '../src/model/CPF';

function initializePopup() {
    document.getElementById('generateCNPJ').addEventListener('click', function () {
      const newCnpj = new CreateCNPJ();
      const generatedCnpj = newCnpj.generateCnpj();

      const cnpjContainer = document.getElementById('cnpjContainer');
      cnpjContainer.textContent = 'Generated CNPJ: ' + generatedCnpj;
      cnpjContainer.style.display = 'block';

      const cpfContainer = document.getElementById('cpfContainer');
      cpfContainer.style.display = 'none';

      const copyButton = document.getElementById('copyValue');
      copyButton.style.display = 'block';

      const backButton = document.getElementById('backButton');
      backButton.style.display = 'block';

      copyButton.addEventListener('click', function () {
        const textarea = document.createElement('textarea');
        textarea.value = generatedCnpj;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        const copyMessage = document.getElementById('copyMessage');
        copyMessage.textContent = 'CNPJ Copied!';
        copyMessage.style.display = 'block';

        setTimeout(function () {
          copyMessage.style.display = 'none';
        }, 5000);
      });

      backButton.addEventListener('click', function () {
        cnpjContainer.style.display = 'none';
        options.style.display = 'block';
        copyButton.style.display = 'none';
        backButton.style.display = 'none';
        document.getElementById('copyMessage').style.display = 'none';
      });
    });

  document.getElementById('generateCPF').addEventListener('click', function () {
    const newCpf = new CreateCPF();
    const generatedCpf = newCpf.generateCpf();

    const cpfContainer = document.getElementById('cpfContainer');
    cpfContainer.textContent = 'Generated CPF: ' + generatedCpf;
    cpfContainer.style.display = 'block';

    const cnpjContainer = document.getElementById('cnpjContainer');
    cnpjContainer.style.display = 'none';

    const copyButton = document.getElementById('copyValue');
    copyButton.style.display = 'block';

    const backButton = document.getElementById('backButton');
    backButton.style.display = 'block';

    copyButton.addEventListener('click', function () {
      const textarea = document.createElement('textarea');
      textarea.value = generatedCpf;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      const copyMessage = document.getElementById('copyMessage');
      copyMessage.textContent = 'CPF Copied!';
      copyMessage.style.display = 'block';

      setTimeout(function () {
        copyMessage.style.display = 'none';
      }, 5000);
    });

    backButton.addEventListener('click', function () {
      cpfContainer.style.display = 'none';
      options.style.display = 'block';
      copyButton.style.display = 'none';
      backButton.style.display = 'none';
      document.getElementById('copyMessage').style.display = 'none';
    });
  });
}

initializePopup();
