# Photify

It's a platform dedicated to the art of photography, offering
an exquisite collection of images. Designed to cater to
photography enthusiasts, it provides effortless access to a
diverse range of captivating photos.

Discover the world of photography with grace and ease,
unleashing your creative spirit through the lens.

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Demo

https://photify-five.vercel.app/

## Installation

Use firebase for user authentication.

for more info visit https://firebase.google.com/docs/auth/web/start

## Run Locally

Clone the project

```bash
  git clone https://github.com/anshu-21/HNGxInternship.git
```

Go to the project directory

```bash
  cd TaskThree
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## API Reference

#### Get a list of specific type(toprated/popular) of movies

```http
  https://api.pexels.com/v1/search?query={type}
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `type`    | `string` | **Required**. Type of images to fetch |
| `api_key` | `string` | **Required**. Your API key            |

#### For more info visit https://www.pexels.com/api/documentation/
