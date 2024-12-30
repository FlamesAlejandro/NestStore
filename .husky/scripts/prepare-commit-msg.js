const fs = require('fs');
const path = require('path');

// Definición de los tipos de commit y sus íconos
const commitIcons = {
    init: ':tada:',
    feat: ':sparkles:',
    feature: ':sparkles:',
    chore: ':wrench:',
    docs: ':memo:',
    fix: ':bug:',
    bugfix: ':bug:',
    hotfix: ':ambulance:',
    perf: ':zap:',
    performance: ':zap:',
    refactor: ':hammer:',
    test: ':rotating_light:',
    cosmetic: ':lipstick:',
    style: ':gem:',
    remove: ':fire:',
    cicd: ':green_heart:',
    CICD: ':green_heart:',
    security: ':lock:',
    lint: ':shirt:',
    tslint: ':necktie:',
    build: ':hammer_and_wrench:',
    version: ':bookmark:',
    release: ':robot:',
    deployment: ':rocket:',
    wip: ':construction:',
    removeDependency: ':heavy_minus_sign:',
    addDependency: ':heavy_plus_sign:',
    docker: ':whale:',
    config: ':wrench:',
    package: ':package:',
    solveConflicts: ':rage:',
    codeSmells: ':nose:',
    misc: ':question:'
};

// Archivo de mensaje de commit
const commitMessageFile = process.argv[2];

// Leer el mensaje inicial del commit
const defaultMessage = fs.readFileSync(commitMessageFile, 'utf-8').trim();

// Extraer el tipo de commit (primera palabra) y la descripción
const [typeCommit, ...descriptionParts] = defaultMessage.split(' ');
const description = descriptionParts.join(' ');

// Buscar el ícono correspondiente
const icon = commitIcons[typeCommit.toLowerCase()] || commitIcons['misc'];

// Formatear el mensaje final
const formattedMessage = `${typeCommit.toLowerCase()} ${icon}: ${description}`;

// Sobrescribir el mensaje del commit
fs.writeFileSync(commitMessageFile, formattedMessage, 'utf-8');
console.log(`Mensaje de commit actualizado: ${formattedMessage}`);
