var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
} 



Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

recognition.onresult = function(event)
    console.log(event);
    var Content = event.results[0][0].transcript;
        console.log(Content);
        document.getElementById("textbox").innerHTML=Content;
        console.log(Content);
        if(Content=="take my selfie"){
            console.log("taking selfie ----");
            speak();
        }

function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
Webcam.attach(camera);
}
camera = document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("results").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}