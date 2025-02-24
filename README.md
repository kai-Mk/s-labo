# s-labo_dev_container

# 環境構築
* VSCodeに拡張機能「Dev Container」を追加
* コンテナを開く
* パッケージのインストール、立ち上げ
```bash
npm install
```

```bash
npm run dev
```

http://localhost:3000

# prisma接続
* マイグレーション
```bash
npx prisma migrate dev --name init
```

* seed
```bash
npx prisma db seed
```

# .env作成 
* ルートフォルダで実施
    * 別のデータベースを使用する場合は、`.env.example`の`DATABASE_URL`を変更する
    * [prismaデータベース接続の設定](https://www.prisma.io/docs/orm/reference/connection-urls)
```bash
chmod +x create-env.sh
```
```bash
./create-env.sh

```
