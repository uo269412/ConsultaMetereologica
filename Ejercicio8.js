var meteo1 = new Object();
    meteo1.apikey = "fa9740026c5f4f0c5ebca4aa6a66023d";
    meteo1.ciudad = "Mérida,ES";
    meteo1.unidades = "&units=metric";
    meteo1.idioma = "&lang=es";
    meteo1.url = "http://api.openweathermap.org/data/2.5/weather?q=" + meteo1.ciudad + meteo1.unidades + meteo1.idioma + "&APPID=" + meteo1.apikey;
    meteo1.error = "<h2>¡problemas! No puedo obtener información de <a href='http://openweathermap.org'>OpenWeatherMap</a></h2>";
    meteo1.cargarDatos = function(){
    $.ajax({
        dataType: "json",
        url: meteo1.url,
        method: 'GET',
        success: function(data){
            meteo1.datos = data;
            meteo1.verJSON();
            meteo1.verDatos();            
        },
        error:function(){
            $("#merida").append(meteo1.error);    
        }
    });
    }
    meteo1.verJSON = function(){
        var str = JSON.stringify(meteo1.datos, null, 2);
    }
    meteo1.verDatos = function(){ 
        $("#merida").append("<h3>Datos</h3>");
        $("#merida").append("<img src=http://openweathermap.org/img/wn/" + meteo1.datos.weather[0].icon + "@2x.png alt= Error cargando la imagen/>");
        $("#merida").append("<p>Ciudad: " + meteo1.datos.name + "</p>");
        $("#merida").append("<p>País: " + meteo1.datos.sys.country + "</p>");
        $("#merida").append("<p>Latitud: " + meteo1.datos.coord.lat + " grados</p>");
        $("#merida").append("<p>Longitud: " +  meteo1.datos.coord.lon + " grados</p>");
        $("#merida").append("<p>Temperatura: " +  meteo1.datos.main.temp + " grados Celsius</p>");
        $("#merida").append("<p>Temperatura máxima: " +  meteo1.datos.main.temp_max + " grados Celsius</p>");
        $("#merida").append("<p>Temperatura mínima: " +  meteo1.datos.main.temp_min + " grados Celsius</p>");
        $("#merida").append("<p>Presión: " +  meteo1.datos.main.pressure + " milímetros</p>");
        $("#merida").append("<p>Humedad: " +  meteo1.datos.main.humidity + "%</p>"); 
        $("#merida").append("<p>Amanece a las: " + new Date( meteo1.datos.sys.sunrise *1000).toLocaleTimeString() + "</p>"); 
        $("#merida").append("<p>Oscurece a las: " + new Date( meteo1.datos.sys.sunset *1000).toLocaleTimeString() + "</p>"); 
        $("#merida").append("<p>Dirección del viento: " +  meteo1.datos.wind.deg + "  grados</p>");
        $("#merida").append("<p>Velocidad del viento: " +  meteo1.datos.wind.speed + " metros/segundo</p>");
        $("#merida").append("<p>Hora de la medida: " + new Date( meteo1.datos.dt *1000).toLocaleTimeString() + "</p>");
        $("#merida").append("<p>Fecha de la medida: " + new Date( meteo1.datos.dt *1000).toLocaleDateString() + "</p>");
        $("#merida").append("<p>Descripción: " +  meteo1.datos.weather[0].description + "</p>");
        $("#merida").append("<p>Visibilidad: " +  meteo1.datos.visibility + " metros</p>");
        $("#merida").append("<p>Nubosidad: " +  meteo1.datos.clouds.all + " %</p>");
    }


    var meteo2 = new Object();
    meteo2.apikey = "fa9740026c5f4f0c5ebca4aa6a66023d";
    meteo2.ciudad = "Salamanca";
    meteo2.unidades = "&units=metric";
    meteo2.idioma = "&lang=es";
    meteo2.url = "http://api.openweathermap.org/data/2.5/weather?q=" + meteo2.ciudad + meteo2.unidades + meteo2.idioma + "&APPID=" + meteo2.apikey;
    meteo2.error = "<h2>¡problemas! No puedo obtener información de <a href='http://openweathermap.org'>OpenWeatherMap</a></h2>";
    meteo2.cargarDatos = function(){
    $.ajax({
        dataType: "json",
        url: meteo2.url,
        method: 'GET',
        success: function(data){
            meteo2.datos = data;
            meteo2.verJSON();
            meteo2.verDatos();            
        },
        error:function(){
            $("#salamanca").append(meteo2.error);    
        }
    });
    }
    meteo2.verJSON = function(){
        var str = JSON.stringify(meteo2.datos, null, 2);
    }
    meteo2.verDatos = function(){
        $("#salamanca").append("<h3>Datos</h3>");
        $("#salamanca").append("<img src=http://openweathermap.org/img/wn/" + meteo2.datos.weather[0].icon + "@2x.png alt= Error cargando la imagen/>");
        $("#salamanca").append("<p>Ciudad: " +  meteo2.datos.name + "</p>");
        $("#salamanca").append("<p>País: " +  meteo2.datos.sys.country + "</p>");
        $("#salamanca").append("<p>Latitud: " +  meteo2.datos.coord.lat + " grados</p>");
        $("#salamanca").append("<p>Longitud: " + meteo2.datos.coord.lon + " grados</p>");
        $("#salamanca").append("<p>Temperatura: " + meteo2.datos.main.temp + " grados Celsius</p>");
        $("#salamanca").append("<p>Temperatura máxima: " + meteo2.datos.main.temp_max + " grados Celsius</p>");
        $("#salamanca").append("<p>Temperatura mínima: " + meteo2.datos.main.temp_min + " grados Celsius</p>");
        $("#salamanca").append("<p>Presión: " + meteo2.datos.main.pressure + " milímetros</p>");
        $("#salamanca").append("<p>Humedad: " + meteo2.datos.main.humidity + "%</p>"); 
        $("#salamanca").append("<p>Amanece a las: " + new Date(meteo2.datos.sys.sunrise *1000).toLocaleTimeString() + "</p>"); 
        $("#salamanca").append("<p>Oscurece a las: " + new Date(meteo2.datos.sys.sunset *1000).toLocaleTimeString() + "</p>"); 
        $("#salamanca").append("<p>Dirección del viento: " + meteo2.datos.wind.deg + "  grados</p>");
        $("#salamanca").append("<p>Velocidad del viento: " + meteo2.datos.wind.speed + " metros/segundo</p>");
        $("#salamanca").append("<p>Hora de la medida: " + new Date(meteo2.datos.dt *1000).toLocaleTimeString() + "</p>");
        $("#salamanca").append("<p>Fecha de la medida: " + new Date(meteo2.datos.dt *1000).toLocaleDateString() + "</p>");
        $("#salamanca").append("<p>Descripción: " + meteo2.datos.weather[0].description + "</p>");
        $("#salamanca").append("<p>Visibilidad: " + meteo2.datos.visibility + " metros</p>");
        $("#salamanca").append("<p>Nubosidad: " + meteo2.datos.clouds.all + " %</p>");
    }


    var meteo3 = new Object();
    meteo3.apikey = "fa9740026c5f4f0c5ebca4aa6a66023d";
    meteo3.ciudad = "Astorga,ES";
    meteo3.unidades = "&units=metric";
    meteo3.idioma = "&lang=es";
    meteo3.url = "http://api.openweathermap.org/data/2.5/weather?q=" + meteo3.ciudad + meteo3.unidades + meteo3.idioma + "&APPID=" + meteo3.apikey;
    meteo3.error = "<h2>¡problemas! No puedo obtener información de <a href='http://openweathermap.org'>OpenWeatherMap</a></h2>";
    meteo3.cargarDatos = function(){
    $.ajax({
        dataType: "json",
        url: meteo3.url,
        method: 'GET',
        success: function(data){
            meteo3.datos = data;
            meteo3.verJSON();
            meteo3.verDatos();            
        },
        error:function(){
            $("#astorga").append(meteo3.error);    
        }
    });
    }
    meteo3.verJSON = function(){
        var str = JSON.stringify(meteo3.datos, null, 2);
    }
    meteo3.verDatos = function(){
        $("#astorga").append("<h3>Datos</h3>");
        $("#astorga").append("<img src=http://openweathermap.org/img/wn/" + meteo3.datos.weather[0].icon + "@2x.png alt= Error cargando la imagen/>");
        $("#astorga").append("<p>Ciudad: " +  meteo3.datos.name + "</p>");
        $("#astorga").append("<p>País: " +  meteo3.datos.sys.country + "</p>");
        $("#astorga").append("<p>Latitud: " +  meteo3.datos.coord.lat + " grados</p>");
        $("#astorga").append("<p>Longitud: " + meteo3.datos.coord.lon + " grados</p>");
        $("#astorga").append("<p>Temperatura: " + meteo3.datos.main.temp + " grados Celsius</p>");
        $("#astorga").append("<p>Temperatura máxima: " + meteo3.datos.main.temp_max + " grados Celsius</p>");
        $("#astorga").append("<p>Temperatura mínima: " + meteo3.datos.main.temp_min + " grados Celsius</p>");
        $("#astorga").append("<p>Presión: " + meteo3.datos.main.pressure + " milímetros</p>");
        $("#astorga").append("<p>Humedad: " + meteo3.datos.main.humidity + "%</p>"); 
        $("#astorga").append("<p>Amanece a las: " + new Date(meteo3.datos.sys.sunrise *1000).toLocaleTimeString() + "</p>"); 
        $("#astorga").append("<p>Oscurece a las: " + new Date(meteo3.datos.sys.sunset *1000).toLocaleTimeString() + "</p>"); 
        $("#astorga").append("<p>Dirección del viento: " + meteo3.datos.wind.deg + "  grados</p>");
        $("#astorga").append("<p>Velocidad del viento: " + meteo3.datos.wind.speed + " metros/segundo</p>");
        $("#astorga").append("<p>Hora de la medida: " + new Date(meteo3.datos.dt *1000).toLocaleTimeString() + "</p>");
        $("#astorga").append("<p>Fecha de la medida: " + new Date(meteo3.datos.dt *1000).toLocaleDateString() + "</p>");
        $("#astorga").append("<p>Descripción: " + meteo3.datos.weather[0].description + "</p>");
        $("#astorga").append("<p>Visibilidad: " + meteo3.datos.visibility + " metros</p>");
        $("#astorga").append("<p>Nubosidad: " + meteo3.datos.clouds.all + " %</p>");
    }





