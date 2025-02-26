# **🧠 BétonArmé.ai 🦾**

Bienvenue sur le projet BétonArmé.ai.

## **💻 Technologies utilisées**

- React + Vite
- TypeScript
- Chakra UI
- Tanstack Query

## **📦 Installation**

Pré-requis

- Node.js
- npm
- git (un compte github/gitlab connecté en local)

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

## **🎯 Objectif**

Ce projet à pour objectif de tester tes compétences en React en l'applicant à un projet réel de rénovation énergétique.

Le but de cette application est de permettre à un utilisateur de saisir une adresse, de la charger et de venir récupérer les infos de DPE correspondants.

Ensuite d'afficher tous les DPE trouvés pour cette adresse.

Tu peux utiliser l'API suivante pour récupérer les infos de DPE :

```python
https://api.argile.ai/my-housing/from-ban-id/{banId}
```

Documentation de l'API : https://api.argile.ai/redoc

<aside>
💡

Note: qu’est qu’un DPE ? En France, le DPE (Diagnostic de Performance Énergétique) est un document officiel qui évalue la performance énergétique d’un logement ou d’un bâtiment. Il mesure la consommation d’énergie (principalement pour le chauffage, l’eau chaude et le refroidissement) et l’impact en termes d’émissions de gaz à effet de serre.

</aside>

## **📝 Tes missions**

Actuellement l’application est censée récupérer et afficher les suggestions d’addresse directement dans la barre de recherche lorsqu’un utilisateur commence à taper, mais actuellement rien ne se passe, à toi de résoudre ce bug !

- [ ]  Résoudre la saisie d’une adresse
- [ ]  Sélectionner l’adresse: une fois les suggestions affichées, il faut pouvoir en sélectionner une.
- [ ]  Récupérer les infos de DPE correspondants à l’adresse sélectionnée (c’est là que l’api entre en jeu)
- [ ]  Afficher tous les DPE trouvés pour cette adresse

On aimerait connaître les informations importantes de chaque objet DPE renvoyé, donc son numéro, sa note DPE, sa note GES, l’adresse, sa surface habitable et s’il s’agit d’une maison ou d’un appartement. 

⚠️ **Attention**: un objet DPE renvoie plusieurs notes DPE et Ges, nous cherchons celle qui a été calculée et sélectionnée par le backend qui se cache derrière cette API, à toi de trouver lequel est le bon.

<aside>
💡

Hint: certains types et méthodes sont déjà définies dans la codebase, à toi d’explorer tout ça

</aside>