# js4consulting
npm install gh-pages --save-dev
# Remove global Git proxies
git config --global --unset http.proxy
git config --global --unset https.proxy

# Remove local project-specific Git proxies (just in case)
git config --unset http.proxy
git config --unset https.proxy

# Clear any active environment variables in your current terminal session
$env:http_proxy=""
$env:https_proxy=""

# Clear the Cache Folder
Remove-Item -Recurse -Force node_modules/.cache/gh-pages
