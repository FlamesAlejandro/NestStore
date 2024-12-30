const fs = require('fs');
const path = require('path');

// Definición de los tipos de commit y sus íconos
const commitIcons = {
  feature: ':sparkles:',
  fix: ':bug:',
  docs: ':memo:',
  style: ':art:',
  refactor: ':hammer:',
  test: ':rotating_light:',
  chore: ':wrench:',
  perf: ':zap:',
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
