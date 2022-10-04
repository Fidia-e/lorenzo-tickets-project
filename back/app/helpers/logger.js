const bunyan = require('bunyan');

const streams = [];

// On n'affiche pas les erreurs dans le terminal en production ou en test
// nb : ce fragment de code ne peut pas être tester par Jest.

if (!['production', 'test'].includes(process.env.NODE_ENV)) {
  streams.push({
    level: 'error',
    // créer un affichage dans le terminal
    stream: process.stdout,
  });
} else {
  streams.push({
    level: 'error', // On ne conserve que les logs a partir du niveau error
    path: './log/error.log', // Le chemin du fichier de log (on pense à l'ignorer dans git)
    type: 'rotating-file', // on précise que l'on va faire une rotation de fichiers (Nouveau fichier dans une période défini + historique de fichiers conservés)
    period: '1d', // rotation des fichiers de log journalière
    count: 3, // On garde un historique de 3 fichiers de log (Donc ici 3 jours)
  });
}

const logger = bunyan.createLogger({
  name: 'myapp',
  streams,
});

module.exports = logger;
