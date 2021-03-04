FROM cypress/included:6.6.0 

ADD ./ /web 
WORKDIR /web 
RUN mkdir -p ~/cypress 

COPY package.json . 
COPY package-lock.json . 


ENV CI=1 
RUN npm ci 
RUN npx cypress verify

COPY cypress ./cypress
COPY cypress.json .