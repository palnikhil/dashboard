import { Pose } from "@mediapipe/pose";
import React, { useRef, useEffect} from "react";
import * as PoSe from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import './Camera.css'
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket("wss://test-node-project-web-socket.herokuapp.com/");

function Camera() {
  
  var username = ""
  client.onopen = () => {
    console.log('WebSocket Client Connected');
  };
  client.onmessage = (message) => {
    console.log(message.data);
  };
  function sendMessage(messagefc){
    const messageData = {
      "username": username,
      "mess": messagefc
    }
    console.log(messageData);
    client.send(JSON.stringify(messageData));
  }
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const connect = window.drawConnectors;
  const Landmark = window.drawLandmarks;
  var camera = null;
  var t1 = null;
  var user = "";
  const refreshPage = () => {
    window.location.reload();
 }
  function calculateAngle(a,b,c){
    var a1 = a;
    var b1 = b;
    var c1 = c;

    var radians = Math.atan2(c1[1]-b1[1], c1[0]-b1[0]) - Math.atan2(a1[1]-b1[1], a1[0]-b1[0])
    var angle = Math.abs(radians*180.0/Math.PI)

    if (angle > 180.0){
        angle = 360-angle
    }  
    return angle
  }

  function diff_seconds(dt1){
    var dt2 = new Date().getTime();
    var diff = (dt2 - dt1) / 1000.0;
    return Math.round(diff);
  }

  function onResults(results) {
    // const video = webcamRef.current.video;
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    // Set canvas width
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");
    
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
 
    // Only overwrite existing pixels.
    canvasCtx.globalCompositeOperation = 'source-in';
    canvasCtx.fillStyle = '#00FF00';
    canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);
    // Only overwrite missing pixels.
    canvasCtx.globalCompositeOperation = 'destination-atop';
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );
    canvasCtx.globalCompositeOperation = 'source-over';
    try{
      var left_shoulder_Y = results.poseLandmarks[11].y;
      var left_shoulder_X = results.poseLandmarks[11].x;
      var right_shoulder_Y = results.poseLandmarks[12].y;
      var right_shoulder_X = results.poseLandmarks[12].x;
      var left_waist_Y = results.poseLandmarks[23].y;
      var left_waist_X = results.poseLandmarks[23].x;
      var right_waist_Y = results.poseLandmarks[24].y;
      var right_waist_X = results.poseLandmarks[24].x;
      var left_knee_Y = results.poseLandmarks[25].y;
      var left_knee_X = results.poseLandmarks[25].x;
      var right_knee_Y = results.poseLandmarks[26].y;
      var right_knee_X = results.poseLandmarks[26].x;
      var left_ankle_Y = results.poseLandmarks[27].y;
      var left_ankle_X = results.poseLandmarks[27].x;
      var right_ankle_Y = results.poseLandmarks[28].y;
      var right_ankle_X = results.poseLandmarks[28].x;
      var LEFT_SHOULDER = [left_shoulder_X,left_shoulder_Y];
      var RIGHT_SHOULDER = [right_shoulder_X,right_shoulder_Y];
      var LEFT_WAIST = [left_waist_X,left_waist_Y];
      var RIGHT_WAIST = [right_waist_X,right_waist_Y];
      var LEFT_KNEE = [left_knee_X,left_knee_Y];
      var RIGHT_KNEE = [right_knee_X,right_knee_Y];
      var LEFT_ANKLE = [left_ankle_X,left_ankle_Y];
      var RIGHT_ANKLE = [right_ankle_X,right_ankle_Y];

      var RIGHT_WAIST_ANGLE = calculateAngle(RIGHT_SHOULDER,RIGHT_WAIST,RIGHT_KNEE);
      var LEFT_WAIST_ANGLE = calculateAngle(LEFT_SHOULDER,LEFT_WAIST,LEFT_KNEE);
      var RIGHT_KNEE_ANGLE = calculateAngle(RIGHT_WAIST,RIGHT_KNEE,RIGHT_ANKLE);
      var LEFT_KNEE_ANGLE = calculateAngle(LEFT_WAIST,LEFT_KNEE,LEFT_ANKLE);
      
      if((LEFT_WAIST_ANGLE > 170 ||RIGHT_WAIST_ANGLE > 170) && (RIGHT_KNEE_ANGLE < 170 || LEFT_KNEE_ANGLE < 170))
      {
        canvasCtx.font = "30px Arial";
        canvasCtx.fillText("Running", 100, 100);
        t1 =  new Date().getTime();
        if(username !== "")
        {
          sendMessage('w');
        }
      }
      else if(LEFT_WAIST_ANGLE < 100){
        canvasCtx.font = "30px Arial";
        canvasCtx.fillText("Crouching", 100, 100);
        if(username !== "")
        {
          sendMessage('c');
        }
      }
      else if(left_waist_Y * 600 < 250){
        console.log(left_waist_Y*600)
        canvasCtx.font = "30px Arial";
        canvasCtx.fillText("JUMP", 100, 100);
        if(username !== "")
        {
          sendMessage('k');
        }
      }
      else{
        var difference = diff_seconds(t1)
        if (difference > 0.5)
         {
           canvasCtx.font = "30px Arial";
           canvasCtx.fillText("No Movement", 100, 100);
           if(username !== "")
           {
             sendMessage('x');
           }
         }
      }
    }
    catch(err){
      console.log(err);
    }
    finally{
    connect(canvasCtx, results.poseLandmarks, PoSe.POSE_CONNECTIONS,
      {color: '#00FF00', lineWidth: 4});
    Landmark(canvasCtx, results.poseLandmarks,
     {color: '#FF0000', lineWidth: 2});
     canvasCtx.moveTo(0, 200);
     canvasCtx.lineTo(800, 200);
     canvasCtx.stroke();
    }
    canvasCtx.restore();
  }
  // }

  // setInterval(())
  useEffect(() => {
    const pose = new Pose({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
      },
    });

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: true,
      smoothSegmentation: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });

    pose.onResults(onResults);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          await pose.send({ image: webcamRef.current.video });
        },
        width: 800,
        height: 600,
      });
      camera.start();
    }
  }, []);
  return (
  <div className="main_body">
      <div className="camera">
        <Webcam
          ref={webcamRef}
          style={{
            //position: "absolute",
            paddingTop: 20,
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 800,
            height: 600,
            display: "none"
          }}
        />{" "}
        <canvas
          ref={canvasRef}
          className="output_canvas"
          style={{
            // position: "absolute",
            // paddingTop: 20,
            // marginLeft: "auto",
            // marginRight: "auto",
            // left: 0,
            // right: 0,
            // textAlign: "center",
            // zindex: 9,
            width: 800,
            height: 600,
          }}
        ></canvas>
      </div>
    <div className="conn_button">
          <button className="server_conn" onClick={refreshPage}>
            Connect to Server
          </button>
          <input className="room_conn"
              type="text"
              name="IdText"
              placeholder="Client ID..."
              onChange={(event) => {user = event.target.value}}
          />
          <button className="username_conn" onClick={()=>{
            username = user
            console.log(username)
            }}>
              Set Username
          </button>
    </div>
  </div>
  );
}

export default Camera;
