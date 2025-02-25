
# **🧠 BétonArmé.ai 🦾**

Bienvenue sur le projet BétonArmé.ai.

## **💻 Technologies utilisées**

- React + Vite
- TypeScript
- Chakra UI
- Tanstack Query

## **🎯 Objectif**

Ce projet à pour objectif de tester tes compétences en React en l'applicant à un projet réel de rénovation énergétique.

Le but de cette application est de permettre à un utilisateur de saisir une adresse, de la charger et de venir récupérer les infos de DPE correspondants.

Ensuite d'afficher tous les DPE trouvés pour cette adresse.

Tu peux utiliser l'API suivante pour récupérer les infos de DPE :

```python
https://api.argile.ai/my-housing/from-ban-id/{banId}
```

Documentation de l'API : [https://api.argile.ai/redoc](https://api.argile.ai/redoc)

<aside>
💡

Note: qu’est qu’un DPE ? En France, le DPE (Diagnostic de Performance Énergétique) est un document officiel qui évalue la performance énergétique d’un logement ou d’un bâtiment. Il mesure la consommation d’énergie (principalement pour le chauffage, l’eau chaude et le refroidissement) et l’impact en termes d’émissions de gaz à effet de serre.

</aside>

## **📝 Fonctionnalités**

- [x]  Saisir une adresse
- [ ]  Récupérer les infos de DPE correspondants
- [ ]  Afficher tous les DPE trouvés pour cette adresse

On aimerait connaître les informations importantes de chaque objet DPE renvoyé, donc sa note DPE, sa note GES, l’adresse, sa surface habitable et s’il s’agit d’une maison ou d’un appartement.


<aside>
💡

Hint: certains types et méthodes sont déjà définies dans la codebase, à toi d’explorer tout ça

</aside>

## **📦 Installation**

Pré-requis

- Node.js
- npm
- git

```bash
git clone git@github.com:team-argile/react-sandbox.git (SSH)
ou 
git clone https://github.com/team-argile/react-sandbox.git
cd react-sandbox
npm install
```

Lancer le projet

```bash
npm run dev
```

Créé ta branche et let’s go !

```bash
git checkout -b nom-prenom/nom-que-tu-veux
```