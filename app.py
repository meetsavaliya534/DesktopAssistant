from flask import Flask, request, jsonify
import pyttsx3
import subprocess
import ctypes
import win32gui
import win32con
import pyautogui
import time
import os

app = Flask(__name__)
app.config['WELCOME_MESSAGE'] = "Hello, {name}. Welcome to our University. We hope you have a great day ahead and enjoy your time here {name}."

def generate_speech(name, custom_message=None):
    engine = pyttsx3.init()
    engine.setProperty('rate', 150)
    engine.setProperty('volume', 0.9)
    
    if custom_message:
        speech = custom_message
    else:
        speech = f"Hello, {name}. Welcome to our University. We hope you have a great day ahead and enjoy your time here {name}."
    
    engine.say(speech)
    engine.runAndWait()
    return speech

@app.route('/generate_speech', methods=['POST'])
def generate_speech_route():
    data = request.get_json()
    name = data.get('name')
    custom_message = data.get('message')
    if name:
        speech = generate_speech(name, custom_message)
        return jsonify({'message': speech})
    else:
        return jsonify({'error': 'Name not provided'}), 400

@app.route('/update_welcome_message', methods=['POST'])
def update_welcome_message():
    data = request.get_json()
    message = data.get('message')
    if message:
        app.config['WELCOME_MESSAGE'] = message
        return jsonify({'message': 'Welcome message updated successfully'})
    else:
        return jsonify({'error': 'Message not provided'}), 400

@app.route('/shutdown', methods=['POST'])
def shutdown_pc():
    try:
        subprocess.call('shutdown / p /f')
        return jsonify({'message': 'Shutting down the system'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/restart', methods=['POST'])
def restart_pc():
    try:
        subprocess.call(["shutdown", "/r"])
        return jsonify({'message': 'Restarting the system'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/lock_pc', methods=['POST'])
def lock_pc():
    try:
        ctypes.windll.user32.LockWorkStation()
        return jsonify({'message': 'Locking the system'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/sleep_pc', methods=['POST'])
def sleep_pc():
    try:
        win32gui.SendMessage(win32con.HWND_BROADCAST, win32con.WM_SYSCOMMAND, win32con.SC_MONITORPOWER, 2)
        return jsonify({'message': 'Putting the system to sleep'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/wake_up_pc', methods=['POST'])
def wake_up_pc():
    try:
        ctypes.windll.kernel32.SetSystemPowerState(None, ctypes.c_int(1))
        return jsonify({'message': 'Waking up the system'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# @app.route('/mute', methods=['POST'])
# def mute_pc():
#     try:
#         # Mute the PC using system command or library
#         # Example command for Windows
#         os.system("nircmd.exe mutesysvolume 1")
#         return jsonify({'message': 'PC muted successfully'})
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500
    

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
