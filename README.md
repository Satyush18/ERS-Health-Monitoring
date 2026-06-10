# ERS Health Monitoring System

## Overview
ERS Health Monitoring System is a web-based application developed to monitor the health status of industrial assets and equipment. The system analyzes sensor data such as temperature and vibration, identifies abnormal conditions, and provides real-time alerts to help prevent equipment failures.

## Features

- Asset health monitoring dashboard
- Temperature and vibration analysis
- Real-time alert generation
- Data upload and processing
- Interactive analytics and visualization
- Equipment status tracking
- User-friendly interface

## Technology Stack

### Frontend
- React.js
- JavaScript
- HTML
- CSS

### Backend
- FastAPI (Python)
- Pandas

### Data Storage
- CSV-based storage

## Project Structure

```
ERS-Health-Monitoring/
│
├── backend/
│   ├── main.py
│   ├── database/
│   └── data.csv
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Dashboard.js
│   │   │   ├── Motors.js
│   │   │   ├── Components.js
│   │   │   ├── Analytics.js
│   │   │   ├── Alerts.js
│   │   │   └── UploadData.js
│   │   └── App.js
│   └── public/
│
└── README.md
```

## Functional Modules

### Dashboard
Displays overall asset health information and system statistics.

### Upload Data
Allows users to upload equipment sensor data for analysis.

### Components Monitoring
Tracks the condition of individual equipment components.

### Motors Monitoring
Monitors motor performance using temperature and vibration readings.

### Analytics
Provides charts and visual insights from collected data.

### Alerts
Generates alerts when abnormal operating conditions are detected.

## How to Run

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm start
```

## Future Enhancements

- Machine Learning based predictive maintenance
- Database integration (MySQL/PostgreSQL)
- User authentication
- Cloud deployment
- Email and SMS alerts
- Advanced analytics dashboard

## Author

**Satyush Mohapatra**

B.Tech – Computer Science and Engineering  
KIIT University

## License

This project is developed for educational and academic purposes.
