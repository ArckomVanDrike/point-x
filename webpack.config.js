const path = require('path');

module.exports = {
  entry: './index.js', // Specifica l'entry point corretto (il file index.js)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /percorso_della_libreria\/openlocationcode.min.js$/, // Specifica il percorso del file da includere
        type: 'asset/resource', // Usa 'asset/resource' per copiare il file nella cartella di output
      },
      {
        test: /\.js$/, // Usa una regola per i file JavaScript
        exclude: /node_modules/, // Escludi la cartella node_modules
        use: {
          loader: 'babel-loader', // Usa babel-loader per trasformare il codice con le ultime features di JavaScript
          options: {
            presets: ['@babel/preset-env'], // Utilizza il preset-env di Babel
          },
        },
      },
    ],
  },
};
