#!/usr/bin/env sh

# 當發生錯誤時終止腳本運行
set -e

# 打包
npm run generate

# 部署至firebase
firebase deploy