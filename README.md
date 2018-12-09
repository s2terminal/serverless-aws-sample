# Serverless AWS Sample
[Serverless](https://serverless.com/) + [TypeScript](https://www.typescriptlang.org/)で、S3に配置した画像をRekognitionで解析し、ラベル情報をJSONで出力するサンプル

## 構成
![cloudcraft 2](https://user-images.githubusercontent.com/7953751/49697225-16eea580-fbf8-11e8-9b30-fe75f35db11e.png)

## 概要
`awstags-input-images`に下記画像をアップロード

<img src="https://user-images.githubusercontent.com/7953751/49696713-5fef2b80-fbf1-11e8-90cf-b8e82a0cf241.jpg" width="320">

`awstags-output-tags`に下記のようなJSONが出力される

※JSONは整形済
```json
[
  { "Name": "Noodle",     "Confidence": 99.91551208496094 },
  { "Name": "Food",       "Confidence": 99.91551208496094 },
  { "Name": "Pasta",      "Confidence": 99.91551208496094 },
  { "Name": "Meal",       "Confidence": 96.68833923339844 },
  { "Name": "Dish",       "Confidence": 96.68833923339844 },
  { "Name": "Vermicelli", "Confidence": 95.85506439208984 },
  { "Name": "Egg",        "Confidence": 91.38700103759766 },
  { "Name": "Bowl",       "Confidence": 87.8220443725586 },
  { "Name": "Sprout",     "Confidence": 72.47830200195312 },
  { "Name": "Plant",      "Confidence": 72.47830200195312 }
]
```

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
