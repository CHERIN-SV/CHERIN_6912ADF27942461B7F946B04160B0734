// Weather quiz and temperature converter functionality
const questions = [
    {
        question: "What causes rain?",
        options: [
            "Condensation of water vapor",
            "Evaporation of water",
            "Wind movement",
            "Sun's heat"
        ],
        correct: 0
    },
    
      {
        question: "What causes rain?",
        options: [
            "Water vapor condensing in clouds",
            "Wind blowing hard",
            "Sun heating the ground",
            "Trees releasing moisture"
        ],
        correct: 0
    },
    {
        question: "Which season typically has the highest temperatures?",
        options: [
            "Winter",
            "Spring",
            "Summer",
            "Fall"
        ],
        correct: 2
    },
    {
        question: "What type of cloud produces thunderstorms?",
        options: [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        correct: 2
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which layer of the atmosphere contains the ozone layer?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which gas is most responsible for the greenhouse effect?",
        "options": [
            "Oxygen",
            "Carbon Dioxide",
            "Nitrogen",
            "Hydrogen"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    },
    {
        "question": "What is the term for a long period of abnormally low rainfall?",
        "options": [
            "Hurricane",
            "Flood",
            "Drought",
            "Monsoon"
        ],
        "correct": 2
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "Which phenomenon is responsible for the cooling effect felt after sweating?",
        "options": [
            "Condensation",
            "Evaporation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "What scale is used to measure the strength of a hurricane?",
        "options": [
            "Fujita Scale",
            "Saffir-Simpson Scale",
            "Richter Scale",
            "Beaufort Scale"
        ],
        "correct": 1
    },
    {
        "question": "What type of cloud produces thunderstorms?",
        "options": [
            "Stratus",
            "Cumulus",
            "Cumulonimbus",
            "Cirrus"
        ],
        "correct": 2
    },
    {
        "question": "What is the primary source of energy that drives weather on Earth?",
        "options": [
            "The Moon",
            "The Sun",
            "The Earth's Core",
            "The Ocean Currents"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What is the process by which water vapor turns into liquid water?",
        "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Sublimation"
        ],
        "correct": 1
    },
    {
        "question": "What instrument is used to measure atmospheric pressure?",
        "options": [
            "Thermometer",
            "Barometer",
            "Anemometer",
            "Hygrometer"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a form of precipitation?",
        "options": [
            "Rain",
            "Snow",
            "Hail",
            "Fog"
        ],
        "correct": 3
    }

];

let currentQuestion = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    // Quiz functionality
    const nextButton = document.getElementById('nextQuestion');
    nextButton.addEventListener('click', showNextQuestion);
    showQuestion();

    // Temperature converter functionality
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');

    celsiusInput.addEventListener('input', () => {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            fahrenheitInput.value = ((celsius * 9/5) + 32).toFixed(1);
        }
    });

    fahrenheitInput.addEventListener('input', () => {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheit)) {
            celsiusInput.value= ((fahrenheit - 32) * 5/9).toFixed(1);
        }
    });
});

function showQuestion() {
    const questionData = questions[currentQuestion];
    const quizContent = document.getElementById('quizContent');
    
    quizContent.innerHTML = `
        <div class="question">
            <h4>${questionData.question}</h4><br>
            <div class="options">
                ${questionData.options.map((option, index) => `
                    <button onclick="checkAnswer(${index})" style="height:70px;width:300px;font-size:20px;">${option}</button><br><br>
                `).join('')}
            </div><br>
        </div>
    `;

    updateScore();
}

function checkAnswer(selectedIndex) {
    const questionData = questions[currentQuestion];
    if (selectedIndex === questionData.correct) {
        score++;
    }
    showNextQuestion();
}

function showNextQuestion() {
    currentQuestion = (currentQuestion + 1) ;
    showQuestion();
}

function updateScore() {
    document.getElementById('scoreBoard').innerHTML = `Score: ${score}`;
}

