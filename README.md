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

# prisma
* マイグレーション
```bash
npx prisma migrate dev --name init
```

* seed
```bash
npx prisma db seed
```
