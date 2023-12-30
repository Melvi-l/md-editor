# Utiliser une image Node.js officielle
FROM node:latest

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier le fichier package.json et package-lock.json (si disponible)
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier les fichiers et dossiers du projet dans le répertoire de travail
COPY . .

# Exposer le port sur lequel le serveur s'exécute
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "server.js"]