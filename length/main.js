var input = document.getElementById('input');
var output = document.getElementById('output');
var inputType = document.getElementById('inputType');
var outputType = document.getElementById('outputType');
var inputTypeValue, outputTypeValue;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
outputType.addEventListener("change", myResult);

inputTypeValue = inputType.value;
outputTypeValue = outputType.value;

function myResult() {

    inputTypeValue = inputType.value;
    outputTypeValue = outputType.value;


    if (inputTypeValue === "Kilometre" && outputTypeValue === "Kilometre") {

        output.value = input.value;
    } else if (inputTypeValue === "Kilometre" && outputTypeValue === "Metre") {

        output.value = Number(input.value) * 1000;
    } else if (inputTypeValue === "Kilometre" && outputTypeValue === "Decimetre") {

        output.value = Number(input.value) * 10000;
    } else if (inputTypeValue === "Kilometre" && outputTypeValue === "Centimetre") {

        output.value = Number(input.value) * 100000;
    } else if (inputTypeValue === "Kilometre" && outputTypeValue === "Millimetre") {

        output.value = Number(input.value) * 1000000;
    } else if (inputTypeValue === "Kilometre" && outputTypeValue === "Micrometre") {

        output.value = Number(input.value) * 1000000000;
    } else if (inputTypeValue === "Kilometre" && outputTypeValue === "Nanometre") {

        output.value = Number(input.value) * 1000000000000;
    }

    if (inputTypeValue === "Metre" && outputTypeValue === "Kilometre") {

        output.value = Number(input.value) * 0.001;
    } else if (inputTypeValue === "Metre" && outputTypeValue === "Metre") {

        output.value = input.value;
    } else if (inputTypeValue === "Metre" && outputTypeValue === "Decimetre") {

        output.value = Number(input.value) * 10;
    } else if (inputTypeValue === "Metre" && outputTypeValue === "Centimetre") {

        output.value = Number(input.value) * 100;
    } else if (inputTypeValue === "Metre" && outputTypeValue === "Millimetre") {

        output.value = Number(input.value) * 1000;
    } else if (inputTypeValue === "Metre" && outputTypeValue === "Micrometre") {

        output.value = Number(input.value) * 1000000;
    } else if (inputTypeValue === "Metre" && outputTypeValue === "Nanometre") {

        output.value = Number(input.value) * 1000000000;
    }

    if (inputTypeValue === "Decimetre" && outputTypeValue === "Kilometre") {

        output.value = Number(input.value) * 0.0001;
    } else if (inputTypeValue === "Decimetre" && outputTypeValue === "Metre") {

        output.value = Number(input.value) * 0.1;
    } else if (inputTypeValue === "Decimetre" && outputTypeValue === "Decimetre") {

        output.value = input.value;
    } else if (inputTypeValue === "Decimetre" && outputTypeValue === "Centimetre") {

        output.value = Number(input.value) * 10;
    } else if (inputTypeValue === "Decimetre" && outputTypeValue === "Millimetre") {

        output.value = Number(input.value) * 100;
    } else if (inputTypeValue === "Decimetre" && outputTypeValue === "Micrometre") {

        output.value = Number(input.value) * 100000;
    } else if (inputTypeValue === "Decimetre" && outputTypeValue === "Nanometre") {

        output.value = Number(input.value) * 100000000;
    }

    if (inputTypeValue === "Centimetre" && outputTypeValue === "Kilometre") {

        output.value = Number(input.value) * 0.00001;
    } else if (inputTypeValue === "Centimetre" && outputTypeValue === "Metre") {

        output.value = Number(input.value) * 0.01;
    } else if (inputTypeValue === "Centimetre" && outputTypeValue === "Decimetre") {

        output.value = Number(input.value) * 0.1;
    } else if (inputTypeValue === "Centimetre" && outputTypeValue === "Centimetre") {

        output.value = input.value;
    } else if (inputTypeValue === "Centimetre" && outputTypeValue === "Millimetre") {

        output.value = Number(input.value) * 10;
    } else if (inputTypeValue === "Centimetre" && outputTypeValue === "Micrometre") {

        output.value = Number(input.value) * 10000;
    } else if (inputTypeValue === "Centimetre" && outputTypeValue === "Nanometre") {

        output.value = Number(input.value) * 10000000;
    }

    if (inputTypeValue === "Millimetre" && outputTypeValue === "Kilometre") {

        output.value = Number(input.value) * 0.000001;
    } else if (inputTypeValue === "Millimetre" && outputTypeValue === "Metre") {

        output.value = Number(input.value) * 0.001;
    } else if (inputTypeValue === "Millimetre" && outputTypeValue === "Decimetre") {

        output.value = Number(input.value) * 0.01;
    } else if (inputTypeValue === "Millimetre" && outputTypeValue === "Centimetre") {

        output.value = Number(input.value) * 0.1;
    } else if (inputTypeValue === "Millimetre" && outputTypeValue === "Millimetre") {

        output.value = input.value;
    } else if (inputTypeValue === "Millimetre" && outputTypeValue === "Micrometre") {

        output.value = Number(input.value) * 1000;
    } else if (inputTypeValue === "Millimetre" && outputTypeValue === "Nanometre") {

        output.value = Number(input.value) * 1000000;
    }

    if (inputTypeValue === "Micrometre" && outputTypeValue === "Kilometre") {

        output.value = Number(input.value) * 0.000000001;
    } else if (inputTypeValue === "Micrometre" && outputTypeValue === "Metre") {

        output.value = Number(input.value) * 0.000001;
    } else if (inputTypeValue === "Micrometre" && outputTypeValue === "Decimetre") {

        output.value = Number(input.value) * 0.00001;
    } else if (inputTypeValue === "Micrometre" && outputTypeValue === "Centimetre") {

        output.value = Number(input.value) * 0.0001;
    } else if (inputTypeValue === "Micrometre" && outputTypeValue === "Millimetre") {

        output.value = Number(input.value) * 0.001;
    } else if (inputTypeValue === "Micrometre" && outputTypeValue === "Micrometre") {

        output.value = input.value;
    } else if (inputTypeValue === "Micrometre" && outputTypeValue === "Nanometre") {

        output.value = Number(input.value) * 1000;
    }

    if (inputTypeValue === "Nanometre" && outputTypeValue === "Kilometre") {

        output.value = Number(input.value) * 0.000000000001;
    } else if (inputTypeValue === "Nanometre" && outputTypeValue === "Metre") {

        output.value = Number(input.value) * 0.000000001;
    } else if (inputTypeValue === "Nanometre" && outputTypeValue === "Decimetre") {

        output.value = Number(input.value) * 0.00000001;
    } else if (inputTypeValue === "Nanometre" && outputTypeValue === "Centimetre") {

        output.value = Number(input.value) * 0.0000001;
    } else if (inputTypeValue === "Nanometre" && outputTypeValue === "Millimetre") {

        output.value = Number(input.value) * 0.000001;
    } else if (inputTypeValue === "Nanometre" && outputTypeValue === "Micrometre") {

        output.value = Number(input.value) * 0.001;
    } else if (inputTypeValue === "Nanometre" && outputTypeValue === "Nanometre") {

        output.value = input.value;
    }
}