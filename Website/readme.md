###React Setup###
>Is vite is bundler or webpack
yes ,react vite is a build tool and bundler.

>Install React with the help of react vite
   https://vite.dev/guide/

>Scaffolding your first vite project

bash -->open new terminal
   npm create vite@latest
   --->give projectname in lowercase +enter
   --->select frame work - React
   --->select variant - javascript
   --->use rolldown vite - No
   --->Install npm & start now -yes

>Delete useless files(you can also just clean the files)
-index.css
-App.jsx
-App.css

>Make necessary files
-App.jsx
-Index.css

>Now css Integration
1-npm create vite@latest my-project-done
2-npm install tailwindcss @tailwindcss/vite
3-vite-config->changes
----import tailwindcss from '@tailwindcss/vite'---
----tailwindcss(),
4-indexfile-->index.css
---@import "tailwindcss";

>run the file
