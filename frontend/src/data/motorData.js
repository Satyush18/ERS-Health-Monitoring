const motorData = [
  // Transformer (CT) - gradually rising with sine-like current fluctuation
  { Motor: "Transformer (CT)", Temperature: "87.3", Vibration: "0.42", Current: "54" },
  { Motor: "Transformer (CT)", Temperature: "90.1", Vibration: "0.78", Current: "61" },
  { Motor: "Transformer (CT)", Temperature: "88.6", Vibration: "0.31", Current: "68" },
  { Motor: "Transformer (CT)", Temperature: "93.4", Vibration: "1.05", Current: "63" },
  { Motor: "Transformer (CT)", Temperature: "97.8", Vibration: "0.57", Current: "57" },
  { Motor: "Transformer (CT)", Temperature: "103.1", Vibration: "1.23", Current: "72" },

  // IGBT Module - moderate fluctuation
  { Motor: "IGBT Module", Temperature: "74.2", Vibration: "0.38", Current: "41" },
  { Motor: "IGBT Module", Temperature: "78.9", Vibration: "0.91", Current: "49" },
  { Motor: "IGBT Module", Temperature: "76.4", Vibration: "0.54", Current: "45" },
  { Motor: "IGBT Module", Temperature: "82.7", Vibration: "1.12", Current: "53" },
  { Motor: "IGBT Module", Temperature: "87.3", Vibration: "0.67", Current: "48" },
  { Motor: "IGBT Module", Temperature: "92.8", Vibration: "1.34", Current: "62" },

  // Power Block - higher vibration spikes
  { Motor: "Power Block", Temperature: "68.5", Vibration: "1.43", Current: "37" },
  { Motor: "Power Block", Temperature: "72.3", Vibration: "2.17", Current: "44" },
  { Motor: "Power Block", Temperature: "70.1", Vibration: "0.89", Current: "40" },
  { Motor: "Power Block", Temperature: "76.8", Vibration: "2.54", Current: "48" },
  { Motor: "Power Block", Temperature: "80.4", Vibration: "1.76", Current: "43" },
  { Motor: "Power Block", Temperature: "85.2", Vibration: "2.31", Current: "57" },

  // Rectifier Unit - high temp, noisy current
  { Motor: "Rectifier Unit", Temperature: "93.7", Vibration: "0.61", Current: "63" },
  { Motor: "Rectifier Unit", Temperature: "97.4", Vibration: "1.08", Current: "71" },
  { Motor: "Rectifier Unit", Temperature: "95.2", Vibration: "0.74", Current: "66" },
  { Motor: "Rectifier Unit", Temperature: "102.8", Vibration: "1.31", Current: "78" },
  { Motor: "Rectifier Unit", Temperature: "106.3", Vibration: "0.93", Current: "74" },
  { Motor: "Rectifier Unit", Temperature: "110.5", Vibration: "1.52", Current: "82" },

  // Cooling System - lower values, slight vibration noise
  { Motor: "Cooling System", Temperature: "63.8", Vibration: "0.29", Current: "31" },
  { Motor: "Cooling System", Temperature: "69.5", Vibration: "0.67", Current: "38" },
  { Motor: "Cooling System", Temperature: "66.2", Vibration: "0.44", Current: "34" },
  { Motor: "Cooling System", Temperature: "74.1", Vibration: "0.83", Current: "42" },
  { Motor: "Cooling System", Temperature: "79.6", Vibration: "0.58", Current: "47" },
  { Motor: "Cooling System", Temperature: "85.3", Vibration: "1.07", Current: "54" },

  // Motor Drive Controller - sine-like current, moderate vibration
  { Motor: "Motor Drive Controller", Temperature: "78.4", Vibration: "0.53", Current: "48" },
  { Motor: "Motor Drive Controller", Temperature: "83.7", Vibration: "1.14", Current: "56" },
  { Motor: "Motor Drive Controller", Temperature: "80.9", Vibration: "0.72", Current: "51" },
  { Motor: "Motor Drive Controller", Temperature: "88.2", Vibration: "1.38", Current: "62" },
  { Motor: "Motor Drive Controller", Temperature: "93.5", Vibration: "0.91", Current: "57" },
  { Motor: "Motor Drive Controller", Temperature: "99.1", Vibration: "1.67", Current: "70" },
];

export default motorData;