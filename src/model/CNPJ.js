function CNPJ (cnpj) {
    this.cnpj = cnpj;
    Object.defineProperty(this, 'sanitizedCnpj', {
        enumerable: true,
        get: function() {
            cnpj.replace(/\D+/g, '') 
        }
    })
}

function CreateCNPJ () {
    CNPJ.call(this,'')
}

CreateCNPJ.prototype = Object.create(CNPJ.prototype);

CreateCNPJ.prototype.generateCnpj = function() {
    const partialCnpj = this.generateFirstTwelveCnpjNumbers();
    partialCnpj.push(this.calculateVerificationDigitOneCnpj(partialCnpj));
    partialCnpj.push(this.calculateVerificationDigitTwoCnpj(partialCnpj));
    return this.CnpjMask(partialCnpj.toString());
}

CreateCNPJ.prototype.generateFirstTwelveCnpjNumbers = function() {
    const randomDigits = [...Array(8)].map(() => Math.floor(Math.random() * 10));

    return [...randomDigits, 0, 0, 0, 1];
}

CreateCNPJ.prototype.calculateVerificationDigitOneCnpj = function(cnpj) {
    const cnpjArray = Array.from(cnpj)
    const weight = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const total = cnpjArray.reduce((accumulator, currentValue, index) => {
        accumulator += (currentValue * weight[index])
        return accumulator;
    },0)

    const digit = 11 - (total % 11)
    return digit > 9 ? 0 : digit;
}

CreateCNPJ.prototype.calculateVerificationDigitTwoCnpj = function(cnpj) {
    const cnpjArray = Array.from(cnpj)
    const weight = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const total = cnpjArray.reduce((accumulator, currentValue, index) => {
        accumulator += (currentValue * weight[index])
        return accumulator;
    },0)

    const digit = 11 - (total % 11)
    return digit > 9 ? 0 : digit;
}

CreateCNPJ.prototype.CnpjMask = function(cnpj) {
    cnpj=cnpj.replace(/\D/g,"")
    cnpj=cnpj.replace(/(\d{2})(\d)/,"$1.$2")
    cnpj=cnpj.replace(/(\d{3})(\d)/,"$1.$2")
    cnpj=cnpj.replace(/(\d{3})(\d)/,"$1/$2")
    cnpj=cnpj.replace(/(\d{4})(\d{1,2})$/,"$1-$2")
    return cnpj;
}

export { CreateCNPJ }