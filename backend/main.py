from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import os

app = FastAPI(title="ERS Health Monitoring API")

# -----------------------------
# CORS FIX
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# FILE PATH
# -----------------------------
DATA_FILE = "database/data.csv"

os.makedirs("database", exist_ok=True)

# -----------------------------
# HOME
# -----------------------------
@app.get("/")
def home():
    return {
        "message": "ERS Health Monitoring API Running"
    }

# -----------------------------
# UPLOAD CSV
# -----------------------------
@app.post("/upload")
async def upload_csv(file: UploadFile = File(...)):
    try:
        df = pd.read_csv(file.file)

        df.to_csv(DATA_FILE, index=False)

        return {
            "status": "success",
            "message": "CSV uploaded successfully",
            "rows": len(df)
        }

    except Exception as e:
        return {
            "status": "error",
            "message": str(e)
        }

# -----------------------------
# GET DATA
# -----------------------------
@app.get("/data")
def get_data():

    if not os.path.exists(DATA_FILE):
        return []

    try:
        df = pd.read_csv(DATA_FILE)

        return df.fillna("").to_dict(orient="records")

    except Exception as e:
        return {
            "error": str(e)
        }

# -----------------------------
# DASHBOARD SUMMARY
# -----------------------------
@app.get("/summary")
def summary():

    if not os.path.exists(DATA_FILE):
        return {
            "total_assets": 0,
            "healthy_assets": 0,
            "fault_assets": 0,
            "health_score": 0
        }

    df = pd.read_csv(DATA_FILE)

    total_assets = len(df)

    fault_assets = len(
        df[
            (df["Temperature"] > 100) |
            (df["Vibration"] > 2)
        ]
    )

    healthy_assets = total_assets - fault_assets

    health_score = (
        round((healthy_assets / total_assets) * 100, 2)
        if total_assets > 0
        else 0
    )

    return {
        "total_assets": total_assets,
        "healthy_assets": healthy_assets,
        "fault_assets": fault_assets,
        "health_score": health_score
    }

# -----------------------------
# ALERTS
# -----------------------------
@app.get("/alerts")
def alerts():

    if not os.path.exists(DATA_FILE):
        return []

    df = pd.read_csv(DATA_FILE)

    alerts = []

    for _, row in df.iterrows():

        if row["Temperature"] > 100:
            alerts.append({
                "Motor": row["Motor"],
                "Type": "High Temperature",
                "Value": row["Temperature"]
            })

        if row["Vibration"] > 2:
            alerts.append({
                "Motor": row["Motor"],
                "Type": "High Vibration",
                "Value": row["Vibration"]
            })

    return alerts