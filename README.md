pw-survey
=====================

### Clone

```
$ git clone git@github.com:pineapplemidi/pw-survey.git
$ cd pw-survey
```

### Dev

```
$ npm install
$ npm run dev
# HACK: must change <script src="/dist/bundle.js"></script> to <script src="/build/bundle.js"></script> in index.html
```

### Container

```
$ sudo docker build -t gf-survey .
$ sudo docker run -i -t -p 3000:3000 gf-survey
```

Use Chrome Dev tools and view as a mobile device
