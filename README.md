# To reproduce this issue
```
git clone git@github.com:MikaFima/rollup-react-dates-issue &&\
cd rollup-react-dates-issue &&\
npm install &&\
npm run withCache &&\
npm run withoutCache
```

## Without cache build
:ok_hand: Open `./html/withoutCache/firstBuild.html` in your browser and see the import in your console giving us a complete Object.  
:ok_hand: Open `./html/withoutCache/secondBuild.html` in your browser and see the import in your console giving us a complete Object.  

## With cache build
:ok_hand: Open `./html/withCache/firstBuild.html` in your browser and see the import in your console giving us a complete Object.  
:boom: Open `./html/withCache/secondBuild.html` in your browser and see the import in your console giving us `undefined` values.  
