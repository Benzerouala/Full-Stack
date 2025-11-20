{le projet réaliser par :
    =>Benzeroula Ossama
    =>Hanan Amakhmouj
    =>Abdelaaziz Khouda
    =>Youness Elkhatib 
}
🗂️ Structure du projet : 
miniProjet-Logger/
│
├── logger.js          # Classe Logger (EventEmitter)
├── monitor.js         # Script de surveillance système
├── server.js          # Serveur HTTP
├── log.txt            # Fichier de logs (généré automatiquement)
└── README.md          # Documentation
# 🖥 Node System Logger — Mini Project

## 📘 Description

The *Node System Logger* is a command-line mini project built with *Node.js*.  
It monitors the system’s activity (memory, CPU usage, uptime, etc.), logs the data into a file, and provides a simple *HTTP server* to view the logs in real time.  

This project demonstrates key Node.js concepts such as:
- Working with *core modules* (os, fs, http, events)
- Using *EventEmitter* to handle custom events
- Writing and reading from files
- Creating a simple HTTP server
- Running periodic tasks using setInterval()

---

## 🎯 Objectives

The main goal of this mini project is to:
1. *Monitor system activity* (memory, uptime, etc.) in real time.  
2. *Log data* to a text file automatically every few seconds.  
3. *Emit and handle events* such as “low memory” warnings.  
4. *Serve logs and stats* through a local HTTP server.

---

## 🗂 Project Structure


---

## 🧩 Files Explanation

### 1. logger.js
- Defines a *Logger* class that extends Node’s built-in EventEmitter.
- Responsible for writing messages to log.txt.
- Emits a messageLogged event each time data is written.
- Emits a lowMemory event when system memory is below 20%.

*Key concepts used:*  
➡ EventEmitter, File System (fs), Custom events.

---

### 2. monitor.js
- Main script that imports both os and the custom Logger module.  
- Uses setInterval() to:
  - Collect system info every *5 seconds*:
    - Free memory  
    - Total memory  
    - System uptime  
    - Free memory percentage  
  - Log this data using logger.log().
- Detects when free memory drops below 20% and emits a *lowMemory* alert.

*Key concepts used:*  
➡ OS module, Timers (setInterval), Event handling, File logging.

---

### 3. server.js
- Creates a simple *HTTP server* that listens on port *3000*.
- Handles 3 main routes:
  - / → Displays a welcome message.  
  - /logs → Displays the content of log.txt.  
  - /stats → Displays the current system stats in *JSON format*.
- Uses the fs module to read log files and the os module to collect stats.

*Key concepts used:*  
➡ HTTP module, File reading, Routing, JSON response.

---

### 4. log.txt
- A text file automatically created and updated by logger.js.  
- Contains a time-stamped record of each system check (every 5 seconds).  
- Example of a log entry: