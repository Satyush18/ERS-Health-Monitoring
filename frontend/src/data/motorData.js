const motorData = [
  // Transformer (CT)
  { Motor: "Transformer (CT)", Temperature: "88.0", Vibration: "1.2", Current: "58" },
  { Motor: "Transformer (CT)", Temperature: "90.7", Vibration: "1.35", Current: "58.9" },
  { Motor: "Transformer (CT)", Temperature: "87.9", Vibration: "1.63", Current: "65.7" },
  { Motor: "Transformer (CT)", Temperature: "96.9", Vibration: "1.52", Current: "65.8" },
  { Motor: "Transformer (CT)", Temperature: "99.1", Vibration: "1.65", Current: "65.5" },
  { Motor: "Transformer (CT)", Temperature: "105.5", Vibration: "1.92", Current: "73.7" },

  // IGBT Module
  { Motor: "IGBT Module", Temperature: "75.0", Vibration: "1.0", Current: "43" },
  { Motor: "IGBT Module", Temperature: "77.9", Vibration: "1.12", Current: "42.7" },
  { Motor: "IGBT Module", Temperature: "77.8", Vibration: "1.1", Current: "45.4" },
  { Motor: "IGBT Module", Temperature: "80.5", Vibration: "1.43", Current: "47.2" },
  { Motor: "IGBT Module", Temperature: "87.0", Vibration: "1.77", Current: "49.5" },
  { Motor: "IGBT Module", Temperature: "92.3", Vibration: "1.64", Current: "51.9" },

  // Power Block
  { Motor: "Power Block", Temperature: "70.0", Vibration: "1.1", Current: "39" },
  { Motor: "Power Block", Temperature: "67.2", Vibration: "1.12", Current: "40.8" },
  { Motor: "Power Block", Temperature: "73.8", Vibration: "1.23", Current: "48.3" },
  { Motor: "Power Block", Temperature: "74.3", Vibration: "1.43", Current: "47.1" },
  { Motor: "Power Block", Temperature: "77.0", Vibration: "1.39", Current: "50.2" },
  { Motor: "Power Block", Temperature: "84.5", Vibration: "1.6", Current: "52.6" },

  // Rectifier Unit
  { Motor: "Rectifier Unit", Temperature: "95.0", Vibration: "1.3", Current: "65" },
  { Motor: "Rectifier Unit", Temperature: "92.2", Vibration: "1.46", Current: "68.9" },
  { Motor: "Rectifier Unit", Temperature: "99.6", Vibration: "1.42", Current: "69.3" },
  { Motor: "Rectifier Unit", Temperature: "99.9", Vibration: "1.44", Current: "80.3" },
  { Motor: "Rectifier Unit", Temperature: "101.0", Vibration: "1.5", Current: "83.3" },
  { Motor: "Rectifier Unit", Temperature: "106.8", Vibration: "1.59", Current: "81.8" },

  // Cooling System
  { Motor: "Cooling System", Temperature: "65.0", Vibration: "0.9", Current: "33" },
  { Motor: "Cooling System", Temperature: "67.3", Vibration: "0.87", Current: "34.9" },
  { Motor: "Cooling System", Temperature: "77.1", Vibration: "1.23", Current: "34.2" },
  { Motor: "Cooling System", Temperature: "78.5", Vibration: "1.53", Current: "40.9" },
  { Motor: "Cooling System", Temperature: "75.8", Vibration: "1.39", Current: "44.6" },
  { Motor: "Cooling System", Temperature: "83.6", Vibration: "2.0", Current: "43.6" },

  // Motor Drive Controller
  { Motor: "Motor Drive Controller", Temperature: "80.0", Vibration: "1.1", Current: "50" },
  { Motor: "Motor Drive Controller", Temperature: "86.4", Vibration: "1.21", Current: "50.6" },
  { Motor: "Motor Drive Controller", Temperature: "81.9", Vibration: "1.22", Current: "52.5" },
  { Motor: "Motor Drive Controller", Temperature: "91.9", Vibration: "1.46", Current: "60.0" },
  { Motor: "Motor Drive Controller", Temperature: "93.2", Vibration: "1.33", Current: "62.6" },
  { Motor: "Motor Drive Controller", Temperature: "94.0", Vibration: "1.57", Current: "62.5" },

  // CT
  { Motor: "CT", Temperature: "82.0", Vibration: "0.35", Current: "58" },
  { Motor: "CT", Temperature: "86.1", Vibration: "0.55", Current: "57.9" },
  { Motor: "CT", Temperature: "86.5", Vibration: "0.47", Current: "65.6" },
  { Motor: "CT", Temperature: "90.5", Vibration: "0.85", Current: "65.1" },
  { Motor: "CT", Temperature: "87.8", Vibration: "0.96", Current: "70.5" },
  { Motor: "CT", Temperature: "99.9", Vibration: "1.21", Current: "67.2" },

  // IGBT
  { Motor: "IGBT", Temperature: "77.0", Vibration: "0.4", Current: "44" },
  { Motor: "IGBT", Temperature: "75.5", Vibration: "0.46", Current: "45.3" },
  { Motor: "IGBT", Temperature: "80.9", Vibration: "0.68", Current: "51.6" },
  { Motor: "IGBT", Temperature: "84.2", Vibration: "0.84", Current: "49.9" },
  { Motor: "IGBT", Temperature: "85.4", Vibration: "0.67", Current: "57.2" },
  { Motor: "IGBT", Temperature: "90.3", Vibration: "0.94", Current: "62.1" },

  // Breaker
  { Motor: "Breaker", Temperature: "58.0", Vibration: "1.1", Current: "28" },
  { Motor: "Breaker", Temperature: "60.5", Vibration: "1.14", Current: "31.1" },
  { Motor: "Breaker", Temperature: "59.3", Vibration: "0.97", Current: "28.9" },
  { Motor: "Breaker", Temperature: "63.2", Vibration: "1.68", Current: "39.4" },
  { Motor: "Breaker", Temperature: "62.6", Vibration: "1.78", Current: "43.6" },
  { Motor: "Breaker", Temperature: "64.8", Vibration: "2.2", Current: "45.4" },

  // Contactor
  { Motor: "Contactor", Temperature: "56.0", Vibration: "0.85", Current: "26" },
  { Motor: "Contactor", Temperature: "56.1", Vibration: "1.05", Current: "31.9" },
  { Motor: "Contactor", Temperature: "60.0", Vibration: "1.13", Current: "28.8" },
  { Motor: "Contactor", Temperature: "62.0", Vibration: "1.06", Current: "29.1" },
  { Motor: "Contactor", Temperature: "61.8", Vibration: "1.23", Current: "35.0" },
  { Motor: "Contactor", Temperature: "65.6", Vibration: "1.43", Current: "36.3" },

  // Voltage Relay
  { Motor: "Voltage Relay", Temperature: "49.0", Vibration: "0.18", Current: "12" },
  { Motor: "Voltage Relay", Temperature: "46.2", Vibration: "0.42", Current: "13.9" },
  { Motor: "Voltage Relay", Temperature: "52.6", Vibration: "0.34", Current: "17.5" },
  { Motor: "Voltage Relay", Temperature: "54.7", Vibration: "0.64", Current: "15.3" },
  { Motor: "Voltage Relay", Temperature: "60.4", Vibration: "0.62", Current: "18.8" },
  { Motor: "Voltage Relay", Temperature: "60.4", Vibration: "0.74", Current: "24.4" },

  // Current relay
  { Motor: "Current relay", Temperature: "48.0", Vibration: "0.16", Current: "11" },
  { Motor: "Current relay", Temperature: "50.1", Vibration: "0.29", Current: "16.4" },
  { Motor: "Current relay", Temperature: "55.1", Vibration: "0.38", Current: "20.8" },
  { Motor: "Current relay", Temperature: "53.4", Vibration: "0.48", Current: "23.3" },
  { Motor: "Current relay", Temperature: "54.6", Vibration: "0.31", Current: "21.1" },
  { Motor: "Current relay", Temperature: "58.6", Vibration: "1.04", Current: "25.5" },

  // Air Compressor Motor
  { Motor: "Air Compressor Motor", Temperature: "72.0", Vibration: "1.18", Current: "46" },
  { Motor: "Air Compressor Motor", Temperature: "72.3", Vibration: "1.36", Current: "49.6" },
  { Motor: "Air Compressor Motor", Temperature: "80.7", Vibration: "1.2", Current: "53.5" },
  { Motor: "Air Compressor Motor", Temperature: "85.6", Vibration: "1.54", Current: "51.3" },
  { Motor: "Air Compressor Motor", Temperature: "81.6", Vibration: "1.56", Current: "59.5" },
  { Motor: "Air Compressor Motor", Temperature: "90.0", Vibration: "1.88", Current: "62.8" },

  // 1# Blower, Electric Room
  { Motor: "1# Blower, Electric Room", Temperature: "58.0", Vibration: "0.74", Current: "24" },
  { Motor: "1# Blower, Electric Room", Temperature: "60.1", Vibration: "0.97", Current: "25.2" },
  { Motor: "1# Blower, Electric Room", Temperature: "62.7", Vibration: "0.81", Current: "23.0" },
  { Motor: "1# Blower, Electric Room", Temperature: "63.1", Vibration: "1.18", Current: "29.0" },
  { Motor: "1# Blower, Electric Room", Temperature: "60.4", Vibration: "1.21", Current: "32.7" },
  { Motor: "1# Blower, Electric Room", Temperature: "68.2", Vibration: "1.48", Current: "33.8" },

  // 2# Blower, Electric Room
  { Motor: "2# Blower, Electric Room", Temperature: "57.0", Vibration: "0.69", Current: "23" },
  { Motor: "2# Blower, Electric Room", Temperature: "59.8", Vibration: "0.7", Current: "28.0" },
  { Motor: "2# Blower, Electric Room", Temperature: "67.3", Vibration: "1.13", Current: "25.9" },
  { Motor: "2# Blower, Electric Room", Temperature: "70.1", Vibration: "1.16", Current: "28.9" },
  { Motor: "2# Blower, Electric Room", Temperature: "70.0", Vibration: "1.38", Current: "34.4" },
  { Motor: "2# Blower, Electric Room", Temperature: "72.1", Vibration: "1.36", Current: "35.5" },

  // 3# Blower, Electric Room
  { Motor: "3# Blower, Electric Room", Temperature: "59.0", Vibration: "0.77", Current: "25" },
  { Motor: "3# Blower, Electric Room", Temperature: "61.5", Vibration: "0.74", Current: "22.8" },
  { Motor: "3# Blower, Electric Room", Temperature: "63.6", Vibration: "0.87", Current: "28.4" },
  { Motor: "3# Blower, Electric Room", Temperature: "64.4", Vibration: "1.05", Current: "28.9" },
  { Motor: "3# Blower, Electric Room", Temperature: "61.7", Vibration: "1.03", Current: "31.8" },
  { Motor: "3# Blower, Electric Room", Temperature: "68.9", Vibration: "1.27", Current: "36.1" },

  // 4# Blower, Electric Room
  { Motor: "4# Blower, Electric Room", Temperature: "58.5", Vibration: "0.71", Current: "24" },
  { Motor: "4# Blower, Electric Room", Temperature: "59.7", Vibration: "0.75", Current: "31.5" },
  { Motor: "4# Blower, Electric Room", Temperature: "64.1", Vibration: "0.79", Current: "29.5" },
  { Motor: "4# Blower, Electric Room", Temperature: "62.3", Vibration: "0.99", Current: "32.8" },
  { Motor: "4# Blower, Electric Room", Temperature: "68.6", Vibration: "1.09", Current: "40.0" },
  { Motor: "4# Blower, Electric Room", Temperature: "70.9", Vibration: "1.08", Current: "37.9" },

  // Front Hoist Blower Motor
  { Motor: "Front Hoist Blower Motor", Temperature: "63.5", Vibration: "0.83", Current: "31" },
  { Motor: "Front Hoist Blower Motor", Temperature: "63.9", Vibration: "0.66", Current: "30.4" },
  { Motor: "Front Hoist Blower Motor", Temperature: "69.9", Vibration: "1.11", Current: "38.2" },
  { Motor: "Front Hoist Blower Motor", Temperature: "67.1", Vibration: "1.19", Current: "35.1" },
  { Motor: "Front Hoist Blower Motor", Temperature: "72.5", Vibration: "1.2", Current: "43.2" },
  { Motor: "Front Hoist Blower Motor", Temperature: "80.4", Vibration: "1.38", Current: "46.3" },

  // Rear Hoist Blower Motor
  { Motor: "Rear Hoist Blower Motor", Temperature: "62.8", Vibration: "0.79", Current: "30" },
  { Motor: "Rear Hoist Blower Motor", Temperature: "64.0", Vibration: "0.89", Current: "34.2" },
  { Motor: "Rear Hoist Blower Motor", Temperature: "65.3", Vibration: "0.97", Current: "35.1" },
  { Motor: "Rear Hoist Blower Motor", Temperature: "70.1", Vibration: "0.91", Current: "34.8" },
  { Motor: "Rear Hoist Blower Motor", Temperature: "67.4", Vibration: "1.04", Current: "36.8" },
  { Motor: "Rear Hoist Blower Motor", Temperature: "81.8", Vibration: "1.11", Current: "39.4" },

  // Crowd Blower Motor
  { Motor: "Crowd Blower Motor", Temperature: "61.7", Vibration: "0.81", Current: "29" },
  { Motor: "Crowd Blower Motor", Temperature: "66.5", Vibration: "0.8", Current: "34.1" },
  { Motor: "Crowd Blower Motor", Temperature: "64.1", Vibration: "0.94", Current: "32.3" },
  { Motor: "Crowd Blower Motor", Temperature: "67.1", Vibration: "0.98", Current: "43.6" },
  { Motor: "Crowd Blower Motor", Temperature: "68.9", Vibration: "1.06", Current: "39.6" },
  { Motor: "Crowd Blower Motor", Temperature: "69.9", Vibration: "1.2", Current: "49.6" },

  // Front Swing Blower Motor
  { Motor: "Front Swing Blower Motor", Temperature: "60.9", Vibration: "0.76", Current: "28" },
  { Motor: "Front Swing Blower Motor", Temperature: "67.1", Vibration: "0.99", Current: "29.0" },
  { Motor: "Front Swing Blower Motor", Temperature: "63.0", Vibration: "0.9", Current: "30.2" },
  { Motor: "Front Swing Blower Motor", Temperature: "68.1", Vibration: "1.18", Current: "28.0" },
  { Motor: "Front Swing Blower Motor", Temperature: "79.4", Vibration: "1.39", Current: "35.1" },
  { Motor: "Front Swing Blower Motor", Temperature: "82.7", Vibration: "1.5", Current: "36.2" },

  // Rear Swing Blower Motor
  { Motor: "Rear Swing Blower Motor", Temperature: "60.1", Vibration: "0.73", Current: "27" },
  { Motor: "Rear Swing Blower Motor", Temperature: "61.2", Vibration: "0.92", Current: "28.9" },
  { Motor: "Rear Swing Blower Motor", Temperature: "68.1", Vibration: "0.76", Current: "29.1" },
  { Motor: "Rear Swing Blower Motor", Temperature: "66.8", Vibration: "1.24", Current: "31.3" },
  { Motor: "Rear Swing Blower Motor", Temperature: "69.2", Vibration: "1.32", Current: "29.1" },
  { Motor: "Rear Swing Blower Motor", Temperature: "73.6", Vibration: "1.45", Current: "33.2" },

  // Right Propel Blower Motor
  { Motor: "Right Propel Blower Motor", Temperature: "64.8", Vibration: "0.88", Current: "32" },
  { Motor: "Right Propel Blower Motor", Temperature: "64.1", Vibration: "1.03", Current: "34.3" },
  { Motor: "Right Propel Blower Motor", Temperature: "68.7", Vibration: "0.87", Current: "32.1" },
  { Motor: "Right Propel Blower Motor", Temperature: "69.3", Vibration: "1.25", Current: "36.6" },
  { Motor: "Right Propel Blower Motor", Temperature: "69.6", Vibration: "1.4", Current: "39.0" },
  { Motor: "Right Propel Blower Motor", Temperature: "72.5", Vibration: "1.45", Current: "47.3" },

  // Left Propel Blower Motor
  { Motor: "Left Propel Blower Motor", Temperature: "64.1", Vibration: "0.85", Current: "31" },
  { Motor: "Left Propel Blower Motor", Temperature: "61.3", Vibration: "0.82", Current: "28.8" },
  { Motor: "Left Propel Blower Motor", Temperature: "70.5", Vibration: "1.2", Current: "33.4" },
  { Motor: "Left Propel Blower Motor", Temperature: "72.8", Vibration: "1.18", Current: "33.8" },
  { Motor: "Left Propel Blower Motor", Temperature: "73.1", Vibration: "1.26", Current: "37.5" },
  { Motor: "Left Propel Blower Motor", Temperature: "77.6", Vibration: "1.37", Current: "38.0" },

  // Hoist Gear Oil Pump (Lubrication)
  { Motor: "Hoist Gear Oil Pump (Lubrication)", Temperature: "54.3", Vibration: "0.42", Current: "18" },
  { Motor: "Hoist Gear Oil Pump (Lubrication)", Temperature: "53.3", Vibration: "0.74", Current: "19.3" },
  { Motor: "Hoist Gear Oil Pump (Lubrication)", Temperature: "63.2", Vibration: "0.5", Current: "20.6" },
  { Motor: "Hoist Gear Oil Pump (Lubrication)", Temperature: "63.6", Vibration: "0.89", Current: "18.4" },
  { Motor: "Hoist Gear Oil Pump (Lubrication)", Temperature: "65.8", Vibration: "1.26", Current: "27.7" },
  { Motor: "Hoist Gear Oil Pump (Lubrication)", Temperature: "70.9", Vibration: "1.31", Current: "28.6" },

  // Front Swing Gear Oil Pump (Lubrication)
  { Motor: "Front Swing Gear Oil Pump (Lubrication)", Temperature: "53.7", Vibration: "0.39", Current: "17" },
  { Motor: "Front Swing Gear Oil Pump (Lubrication)", Temperature: "55.9", Vibration: "0.23", Current: "19.6" },
  { Motor: "Front Swing Gear Oil Pump (Lubrication)", Temperature: "57.6", Vibration: "0.66", Current: "21.2" },
  { Motor: "Front Swing Gear Oil Pump (Lubrication)", Temperature: "62.2", Vibration: "0.67", Current: "22.2" },
  { Motor: "Front Swing Gear Oil Pump (Lubrication)", Temperature: "60.7", Vibration: "0.99", Current: "26.3" },
  { Motor: "Front Swing Gear Oil Pump (Lubrication)", Temperature: "67.1", Vibration: "1.19", Current: "25.6" },

  // Rear Swing Gear Oil Pump (Lubrication)
  { Motor: "Rear Swing Gear Oil Pump (Lubrication)", Temperature: "53.1", Vibration: "0.37", Current: "16" },
  { Motor: "Rear Swing Gear Oil Pump (Lubrication)", Temperature: "56.6", Vibration: "0.39", Current: "19.0" },
  { Motor: "Rear Swing Gear Oil Pump (Lubrication)", Temperature: "58.5", Vibration: "0.68", Current: "18.9" },
  { Motor: "Rear Swing Gear Oil Pump (Lubrication)", Temperature: "59.7", Vibration: "0.59", Current: "20.3" },
  { Motor: "Rear Swing Gear Oil Pump (Lubrication)", Temperature: "56.9", Vibration: "0.93", Current: "26.4" },
  { Motor: "Rear Swing Gear Oil Pump (Lubrication)", Temperature: "68.2", Vibration: "0.98", Current: "25.0" },

  // Motor Winch (electric winch)
  { Motor: "Motor Winch (electric winch)", Temperature: "75.0", Vibration: "1.34", Current: "55" },
  { Motor: "Motor Winch (electric winch)", Temperature: "73.6", Vibration: "1.39", Current: "57.1" },
  { Motor: "Motor Winch (electric winch)", Temperature: "85.8", Vibration: "1.48", Current: "56.5" },
  { Motor: "Motor Winch (electric winch)", Temperature: "86.4", Vibration: "1.6", Current: "62.7" },
  { Motor: "Motor Winch (electric winch)", Temperature: "93.6", Vibration: "1.52", Current: "65.6" },
  { Motor: "Motor Winch (electric winch)", Temperature: "98.2", Vibration: "1.59", Current: "69.7" },

  // Dipper Trip Motor (开斗电机)
  { Motor: "Dipper Trip Motor (开斗电机)", Temperature: "68.0", Vibration: "1.21", Current: "44" },
  { Motor: "Dipper Trip Motor (开斗电机)", Temperature: "69.2", Vibration: "1.49", Current: "42.1" },
  { Motor: "Dipper Trip Motor (开斗电机)", Temperature: "77.5", Vibration: "1.67", Current: "49.2" },
  { Motor: "Dipper Trip Motor (开斗电机)", Temperature: "77.4", Vibration: "1.66", Current: "50.9" },
  { Motor: "Dipper Trip Motor (开斗电机)", Temperature: "76.3", Vibration: "1.85", Current: "57.2" },
  { Motor: "Dipper Trip Motor (开斗电机)", Temperature: "81.1", Vibration: "1.86", Current: "60.8" },

  // 1# Dedust Blower Motor
  { Motor: "1# Dedust Blower Motor", Temperature: "71.5", Vibration: "1.46", Current: "47" },
  { Motor: "1# Dedust Blower Motor", Temperature: "70.9", Vibration: "1.77", Current: "51.1" },
  { Motor: "1# Dedust Blower Motor", Temperature: "74.4", Vibration: "1.74", Current: "49.4" },
  { Motor: "1# Dedust Blower Motor", Temperature: "79.7", Vibration: "2.02", Current: "53.9" },
  { Motor: "1# Dedust Blower Motor", Temperature: "79.2", Vibration: "2.27", Current: "53.4" },
  { Motor: "1# Dedust Blower Motor", Temperature: "83.6", Vibration: "2.14", Current: "56.1" },

  // 2# Dedust Blower Motor
  { Motor: "2# Dedust Blower Motor", Temperature: "70.8", Vibration: "1.41", Current: "46" },
  { Motor: "2# Dedust Blower Motor", Temperature: "75.7", Vibration: "1.74", Current: "46.1" },
  { Motor: "2# Dedust Blower Motor", Temperature: "77.9", Vibration: "1.6", Current: "52.0" },
  { Motor: "2# Dedust Blower Motor", Temperature: "82.2", Vibration: "1.93", Current: "57.8" },
  { Motor: "2# Dedust Blower Motor", Temperature: "79.2", Vibration: "2.01", Current: "59.7" },
  { Motor: "2# Dedust Blower Motor", Temperature: "83.0", Vibration: "2.1", Current: "56.8" },

  // 3# Dedust Blower Motor
  { Motor: "3# Dedust Blower Motor", Temperature: "72.1", Vibration: "1.49", Current: "48" },
  { Motor: "3# Dedust Blower Motor", Temperature: "74.9", Vibration: "1.59", Current: "48.0" },
  { Motor: "3# Dedust Blower Motor", Temperature: "82.4", Vibration: "1.62", Current: "45.8" },
  { Motor: "3# Dedust Blower Motor", Temperature: "81.2", Vibration: "1.65", Current: "52.3" },
  { Motor: "3# Dedust Blower Motor", Temperature: "89.4", Vibration: "1.49", Current: "54.4" },
  { Motor: "3# Dedust Blower Motor", Temperature: "89.5", Vibration: "1.88", Current: "59.6" },

  // Screw Convey Motor (dust handling)
  { Motor: "Screw Convey Motor (dust handling)", Temperature: "66.7", Vibration: "1.28", Current: "39" },
  { Motor: "Screw Convey Motor (dust handling)", Temperature: "64.0", Vibration: "1.41", Current: "40.9" },
  { Motor: "Screw Convey Motor (dust handling)", Temperature: "73.2", Vibration: "1.34", Current: "50.3" },
  { Motor: "Screw Convey Motor (dust handling)", Temperature: "77.2", Vibration: "1.69", Current: "48.2" },
  { Motor: "Screw Convey Motor (dust handling)", Temperature: "77.8", Vibration: "1.85", Current: "52.5" },
  { Motor: "Screw Convey Motor (dust handling)", Temperature: "82.3", Vibration: "1.88", Current: "52.1" },

  // Dust Unload Motor (卸灰阀)
  { Motor: "Dust Unload Motor (卸灰阀)", Temperature: "64.2", Vibration: "1.09", Current: "36" },
  { Motor: "Dust Unload Motor (卸灰阀)", Temperature: "64.9", Vibration: "1.2", Current: "36.4" },
  { Motor: "Dust Unload Motor (卸灰阀)", Temperature: "69.3", Vibration: "1.33", Current: "40.1" },
  { Motor: "Dust Unload Motor (卸灰阀)", Temperature: "69.4", Vibration: "1.32", Current: "38.1" },
  { Motor: "Dust Unload Motor (卸灰阀)", Temperature: "73.9", Vibration: "1.5", Current: "43.9" },
  { Motor: "Dust Unload Motor (卸灰阀)", Temperature: "72.3", Vibration: "1.56", Current: "47.7" },
];

export default motorData;