var footerText = "<a href='https://github.com/oliverl-21/buzzword-bingo' target='_blank'>Code available on github</a>";

var winText = "Winner";

var clickSnd = new Audio("audio/click.mp3");

var winSnd = new Audio("audio/win.mp3");

var JSONBingo = {"squares": [
        {"square": "ISO 27001"},
        {"square": "Compliance"},
        {"square": "Firewall"},
        {"square": "Site Reliability (Engineering)"},
        {"square": "0day"},
        {"square": "(XP )Extended Support"},
        {"square": "Hacker"},
        {"square": "Lifecycle"},
        {"square": "Cyberwar"},
        {"square": "outsourcen"},
        {"square": "Innentäter"},
        {"square": "Cloud"},
        {"square": "Enterprise"},
        {"square": "Consulting"},
        {"square": "hochverfügbar"},
        {"square": "Google"},
        {"square": "(Glas-)Faser"},
        {"square": "ISMS"},
        {"square": "Systemhaus"},
        {"square": "QoS"},
        {"square": "best practice"},
        {"square": "BSI"},
        {"square": "Windows-Server"},
        {"square": "Schutzziele"},
        {"square": "Zertifizierung"},
        {"square": "Daten verschlüsseln"},
        {"square": "Asset"},
        {"square": "(BSI) Grundschutz"},
        {"square": "Terrorismus"},
        {"square": "Botnet"},
        {"square": "DDoS"},
        {"square": "Risikomanagement"},
        {"square": "Anforderungsmanagement"},
        {"square": "Awareness"},
        {"square": "Policy"},
        {"square": "360°-Blick"},
        {"square": "zukunftsweisend"},
        {"square": "kundenorientiert"},
        {"square": "Microsoft Security Development Lifecycle"},
        {"square": "Backdoors"},
        {"square": "historisch gewachsen"},
        {"square": "Smart ____"},
        {"square": "EDR/XDR"},
        {"square": "DevOps/SecOps"},
        {"square": "MFA/2FA"},
        {"square": "Legacy ____"},
        {"square": "Backup"},
        {"square": "(Disaster) Recovery"},
        {"square": "AI/ML"}
    ]
};
