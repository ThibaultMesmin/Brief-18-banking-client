# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Rapport d'Expérience Utilisateur (UX)

## 1. Problèmes d'Erreurs et de Messages d'Erreur
- **Mauvaise gestion du message d'erreur**: Lorsque l'utilisateur n'est pas enregistré lors de la tentative de connexion, les messages d'erreur ne sont pas gérés correctement, ce qui peut entraîner de la confusion et de la frustration.

## 2. Problèmes de Persistance des Données
- **Mauvaise persistance des données de formulaire**: Les données saisies dans les formulaires ne sont pas correctement enregistrées, obligeant les utilisateurs à les saisir à nouveau.

## 3. Problèmes de Parcours Utilisateur
- **Manque d'explications sur le parcours utilisateur**: L'ordre des actions n'est pas clairement expliqué, comme l'exigence d'entrer les moyens de paiement avant de créer des transactions, ce qui peut désorienter les utilisateurs.

## 4. Problèmes de Version Mobile
- **Items de la navbar débordent**: Les éléments de la barre de navigation débordent du champ visuel, rendant la navigation difficile.
- **Imputs trop petits**: Les champs de saisie sont trop petits, rendant la saisie difficile pour les utilisateurs mobiles.

## 5. Problèmes de Session Utilisateur
- **Sessions non sauvegardées**: Les utilisateurs doivent se reconnecter à chaque fois car leur session n'est pas sauvegardée dans le localStorage.

## 6. Problèmes Identifiés par Lighthouse
- **Contraste insuffisant**: Mauvais contraste entre la couleur de fond et le texte des boutons sur la page de connexion.
- **JavaScript inutilisé**: Des scripts inutilisés doivent être supprimés pour améliorer les performances.
- **Syntaxe JavaScript ancienne**: Mettre à jour la syntaxe JavaScript vers du JSX pour améliorer la compatibilité et les performances.
- **Blocage du rendu initial**: Certaines ressources bloquent le rendu initial, nécessitant l'utilisation de `async` ou `defer`.
- **Gestion du cache**: Le cache des ressources statiques n'est pas bien géré, ce qui doit être mis en place.

## 7. Problèmes de Formulaire de Transaction
- **Transaction non enregistrée**: Les formulaires de transaction ne sont pas enregistrés si l'utilisateur quitte sans avoir soumis.
- **Confusion des montants**: L'inversion entre les virgules et les points pour les montants de transaction porte à confusion.

## 8. Problèmes de Navigation
- **Ordre de la Navbar**: L'ordre des éléments de la barre de navigation doit être inversé pour mieux orienter l'utilisateur.
- **Rechargement de la page**: Le rechargement de la page déconnecte l'utilisateur, obligeant une nouvelle connexion.
- **Actualisation nécessaire pour voir les modifications**: Lors de la suppression d'une catégorie, une actualisation est nécessaire pour voir
- **Ecarter les boutons login et register** pour plus de lisibilité


## Modifications Apportées
- Déconnexion après le rechargement de la page: Problème résolu pour éviter que les utilisateurs soient déconnectés après un rechargement de la page.
- Erreur lors de la connexion: Correction des messages d'erreur pour qu'ils soient clairs et informatifs.
- Ordre des pages dans la Navbar: Réorganisation de l'ordre des éléments de la barre de navigation pour une meilleure orientation de l'utilisateur.
- Contraste des couleurs de la Navbar: Amélioration du contraste des couleurs dans la barre de navigation pour une meilleure lisibilité.
