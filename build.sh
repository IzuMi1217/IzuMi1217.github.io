#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm run docs:build

cd src/.vuepress/dist

git add -A
git commit -m 'deploy'

git push -f git@github.com:IzuMi1217/IzuMi1217.github.io.git