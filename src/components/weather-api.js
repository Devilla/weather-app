var weather = require('openweather-apis');

    weather.setLang('it');
    // English - en, Russian - ru, Italian - it, Spanish - es (or sp),
    // Ukrainian - uk (or ua), German - de, Portuguese - pt,Romanian - ro,
    // Polish - pl, Finnish - fi, Dutch - nl, French - fr, Bulgarian - bg,
    // Swedish - sv (or se), Chinese Tra - zh_tw, Chinese Sim - zh (or zh_cn),
    // Turkish - tr, Croatian - hr, Catalan - ca


    // set city by name
    weather.setCity('New Delhi');
 	// or set the coordinates (latitude,longitude)
    // weather.setCoordinate(50.0467656, 20.0048731);
    // or set city by ID (recommended by OpenWeatherMap)
    // weather.setCityId(4367872);

    // or set zip code
    // weather.setZipCode(33615);

    // 'metric'  'internal'  'imperial'
 	weather.setUnits('metric');

    // check http://openweathermap.org/appid#get for get the APPID
 	weather.setAPPID('d5218c056b467c9d6dd336aed00d49a8');


    // get the Temperature
    weather.getTemperature(function(err, temp){
        console.log(temp);
    });

    // get the Atm Pressure
    weather.getPressure(function(err, pres){
        console.log(pres);
    });

    // get the Humidity
    weather.getHumidity(function(err, hum){
        console.log(hum);
    });

    // get the Description of the weather condition
    weather.getDescription(function(err, desc){
        console.log(desc);
    });

    // get all the JSON file returned from server (rich of info)
    weather.getAllWeather(function(err, JSONObj){
        console.log(JSONObj);
    });
