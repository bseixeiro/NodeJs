# NodeJs

## Intro

Voir la version de node 

```
node -v
node --version
```


## Base

```js
console.log("Hello World");
```
Console => Objet |
.log => Méthode |
"Hello World" => Argument de fonction |

```
npm init
```
creation d une appli node

```
npm install <package>
```
installer une dépendance
on les retrouves dans la section dependancies du package.json

```
npm i <package> --save-dev
npm i -D <package>
```
installer une dépendance en mode dev uniquement parce que inutile en prod
on les retrouves dans la section devDependancies du package.json

attention les dependances sont toutes ajouté dans un dossier node modules qui peut se devenir tres lourd selon les package installer, il faut bien penser a l'ajouter dans le .gitignore pour ne pas surcharger le git.

```
npm uninstall <package>
```
desinstaller une dependance

### Js

difference variable const et let (et var) :
 - const => constante => on peut pas le reassigner
 - let => reassignable
 - var => variable globale

Module => morceau de code reutilisable dans d autre fichier

il y a 2 syntaxes pour import/export:
 - CommonJs (dans NodeJs)
 - ES6+ "ECMAScript" (dans navigateurs) => format ESM( ECMAScript Module) version ES au moment ou js est devenue langage de prog (2015)

callback => fonction passer en parametre de fonction

middleware pour Express => logique entre la requete et la reponse ( c est le callback dans le app.get  )





