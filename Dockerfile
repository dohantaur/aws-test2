FROM ubuntu

# ca c'est moi
MAINTAINER dohantaur

# on execute des commandes dans le container
RUN apt-get update && \
    apt-get -y install curl && \
    curl --silent --location https://deb.nodesource.com/setup_4.x | sudo bash - && \
    apt-get -y install python build-essential nodejs

# on ajoute le contenu du répertoire courant dans le container
# dans /aws-test
ADD . /aws-test

# on s'y deplace, et on lance le npm install
RUN cd /aws-test && npm install

# on ouvre le port 3000
EXPOSE  3000

# et on lance la commande node /src/index.js
CMD ["node", "/aws-test/server.js"]
