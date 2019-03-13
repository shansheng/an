if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    top.location.href = "index-m.html"
}
var launched = 0;
var k = .1;
var x = 29e-5;
var y = 75e-5;
var anis = 16;
var scale = 1.005;
var materials = [ - 80.5774 + x, 28.56218 + y];
if (!config) console.error("Config not set! Make a copy of 'config_template.js', add in your access token, and save the file as 'config.js'.");
mapboxgl.accessToken = config.accessToken;
var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v9",
    center: [ - 80.57731, 28.562],
    zoom: 17,
    bearing: 180,
    pitch: 60,
    heading: 41,
    maxZoom: 19
});
var highlighted = [];
map.on("load",
function() {
    var smap = 1;
    var ssat = 0;
    function setmap() {
        if (smap == 0) {
            map.setStyle("mapbox://styles/mapbox/streets-v9");
            document.getElementById("m").src = "buttons/map2.png";
            document.getElementById("s").src = "buttons/satellite1.png";
            smap = 1;
            ssat = 0
        }
    }
    function setsat() {
        if (smap == 1) {
            map.setStyle("mapbox://styles/mapbox/satellite-v9");
            document.getElementById("m").src = "buttons/map1.png";
            document.getElementById("s").src = "buttons/satellite2.png";
            smap = 0;
            ssat = 1
        }
    }
    document.getElementById("m").addEventListener("click",
    function() {
        setmap()
    });
    document.getElementById("s").addEventListener("click",
    function() {
        setsat()
    });
    window.threebox = new Threebox(map);
    threebox.setupDefaultLights();
    THREE.Cache.enabled = !0;
    THREE.DefaultLoadingManager.onStart = function(url, itemsLoaded, itemsTotal) {
        document.getElementById("loadingtext").innerHTML = "Started loading file: " + url + ".\nLoaded " + itemsLoaded + " of " + itemsTotal + " files."
    };
    THREE.DefaultLoadingManager.onLoad = function() {
        document.getElementById("loadingtext").innerHTML = "Loading Complete!";
        var tween = new TWEEN.Tween(document.getElementById("loading").style).to({
            opacity: .1
        },
        1100).start();
        tween.easing(TWEEN.Easing.Cubic.Out);
        tween.yoyo(!0);
        tween.onComplete(function() {
            document.getElementById("loading").style.zIndex = -100
        })
    };
    THREE.DefaultLoadingManager.onProgress = function(url, itemsLoaded, itemsTotal) {
        document.getElementById("loadingtext").innerHTML = "Loading file: " + url + ".\nLoaded " + itemsLoaded + " of " + itemsTotal + " files.";
        document.getElementById("loading").style.opacity = 1
    };
    THREE.DefaultLoadingManager.onError = function(url) {
        document.getElementById("loadingtext").innerHTML = "There was an error loading " + url
    };
    loader = new THREE.JSONLoader;
    var models = [{
        src: "model/1/1",
        emissive: "model/1/1.jpg",
        name: "fh"
    },
    {
        src: "model/2/2",
        emissive: "model/2/2.jpg",
        alpha: "model/2/2a.jpg",
        name: "2"
    },
    {
        src: "model/3/3",
        emissive: "model/3/3.jpg",
        name: "3"
    },
    {
        src: "model/4/4",
        emissive: "model/4/4.jpg",
        name: "4"
    },
    {
        src: "model/5/5",
        emissive: "model/5/5.jpg",
        name: "5"
    },
    {
        src: "model/6/6",
        emissive: "model/6/6.jpg",
        name: "6"
    },
    {
        src: "model/7/7",
        emissive: "model/7/7.jpg",
        name: "7"
    },
    {
        src: "model/8/8",
        emissive: "model/8/8.jpg",
        name: "8"
    },
    {
        src: "model/9/9",
        emissive: "model/9/9.jpg",
        alpha: "model/9/9a.jpg",
        name: "9"
    },
    {
        src: "model/10/10",
        emissive: "model/10/10.jpg",
        alpha: "model/10/10a.jpg",
        name: "10"
    },
    {
        src: "model/11/111",
        emissive: "model/11/111.jpg",
        alpha: "model/11/111a.jpg",
        name: "111"
    },
    {
        src: "model/11/112",
        emissive: "model/11/112.jpg",
        alpha: "model/11/112a.jpg",
        name: "112"
    },
    {
        src: "model/11/113",
        emissive: "model/11/113.jpg",
        alpha: "model/11/113a.jpg",
        name: "113"
    },
    {
        src: "model/11/114",
        emissive: "model/11/114.jpg",
        alpha: "model/11/114a.jpg",
        name: "114"
    },
    {
        src: "model/12/12",
        emissive: "model/12/12.jpg",
        name: "12"
    },
    {
        src: "model/13/13",
        emissive: "model/13/13.jpg",
        name: "13"
    },
    {
        src: "model/g/g",
        emissive: "model/g/gnr.jpg",
        name: "g"
    },
    ];
    function loadModel(model) {
        loader.load(`$ {
            model.src
        }.json`,
        function(geometry, materials) {
            geometry.rotateY(90 / 360 * 4 * Math.PI - .01);
            geometry.rotateX(90 / 360 * 2 * Math.PI);
            var material = new THREE.MeshPhongMaterial;
            material.emissive = new THREE.Color(16777215);
            material.color = new THREE.Color(657930);
            material.emissiveMap = (new THREE.TextureLoader).load(model.emissive);
            material.shading = THREE.FlatShading;
            material.side = THREE.DoubleSide;
            if (model.alpha) {
                material.alphaMap = (new THREE.TextureLoader).load(model.alpha);
                material.alphaTest = .4;
                material.transparent = !0
            }
            material.anisotropy = anis;
            geometry.castShadow = !0;
            geometry.receiveShadow = !1;
            geom = new THREE.Mesh(geometry, material);
            geom.name = model.name;
            if (model.name == "g") {
                material.shininess = 0
            }
            threebox.addAtCoordinate(geom, mainPosition, {
                scaleToLatitude: !0,
                preScale: scale
            });
            geom.position.setX(geom.position.x - 2.4);
            geom.position.setY(geom.position.y + 3.5)
        })
    }
    models.forEach(model = >{
        loadModel(model)
    });
    loader.load("model/flame/flame.json",
    function(geometry, materials) {
        geometry.rotateY(90 / 360 * 4 * Math.PI - .01);
        geometry.rotateX(90 / 360 * 2 * Math.PI);
        var material = new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture("model/flame/flame.png")
        });
        material.map.wrapS = THREE.RepeatWrapping;
        material.map.wrapT = THREE.RepeatWrapping;
        material.side = THREE.DoubleSide;
        material.alphaTest = .1;
        material.transparent = !0;
        geometry.castShadow = !0;
        geometry.receiveShadow = !1;
        geom = new THREE.Mesh(geometry, material);
        geom.name = "flame";
        threebox.addAtCoordinate(geom, mainPosition, {
            scaleToLatitude: !0,
            preScale: scale
        });
        geom.position.setX(geom.position.x - 2.4);
        geom.position.setY(geom.position.y + 3.5)
    });
    var clicked = 0;
    var audio = new Audio("model/misc.mp3");
    var timeleft = 24;
    var timecheck = 24;
    var zoomOut = !1;
    function go() {
        if (launched == 0) {
            if (timecheck <= 0) {
                document.getElementById("two").src = "img/gif.gif";
                $("#three").fadeIn("slow",
                function() {});
                launched = 1;
                document.getElementById("launch").innerHTML = "IGNITION";
                setTimeout(() = >{
                    map.rotateTo(200, {
                        duration: 9e3
                    })
                },
                1e3);
                var tween = new TWEEN.Tween(threebox.scene.getObjectByName("fh").position).to({
                    z: 250
                },
                1e4).start();
                tween.easing(TWEEN.Easing.Exponential.In);
                tween.yoyo(!0);
                tween.onComplete(function() {
                    map.flyTo({
                        zoom: 15.4
                    });
                    setTimeout(() = >{
                        map.rotateTo(240, {
                            duration: 9e3
                        })
                    },
                    1e3);
                    launched = 1;
                    var tween = new TWEEN.Tween(threebox.scene.getObjectByName("fh").position).to({
                        z: 500
                    },
                    1e4).start();
                    tween.yoyo(!0);
                    tween.onComplete(function() {
                        map.flyTo({
                            zoom: 14
                        });
                        setTimeout(() = >{
                            map.rotateTo(0, {
                                duration: 75e3
                            })
                        },
                        1e3);
                        launched = 1;
                        var tween = new TWEEN.Tween(threebox.scene.getObjectByName("fh").position).to({
                            z: 4e3
                        },
                        8e4).start();
                        tween.yoyo(!0);
                        tween.onComplete(function() {
                            launched = 0;
                            console.log("2nd stage done");
                            $("#menu").fadeOut("slow",
                            function() {});
                            $("#two").fadeOut("slow",
                            function() {});
                            $("#three").fadeOut("slow",
                            function() {})
                        })
                    })
                })
            }
        }
    }
    function launch() {
        $("#two").fadeIn("slow",
        function() {});
        audio.play();
        var downloadTimer = setInterval(function() {
            if (timeleft < 11) {
                document.getElementById("launch").innerHTML = "00:00:0" + --timeleft
            } else {
                document.getElementById("launch").innerHTML = "00:00:" + --timeleft
            }
            timecheck = timecheck - 1;
            if (timeleft <= 0) clearInterval(downloadTimer);
            go()
        },
        1e3);
        map.rotateTo(300, {
            duration: 8e3
        });
        window.setTimeout(() = >{
            map.rotateTo(60, {
                duration: 8e3
            })
        },
        8e3);
        window.setTimeout(() = >{
            map.rotateTo(180, {
                duration: 8e3
            })
        },
        16e3)
    }
    document.getElementById("launch").onclick = function() {
        if (clicked == 0) {
            launch();
            clicked = 1
        }
    }
});
requestAnimationFrame(animate);
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
    if (launched == 1) {
        threebox.scene.getObjectByName("flame").position.setZ(threebox.scene.getObjectByName("fh").position.z)
    } else {
        try {
            threebox.scene.getObjectByName("flame").position.setZ( - 1e14)
        } catch(err) {}
    }
    try {
        threebox.scene.getObjectByName("flame").material.map.offset.y = threebox.scene.getObjectByName("flame").material.map.offset.y + .04
    } catch(err) {}
}