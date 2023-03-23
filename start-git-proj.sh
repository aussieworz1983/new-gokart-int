touch .gitignore
echo '
.DS_Store
package-lock.json

node_modules
' >> .gitignore
git init -b main
gh repo create
git add . && git commit -m "initial commit"
