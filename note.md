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

```
npm i <package> --save-dev
npm i -D <package>
```
installer une dépendance en mode dev uniquement parce que inutile en prod
on les retrouves dans la section devDependancies du package.json

```
npm uninstall <package>
```
desinstaller une dependance