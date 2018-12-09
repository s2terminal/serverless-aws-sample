# Serverless AWS Sample
[Serverless](https://serverless.com/) + [TypeScript](https://www.typescriptlang.org/)で、S3に配置した画像のタグ情報をJSONで出力するサンプル

## 準備
AWS Cloud9環境下で`git clone`

または https://serverless.com/framework/docs/providers/aws/guide/credentials/ を参考にAWSセキュリティキーをセットアップ

```bash
$ npm install --save-dev
```

## デプロイ

```bash
$ serverless deploy
```

## 片付け

```bash
$ serverless remove
```