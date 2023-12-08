import axios from "axios";
export const data = [
    {
        "title": "Son of the forest",
        "id": 1,
        "platform": "Steam",
        "description": "  Survival FPS by Activision. Uncover the secrets of a mysterious forest in this intense survival game. Encounter hostile creatures, craft tools, and strive to survive against the backdrop of stunning visuals and gripping gameplay. ",
        "genre": "Survival",
        "releaseDate": "2023-08-23",
        "developer": "Activision",
        "publishedby": "Activision",
        "video": "https://www.youtube.com/embed/8sghWJKPWno?si=QoEhY7gEAyXXg7A5",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/Son%20of%20the%20forest/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/Son%20of%20the%20forest/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/Son%20of%20the%20forest/captura.png?raw=true",
        "size": "80GB",
        "price": 70.99
    },
    {
        "title": "Call of Duty: Modern Warfare 3",
        "id": 2,
        "description": "Epic FPS Campaign and Multiplayer. Join the intense FPS action with Modern Warfare 3. Experience a gripping single-player campaign, engage in competitive multiplayer battles, and explore a new open-world zombie mode. Sledgehammer Games delivers an adrenaline-pumping sequel.",
        "genre": "FPS",
        "releaseDate": "2023-11-10",
        "developer": "Sledgehammer Games",
        "publishedby": "Activision",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/Call%20of%20Duty%20Modern%20Warfare%203/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/Call%20of%20Duty%20Modern%20Warfare%203/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/Call%20of%20Duty%20Modern%20Warfare%203/captura.png?raw=true",
        "video": "https://www.youtube.com/embed/CEeVm-dGVKQ?si=cJMPSfqydbQjFK4s",
        "size": "64GB",
        "price": 12.99,
    },
    {
        "title": "Forza Horizon",
        "id": 3,
        "platform": "Xbox",
        "description": "Open-world Racing Adventure. Immerse yourself in the exhilarating world of open-world racing. Explore diverse locations, participate in races, and showcase your skills in stunts. Forza Horizon delivers a thrilling racing experience with stunning visuals and dynamic gameplay.",
        "genre": "Sports",
        "releaseDate": "2012-10-23",
        "developer": "Playground Games",
        "publishedby": "Microsoft Studios",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/Forza%20Horizon/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/Forza%20Horizon/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/Forza%20Horizon/captura.png?raw=true",
        "video": "https://www.youtube.com/embed/Rv7xLt5yNsM?si=dhLvaQnsmfsvEqnh?autoplay=1",
        "size": "103GB",
        "price": 59.99
    },
    {
        "title": "FIFA 24",
        "id": 4,
        "platform": "Origin",
        "description": "Football Simulator for All Platforms. FIFA 24, the latest installment, offers a comprehensive football experience. Engage in solo or online modes, enjoy an enhanced FIFA Ultimate Team, and savor improved graphics and gameplay across various platforms.",
        "genre": "Sports",
        "releaseDate": "2023-09-21",
        "developer": "EA Sports",
        "publishedby": "EA Swiss Sarl",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/FIFA%2024/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/FIFA%2024/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/FIFA%2024/captura.png?raw=true",
        "video": "https://www.youtube.com/embed/L30zvMbVJlM?si=BhKHJ7PcK5PJMkpw",
        "size": "24GB",
        "price": 24.99
    },
    {
        "title": "Payday 3",
        "id": 5,
        "platform": "Steam",
        "description": "Cooperative Heist FPS. Dive into the high-stakes world of cooperative heists. Plan and execute perfect robberies with friends, experiencing the adrenaline of intense first-person shooter action in PAYDAY 3's thrilling sequel.",
        "genre": "FPS",
        "releaseDate": "2023-09-21",
        "developer": "Starbreeze Studios",
        "publishedby": "Deep Silver",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/Payday%203/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/Payday%203/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/Payday%203/captura.png?raw=true",
        "video": "https://www.youtube.com/embed/TlkwDNirzF8?si=6P17kcYy4CCqIWKk",
        "size": "65GB",
        "price": 39.99,
    },
    {
        "title": "Far Cry 6",
        "id": 6,
        "platform": "Epic G",
        "description": "First-person Shooter in Yara. Fight against the oppressive regime of Antón Castillo in Far Cry 6. Play as guerrilla fighter Dani Rojas and lead a revolution on the fictional Caribbean island of Yara. Explore a captivating narrative with intense FPS gameplay..",
        "genre": "FPS",
        "releaseDate": "2021-10-07",
        "developer": "Ubisoft Toronto",
        "publishedby": "Ubisoft",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/Far%20Cry%206/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/Far%20Cry%206/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/Far%20Cry%206/captura.png?raw=true",
        "video": "https://www.youtube.com/embed/IYoya-4DCbs?si=gKyCoAueiwCOEge4",
        "size": "30GB",
        "price": 25.99
    },
    {
        "title": "Grand Theft Auto V",
        "id": 7,
        "platform": "Steam",
        "description": "Open-world Action Adventure. GTA V immerses players in a sprawling open world of crime and chaos. Follow the interconnected lives of three protagonists as they navigate the criminal underworld, offering a gripping narrative alongside the freedom of sandbox exploration.",
        "genre": "Acction",
        "releaseDate": "2013-09-17",
        "developer": "Rockstar North",
        "publishedby": "Rockstar Games",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/Grand%20Theft%20Auto%20V/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/Grand%20Theft%20Auto%20V/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/Grand%20Theft%20Auto%20V/captura.png?raw=true",
        "video": "https://www.youtube.com/embed/QkkoHAzjnUs?si=cdObb5_g1U9-6SHy",
        "size": "72GB",
        "price": 30.99
    },
    {
        "title": "Assetto Corsa",
        "id": 8,
        "platform": "Steam",
        "description": "Realistic Racing Simulation. Assetto Corsa provides an authentic racing experience with extensive customization. Immerse yourself in realistic physics, precise controls, and a variety of tracks and cars. Kunos Simulazioni delivers a simulator tailored for racing enthusiasts.",
        "genre": "Simulator",
        "releaseDate": "2014-12-19",
        "developer": "Kunos Simulazioni",
        "publishedby": "Kunos Simulazioni",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/Assetto%20Corsa/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/Assetto%20Corsa/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/Assetto%20Corsa/captura.png?raw=true",
        "video": "https://www.youtube.com/embed/2naR61zAD-Q?si=F5ggnP_w8CLaHVZQ",
        "size": "54GB",
        "price": 19.99
    },
    {
        "title": "Age of Empires IV: The Sultans Ascend",
        "id": 9,
        "platform": "Steam",
        "description": "Real-time Strategy Expansion. The Sultans Ascend expansion for Age of Empires IV unfolds a compelling single-player campaign set in the Middle East during the Crusades. Lead the Muslim resistance, explore historical battles, and enjoy new civilizations, adding depth to the acclaimed strategy game.",
        "genre": "Strategy",
        "releaseDate": "2023-12-14",
        "developer": "Relic Entertainment",
        "publishedby": "Xbox Game Studios",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/Age%20of%20Empires%20IV%20The%20Sultans%20Ascend/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/Age%20of%20Empires%20IV%20The%20Sultans%20Ascend/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/Age%20of%20Empires%20IV%20The%20Sultans%20Ascend/captura.png?raw=true",
        "video": "https://www.youtube.com/embed/_j-uv3lN3B4?si=hj_2uUBSfjadxMu4",
        "size": "N/A",
        "price": 19.99
    },
    {
        "title": "God of War: Ragnarok",
        "id": 10,
        "platform": "Steam",
        "description": "Norse-inspired Action Adventure. God of War: Ragnarok continues Kratos' saga with Norse mythology. Face formidable foes, explore the mysteries of Ragnarok, and delve into a rich narrative. Sony Santa Monica delivers a visually stunning and emotionally charged action-adventure for PlayStation 5 and PlayStation 4.",
        "genre": "Adventure",
        "releaseDate": "2022-11-09",
        "developer": "Sony Santa Monica",
        "publishedby": "Sony Interactive Entertainment",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/God%20of%20War%20Ragnarok/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/God%20of%20War%20Ragnarok/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/God%20of%20War%20Ragnarok/captura.png?raw=true",
        "video": "https://www.youtube.com/embed/F3jePdO9_jc?si=SYpbJTjedAfpwNK-",
        "size": "76GB",
        "price": 55.99
    },
    {
        "title": "Red Dead Redemption 2",
        "id": 11,
        "platform": "Steam",
        "description": "Open-world Action Adventure in the Wild West. Red Dead Redemption 2 immerses players in the expansive landscapes of the American frontier. Experience the life of Arthur Morgan, an outlaw on the run, in this gripping narrative-driven adventure.",
        "genre": "Action",
        "releaseDate": "2018-10-26",
        "developer": "Rockstar Games",
        "publishedby": "Rockstar Games",
        "video": "https://www.youtube.com/embed/MyaYlbizpvs?si=uvlRFP-ouegRpLzI",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/Red%20Dead%20Redemption%202/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/Red%20Dead%20Redemption%202/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/Red%20Dead%20Redemption%202/captura.png?raw=true",
        "size": "150GB",
        "price": 49.99
    },
    {
        "title": "Cyberpunk 2077",
        "id": 12,
        "platform": "GOG",
        "description": "Immersive RPG in a Cyberpunk Dystopia. Dive into Night City, a futuristic metropolis filled with intrigue and danger. Cyberpunk 2077, developed by CD Projekt, offers a vast open world with a branching narrative and intense first-person shooter gameplay.",
        "genre": "RPG",
        "releaseDate": "2020-12-10",
        "developer": "CD Projekt",
        "publishedby": "CD Projekt",
        "video": "https://www.youtube.com/embed/Q_v3ttvCVfA?si=aaO2P9rh0EdvMsaK",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/Cyber%20Punk%202077/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/Cyber%20Punk%202077/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/Cyber%20Punk%202077/captura.png?raw=true",
        "size": "70GB",
        "price": 39.99
    },
    {
        "title": "The Elder Scrolls V: Skyrim",
        "id": 13,
        "platform": "Steam",
        "description": "Epic Fantasy RPG Adventure. Embark on a mythical journey in the vast and immersive world of Skyrim. Developed by Bethesda Game Studios, this RPG masterpiece allows players to shape their destiny as the Dragonborn in a land filled with magic and intrigue.",
        "genre": "RPG",
        "releaseDate": "2011-11-11",
        "developer": "Bethesda Game Studios",
        "publishedby": "Bethesda Softworks",
        "video": "https://www.youtube.com/embed/JSRtYpNRoN0?si=VvZGWpTyrhicKZwd",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/The%20Elder%20Scrolls%20V%20Skyrim/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/The%20Elder%20Scrolls%20V%20Skyrim/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/The%20Elder%20Scrolls%20V%20Skyrim/captura.png?raw=true",
        "size": "50GB",
        "price": 29.99
    },
    {
        "title": "Rainbow Six Siege",
        "id": 14,
        "platform": "Ubisoft",
        "description": "Tactical Multiplayer FPS. Engage in intense and strategic multiplayer battles in Rainbow Six Siege. Developed by Ubisoft Montreal, this FPS game focuses on teamwork and strategy, offering a variety of operators and destructible environments.",
        "genre": "FPS",
        "releaseDate": "2015-12-01",
        "developer": "Ubisoft Montreal",
        "publishedby": "Ubisoft",
        "video": "https://www.youtube.com/embed/ZH0VC-MTAzE?si=3L58eJ831j-7Kt-7",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/Rainbow%20Six%20Siege/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/Rainbow%20Six%20Siege/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/Rainbow%20Six%20Siege/captura.png?raw=true",
        "size": "80GB",
        "price": 19.99
    },
    {
        "title": "Assassin's Creed Valhalla",
        "id": 15,
        "platform": "Epic",
        "description": "Viking-themed Action RPG. Set in the Viking Age, Assassin's Creed Valhalla, developed by Ubisoft Montreal, lets players explore the open world as Eivor, a Norse raider. Engage in epic battles, build alliances, and shape the fate of England.",
        "genre": "Action",
        "releaseDate": "2020-11-10",
        "developer": "Ubisoft Montreal",
        "publishedby": "Ubisoft",
        "video": "https://www.youtube.com/embed/ssrNcwxALS4?si=aZN8PHOvcvTHM3dl",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/Assassin's%20Creed%20Valhalla/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/Assassin's%20Creed%20Valhalla/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/Assassin's%20Creed%20Valhalla/captura.png?raw=true",
        "size": "70GB",
        "price": 49.99
    },
    {
        "title": "Doom Eternal",
        "id": 16,
        "platform": "Steam",
        "description": "Fast-paced First-Person Shooter. Rip and tear through hordes of demons in Doom Eternal. Developed by id Software, this adrenaline-fueled FPS offers intense combat, a gripping narrative, and stunning visuals in the battle against Hell's forces.",
        "genre": "FPS",
        "releaseDate": "2020-03-20",
        "developer": "id Software",
        "publishedby": "Bethesda Softworks",
        "video": "https://www.youtube.com/embed/2HOClc6Svg4?si=ntv1pe_cIAKuYEZl",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/Doom%20Ethernal/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/Doom%20Ethernal/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/Doom%20Ethernal/captura.png?raw=true",
        "size": "50GB",
        "price": 29.99
    },
    {
        "title": "The Witcher 3: Wild Hunt",
        "id": 17,
        "platform": "GOG",
        "description": "Epic Fantasy RPG Adventure. Embark on a journey as Geralt of Rivia in The Witcher 3: Wild Hunt. Developed by CD Projekt, this RPG masterpiece offers a vast open world, rich storytelling, and monster hunting in a dark and immersive fantasy realm.",
        "genre": "RPG",
        "releaseDate": "2015-05-19",
        "developer": "CD Projekt",
        "publishedby": "CD Projekt",
        "video": "https://www.youtube.com/embed/XHrskkHf958?si=AOQequSptGTtwOQ9",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/the%20witcher%203/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/the%20witcher%203/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/the%20witcher%203/captura.png?raw=true",
        "size": "60GB",
        "price": 39.99
    },
    {
        "title": "Star Wars Jedi: Fallen Order",
        "id": 18,
        "platform": "Origin",
        "description": "Action-Adventure in the Star Wars Universe. Become a Jedi in Star Wars Jedi: Fallen Order. Developed by Respawn Entertainment, this action-adventure game takes place in the Star Wars galaxy, offering lightsaber combat and a compelling narrative.",
        "genre": "Adventure",
        "releaseDate": "2019-11-15",
        "developer": "Respawn Entertainment",
        "publishedby": "Electronic Arts",
        "video": "https://www.youtube.com/embed/0GLbwkfhYZk?si=psH24_Y6Ml8G_Rke",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/Star%20Wars%20Jedi%20Fallen%20Order/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/Star%20Wars%20Jedi%20Fallen%20Order/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/Star%20Wars%20Jedi%20Fallen%20Order/captura.png?raw=true",
        "size": "50GB",
        "price": 44.99
    },
    {
        "title": "Minecraft",
        "id": 19,
        "platform": "Steam",
        "description": "Sandbox Adventure and Creativity. Immerse yourself in the blocky world of Minecraft. Developed by Mojang, this sandbox game allows players to explore, build, and survive in procedurally generated worlds. Unleash your creativity with limitless possibilities.",
        "genre": "Survival",
        "releaseDate": "2011-11-18",
        "developer": "Mojang",
        "publishedby": "Mojang",
        "video": "https://www.youtube.com/embed/jMe3tdyjouM?si=_e0CGxQ5KphUinUE",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/Minecraft/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/Minecraft/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/Minecraft/captura.png?raw=true",
        "size": "Varies",
        "price": 26.95
    },
    {
        "title": "Among Us",
        "id": 20,
        "platform": "Steam",
        "description": "Social Deduction Multiplayer Game. Among Us, developed by InnerSloth, is a social deduction game set on a space-themed setting. Work with crewmates to complete tasks, but beware of impostors trying to eliminate the crew. Trust and deception are key.",
        "genre": "Strategy",
        "releaseDate": "2018-11-16",
        "developer": "InnerSloth",
        "publishedby": "InnerSloth",
        "video": "https://www.youtube.com/embed/7skPMxVsZBE?si=HLXcya2D9qzySsmZ",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/Among%20Us/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/Among%20Us/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/Among%20Us/captura.png?raw=true",
        "size": "Varies",
        "price": 4.99
    },
    {
        "title": "Rocket League",
        "id": 21,
        "platform": "Epic",
        "description": "Vehicular Soccer and Action. Combine soccer with rocket-powered cars in Rocket League. Developed by Psyonix, this unique sports game offers fast-paced multiplayer action and a variety of game modes, including competitive and casual play.",
        "genre": "Sports",
        "releaseDate": "2015-07-07",
        "developer": "Psyonix",
        "publishedby": "Psyonix",
        "video": "https://www.youtube.com/embed/CgAx5YpU6Ko?si=Pm4mJOrOvlwoNZzh",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/Rocket%20League/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/Rocket%20League/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/Rocket%20League/captura.png?raw=true",
        "size": "20GB",
        "price": 19.99
    },
    {
        "title": "Stardew Valley",
        "id": 22,
        "platform": "Steam",
        "description": "Farming Simulation and RPG. Escape to the countryside in Stardew Valley. Developed by ConcernedApe, this charming farming simulator lets players cultivate their farm, build relationships, and explore a delightful pixelated world.",
        "genre": "Simulation",
        "releaseDate": "2016-02-26",
        "developer": "ConcernedApe",
        "publishedby": "ConcernedApe",
        "video": "https://www.youtube.com/embed/8A7A1X1TVNc?si=iSKtLH_-yxjZrggx",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/Stardew%20Valley/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/Stardew%20Valley/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/Stardew%20Valley/captura.png?raw=true",
        "size": "500MB",
        "price": 14.99
    },
    {
        "title": "Overwatch 2",
        "id": 23,
        "platform": "Blizzard",
        "description": "Team-based Multiplayer FPS. Join the fight for the future in Overwatch. Developed by Blizzard Entertainment, this team-based shooter features a diverse cast of heroes, each with unique abilities, in intense and objective-based battles.",
        "genre": "FPS",
        "releaseDate": "2016-05-24",
        "developer": "Blizzard Entertainment",
        "publishedby": "Blizzard Entertainment",
        "video": "https://www.youtube.com/embed/PSucU14Iogw?si=maTr-9vi3Il7qqPF",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/Overwatch%202/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/Overwatch%202/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/Overwatch%202/captura.png?raw=true",
        "size": "30GB",
        "price": 19.99
    },
    {
        "title": "NieR: Automata",
        "id": 24,
        "platform": "Steam",
        "description": "Action RPG in a Dystopian Future. Explore a post-apocalyptic world as 2B, an android warrior, in NieR: Automata. Developed by PlatinumGames, this action RPG offers a compelling narrative, fast-paced combat, and an atmospheric dystopian setting.",
        "genre": "RPG",
        "releaseDate": "2017-03-17",
        "developer": "PlatinumGames",
        "publishedby": "Square Enix",
        "video": "https://www.youtube.com/embed/wJxNhJ8fjFk?si=jp8XD-tF7q4d7RDH",
        "image": "https://github.com/zuoki/imagenesPF/blob/main/NieR%20Automata/caratula.png?raw=true",
        "wallpeaper": "https://github.com/zuoki/imagenesPF/blob/main/NieR%20Automata/wallpeaper.png?raw=true",
        "capture": "https://github.com/zuoki/imagenesPF/blob/main/NieR%20Automata/captura.png?raw=true",
        "size": "50GB",
        "price": 39.99
    }

]

