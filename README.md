# Neema

# Raspberry Pi Ring Camera Client

This repository contains the Raspberry Pi client software for a DIY Ring-style smart camera. The client captures video from the Raspberry Pi camera and streams it to a backend server for processing and distribution.

## Features

- Captures live video from the Raspberry Pi Camera Module.
- Streams video to a backend server using RTSP or HTTP.
- Lightweight and efficient Python-based implementation.

## Prerequisites

### Hardware
- Raspberry Pi (3 or newer recommended).
- Raspberry Pi Camera Module (or compatible USB camera).
- MicroSD card with Raspberry Pi OS installed.
- Stable power supply for the Raspberry Pi.

### Software
- Raspberry Pi OS (Raspbian Bullseye or later recommended).
- Python 3.7 or newer.
- Libraries:
  - `picamera` (for video capture).
  - `opencv-python` (for advanced video handling).
  - `requests` (for sending data to the backend).
  - `ffmpeg` (optional, for advanced video streaming).

## Installation

1. **Update System Packages**:
   ```bash
   sudo apt update && sudo apt upgrade
   ```

2. **Install Required Software**:
   ```bash
   sudo apt install python3-pip ffmpeg
   pip3 install picamera opencv-python requests
   ```

3. **Clone This Repository**:
   ```bash
   git clone https://github.com/Nukambe/neema.git
   cd neema
   ```

4. **Configure the Client**:
   - Create a configuration file named `.config.json` in the project root:
     ```json
     {
       "backend_url": "http://<backend-ip>:5000",
       "stream_resolution": [640, 480],
       "frame_rate": 30
     }
     ```

## Usage

1. **Connect the Raspberry Pi Camera**:
   - Ensure the camera is securely connected and enabled in `raspi-config`.
   ```bash
   sudo raspi-config
   ```
   Navigate to **Interface Options > Camera**, and enable it.

2. **Run the Client**:
   ```bash
   python3 stream.py
   ```

3. **Verify the Stream**:
   - Check the backend server to confirm the video feed is being received.

## File Structure

- `stream.py`: Main script for capturing and streaming video.
- `.config.json`: Configuration file for client settings.
- `requirements.txt`: List of Python dependencies.

## Configuration

The `.config.json` file allows customization of:
- **Backend URL**: Specify the address of the backend server.
- **Stream Resolution**: Define the video resolution (e.g., `[640, 480]`).
- **Frame Rate**: Set the frames per second for the video stream.

## Troubleshooting

-
-
-

## Roadmap

- 
- 
-

## Contributing

---