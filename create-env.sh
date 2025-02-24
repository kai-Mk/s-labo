#! /bin/bash

# .env.exampleが存在するか
if [ ! -f .env.example ]; then
  echo ".env.exampleが見つかりません。スクリプトを終了します。"
  exit 1
fi

# .envが既に存在する場合、上書き確認
if [ -f .env ]; then
  read -p ".envが既に存在します。上書きしますか?（y/n）: " choice
  if [ "$choice" != "y" ]; then
    echo "スクリプトを終了します。"
    exit 0
  fi
fi

# .env.example を読み込み、NEXTAUTH_SECRET を追加して .env を作成
NEXTAUTH_SECRET=$(openssl rand -base64 32)
cat .env.example | sed "s|NEXTAUTH_SECRET=|NEXTAUTH_SECRET=$NEXTAUTH_SECRET|" > .env

echo ".envが生成されました。"