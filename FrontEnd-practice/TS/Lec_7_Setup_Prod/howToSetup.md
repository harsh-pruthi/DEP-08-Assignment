How is it written in production?

tsc --init : Generates a config file 

npm init -y 

src -> Where you write a code 
dist -> Where you distribute the code (Dist-distribution) Gets on to production and served to the user 

src - index.ts
dist - automatically index.js is generated 

who is telling TS to compile and generate it in dist/index.js

go into tsconfig -> "outDir":"./dist"

tsc src/index.ts Another index.js file in the src folder not dist 
tsc -w (Watch Mode) Any change Now it produces code in ./dist Now it watches according to tsconfig.json