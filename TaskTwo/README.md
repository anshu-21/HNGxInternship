# MovieBox

It's a website that provides comprehensive movie data and allows movie enthusiasts to easily search for and access detailed information about any film.

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Demo

https://moviebox-flax.vercel.app/

## Run Locally

Clone the project

```bash
  git clone https://github.com/anshu-21/HNGxInternship.git
```

Go to the project directory

```bash
  cd TaskTwo
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## TMDB API Reference

#### Get a list of specific type(toprated/popular) of movies

```http
  https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `type`    | `string` | **Required**. Type of movies to fetch |
| `api_key` | `string` | **Required**. Your API key            |

#### Get a movie details

```http
  https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |
| `api_key` | `string` | **Required**. Your API key        |
