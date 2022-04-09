prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width:350,
    height: 300,
    imgae_format: 'png',
    png_quality :90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function takesnapshot ()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image"src =" '+data_uri+'"/>';

    });
}

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3w49KZShC/model.json', modelLoaded );

function modelLoaded(){
    console.log("Model Loaded");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The First Prediction Is" + prediction_1;
    speak_data_2 = "The Second Prediction Is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speek(utterThis);
}