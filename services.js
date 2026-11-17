// Showcase copy. Only cards with a url (the Demos section) are live.
const SERVICES = {
  "sections": [
    {
      "name": "Day To Day",
      "services": [
        {
          "name": "MyCalendar",
          "icon": "📅",
          "desc": "Calendar and tasks"
        }
      ]
    },
    {
      "name": "Teaching",
      "services": [
        {
          "name": "Grade Agent",
          "icon": "📝",
          "desc": "Say grades on your phone → gradebook"
        },
        {
          "name": "Worksheet Builder",
          "icon": "🧩",
          "desc": "Markdown worksheets, chat drafts, PDFs"
        },
        {
          "name": "Lecture Agent",
          "icon": "🎤",
          "desc": "Lecture script → teacher script, slides, Kahoot import (beta)"
        }
      ]
    },
    {
      "name": "Games & Activities",
      "services": [
        {
          "name": "ESL Bomb Squad",
          "icon": "💣",
          "desc": "Mobile web demo"
        },
        {
          "name": "ESL Bomb Squad DEMO",
          "icon": "💣",
          "desc": "6 easy modules + matching manual"
        },
        {
          "name": "Guess Who: Head to Head",
          "icon": "🐉",
          "desc": "Imaginary Dragons slice preview"
        },
        {
          "name": "Co-op Taxi",
          "icon": "🚕",
          "desc": "Split-screen driver + navigator prototype"
        }
      ]
    },
    {
      "name": "AI & agents",
      "services": [
        {
          "name": "Hermes",
          "icon": "🪽",
          "desc": "Hermes Agent dashboard"
        },
        {
          "name": "LlamaForge",
          "icon": "🔥",
          "desc": "Local models on Winterdragon"
        },
        {
          "name": "Scriptcast",
          "icon": "🎙️",
          "desc": "Script or document → audio, a voice per character (Winterdragon)"
        },
        {
          "name": "DeepSeek Harness",
          "icon": "🐋",
          "desc": "dsh web profile"
        }
      ]
    },
    {
      "name": "Let's Play",
      "services": [
        {
          "name": "Foundry VTT",
          "icon": "🎲",
          "desc": "7th Sea (public, password-protected)"
        }
      ]
    },
    {
      "name": "Utilities",
      "services": [
        {
          "name": "Syncthing",
          "icon": "🔄",
          "desc": "File sync across my devices"
        },
        {
          "name": "LlamaForge",
          "icon": "🔥",
          "desc": "Local models on Winterdragon"
        }
      ]
    },
    {
      "name": "Demos",
      "services": [
        {
          "name": "Co-op Taxi — public demo",
          "icon": "🚕",
          "desc": "Driver + navigator on two devices (Render, wakes in ~1 min)",
          "url": "https://co-op-taxi.onrender.com/"
        },
        {
          "name": "ESL Bomb Squad — public demo",
          "icon": "💣",
          "desc": "5-module demo bomb + expert manual (GitHub Pages)",
          "url": "https://teacherjeremyford.github.io/esl-bomb-squad-demo/"
        },
        {
          "name": "ESL Guess Who — public demo",
          "icon": "🕵️",
          "desc": "Head to Head, one device per player (GitHub Pages)",
          "url": "https://teacherjeremyford.github.io/esl-guess-who/"
        },
        {
          "name": "Grade Agent — public demo",
          "icon": "🎙️",
          "desc": "Voice grading with fake data, OpenAI voice (Render, password, wakes in ~1 min)",
          "url": "https://grade-agent-demo.onrender.com/"
        }
      ]
    },
    {
      "name": "Behind the scenes",
      "services": [
        {
          "name": "Hermes gateway",
          "desc": "Messaging platforms"
        },
        {
          "name": "Hermes serve",
          "desc": "Remote client gateway"
        },
        {
          "name": "Vision OCR",
          "desc": "Local OCR endpoint"
        },
        {
          "name": "Foundry relay",
          "desc": "Hermes ↔ Foundry bridge"
        },
        {
          "name": "Foundry auth proxy",
          "desc": "Caddy in front of Foundry (public funnel → here)"
        },
        {
          "name": "Foundry login gate",
          "desc": "Login page + 3-strikes lockout"
        },
        {
          "name": "LlamaForge tunnel",
          "desc": "Tunnel to Winterdragon"
        },
        {
          "name": "Ollama",
          "desc": "Local models"
        },
        {
          "name": "Google Drive",
          "desc": "Drive mount"
        },
        {
          "name": "Grades backup",
          "desc": "Watches ~/teaching/grades"
        }
      ],
      "background": true
    }
  ]
};
