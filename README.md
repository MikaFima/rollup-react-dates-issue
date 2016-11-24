# To reproduce this issue

```
git clone git@github.com:MikaFima/rollup-react-dates-issue &&\
cd rollup-react-dates-issue &&\
npm install &&\
npm run withCache &&\
npm run withoutCache
```

Open `./html/withoutCache/firstBuild.html` in your browser and see the import in your console gives us a complete Object.  
Open `./html/withoutCache/secondBuild.html` in your browser and see the import in your console gives us a complete Object.  

Open `./html/withCache/firstBuild.html` in your browser and see the import in your console gives us a complete Object.  
Open `./html/withCache/secondBuild.html` in your browser and see the import in your console gives us `undefined` values.  
