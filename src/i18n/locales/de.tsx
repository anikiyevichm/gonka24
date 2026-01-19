import React from "react";
import { AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";

export const de = {
  header: {
    nav: {
      about: "Über GONKA",
      pricing: "Preise",
      faq: "FAQ",
    },
    safecompute_nav: {
      about: "Über uns",
      problem: "Lösung",
      pricing: "Preise",
      how_it_works: "Wie es funktioniert",
      economics: "Ökonomie",
      faq: "FAQ",
    },
    cta: "Verbinden",
  },
  hero: {
    tag: "GONKA Mainnet ist bereits live",
    title: "NVIDIA H200 für Gonka mieten",
    title_accent: "30% günstiger als Cloud-Preise",
    description: "Gonka-optimierte GPUs senken die Mining-Kosten auf 1 $ pro GNK. Wir bieten eine schlüsselfertige Lösung: Einrichtung, Start und 24/7-Support.",
    cta: "Mining starten",
    features: {
      ready: "Schlüsselfertige Lösung",
      ready_desc: "Node mit Mainnet verbunden",
      passive: "Passives Einkommen",
      passive_desc: "Belohnungen in GNK-Token",
      warranty: "Garantie",
      warranty_desc: "Ausfallentschädigung",
    },
  },
  about: {
    title: "Was ist",
    title_accent: "GONKA",
    title_suffix: "und warum ist es wichtig?",
    description: "GONKA ist ein dezentrales Protokoll für KI-Berechnungen, erstellt von den Liberman-Brüdern. Im Gegensatz zum klassischen Mining, das einfach Strom verbraucht, leistet das GONKA-Netzwerk nützliche Arbeit.",
    cards: {
      useful: {
        title: "Nützliche Berechnungen",
        desc: "Bietet Leistung für Künstliche Intelligenz (Inferenz) und Modelltraining.",
      },
      protocol: {
        title: "Einzigartiges Protokoll",
        desc: "Transformer-Based Proof-of-Work: 99% der Leistung fließen in reale KI-Aufgaben und nur 1% in die Netzwerksicherheit.",
      },
    },
    why: {
      title: "Warum jetzt?",
      list: [
        "Mainnet erst vor wenigen Monaten gestartet. Die Schwierigkeit wächst exponentiell.",
        "Akuter Mangel an H100/A100-Chips weltweit. GONKA ermöglicht die Monetarisierung dieses Defizits.",
        "Eine Chance, mit Technologiegiganten (Google, OpenAI) in der KI-Infrastruktur zu konkurrieren.",
      ],
    },
  },
  pricing: {
    title: "Preise und Bedingungen",
    subtitle: "KI-Cluster basierend auf 8× NVIDIA H200 GPUs bereit zum Mining",
    note: "Je länger die Miete, desto niedriger der stündliche Preis",
    plans: {
      short: {
        name: "Bis zu 1 Monat",
        price: "$8",
        period: "/ Stunde",
        features: ["Node-Gewicht: 2000+", "Uptime-Garantie", "24/7 Support"],
        cta: "Auswählen",
      },
      medium: {
        tag: "BELIEBT",
        name: "Bis zu 2 Monate",
        price: "$6",
        period: "/ Stunde",
        features: ["Node-Gewicht: 2000+", "Maximaler Nutzen", "Priorisierter Support"],
        cta: "Node mieten",
      },
      long: {
        name: "3 Monate und mehr",
        price: "$5",
        period: "/ Stunde",
        features: ["Node-Gewicht: 2000+", "Langfristiger Vertrag", "Persönlicher Manager"],
        cta: "Auswählen",
      },
    },
  },
  infrastructure: {
    title: "Infrastruktur",
    title_accent: "Industriestandard",
    subtitle: "Warum das Mieten eines Nodes bei uns rentabler ist als der Bau einer eigenen Farm.",
    cards: {
      metal: {
        title: "Bare Metal Effizienz",
        desc: "Wir bieten direkten Zugriff auf Hardware ohne Virtualisierungsschichten. Ihr Node nutzt 100% der GPU-Ressourcen. Heim- und Cloud-Lösungen (AWS, Azure) verlieren 15-20% Leistung durch Hypervisor-Overhead.",
        highlight: "direkter Zugriff auf Hardware",
        tag: "Maximale Hashrate ohne Verluste"
      },
      scale: {
        title: "Skaleneffekte",
        desc: "Profit wird durch Volumen erzielt. Wir kaufen Ausrüstung und Strom zu industriellen Großhandelspreisen. Solche Preise sind für einen einzelnen Miner nicht verfügbar.",
        highlight: "industrielle Großhandelspreise",
        tag: "Kostenreduzierung bis zu 40%"
      }
    }
  },
  videos: {
    title: "Videos und",
    title_accent: "Interviews",
    items: [
      {
        title: "\"Open AI ist eine Blase!\" Enthüllungen aus dem Silicon Valley",
        quote: "«Wir schaffen kein neues Gold (wie Bitcoin), wir schaffen Treibstoff für die KI-Zukunft. Der Markt für KI-Berechnungen wird auf Dutzende Billionen Dollar geschätzt.»"
      },
      {
        title: "David Liberman über dezentrale KI (Bitcoin.com)",
        quote: "«Zentralisierte Akteure schreiben GPUs über 6 Jahre ab, während in Krypto Innovationen die Hardware jedes Jahr aktualisieren. Dezentralisierung gewinnt immer bei Geschwindigkeit (und Kosten).»"
      },
      {
        title: "Bitfury investiert insgesamt 50 Mio. $ in das Gonka KI-Projekt der Liberman-Brüder",
        quote: "«GPU-Besitzer können diese über das Gonka-Protokoll an jeden vermieten, der Rechenleistung für KI-Projekte benötigt.»"
      },
      {
        title: "Wem gehört die Zukunft der Berechnungen? Das Streben, KI für alle offen zu machen",
        quote: "«Wenn KI die neue Elektrizität ist, sind Berechnungen das Netz, das sie antreibt. Wer die Chips kontrolliert, wird die Innovation des nächsten Jahrzehnts kontrollieren.»"
      }
    ],
    read_article: "Artikel lesen"
  },
  faq: {
    title: "FAQ",
    subtitle: "Häufig gestellte Fragen",
    items: [
      {
        q: "Was ist GONKA24.com?",
        a: "Es ist ein Service zur Miete von fertigen GPU-Nodes für die Teilnahme am Gonka-Netzwerk, der die Einrichtung und Belohnungen aus Mining und Berechnungen vereinfacht."
      },
      {
        q: "Was ist ein “Gonka-Node” und warum wird er benötigt?",
        a: "Ein Node ist ein Server mit einem Grafikprozessor (GPU), der für die Arbeit im Gonka-Netzwerk konfiguriert ist. Er nimmt an verteilten Berechnungen teil und erhält Belohnungen für den Beitrag zum Netzwerk."
      },
      {
        q: "Wie werden Belohnungen berechnet?",
        a: "Wir konfigurieren den Node auf Ihre Cold Wallet und garantieren Belohnungen. Wenn Ihr Node keine Belohnung für eine Epoche erhält, erstatten wir das Geld. Wenn das Node-Gewicht unter 2000 liegt, wird der Preis proportional angepasst."
      },
      {
        q: "Welche Zahlungsmethoden werden akzeptiert?",
        a: "Sie können die Miete bezahlen per: BTC (Bitcoin), USDT, USD/EUR."
      },
      {
        q: "Wie funktioniert die Einrichtung und der Start des Nodes?",
        a: "Nach der Zahlung konfigurieren wir den Server vollständig für Ihre Wallet und stellen seinen Betrieb sicher. Sie benötigen keine technischen Kenntnisse – alles wird für Sie erledigt."
      },
      {
        q: "Wie lange dauert es, einen Node zu starten?",
        a: "Nach Bestätigung der Zahlung erfolgt die Einrichtung in der Regel schnell – wir werden uns mit Ihnen in Verbindung setzen, um Details zur Wallet zu klären."
      }
    ]
  },
  resources: {
    title: "Nützliche Ressourcen",
    subtitle: "Erfahren Sie mehr über das Gonka Network und dezentrale Berechnungen",
    items: {
      whitepaper: { title: "Whitepaper", desc: "Technische Dokumentation des Gonka Network Protokolls", action: "Lesen" },
      tokenomics: { title: "GNK Tokenomics", desc: "Wirtschaftsmodell und Token-Verteilung", action: "Lesen" },
      twitter: { title: "X (Twitter)", desc: "Folgen Sie Gonka Nachrichten und Updates", action: "Öffnen" },
      discord: { title: "Discord Community", desc: "Treten Sie der globalen Gemeinschaft von Enthusiasten bei", action: "Beitreten" }
    }
  },
  cta_section: {
    how_it_works: {
      title: "Wie es funktioniert",
      steps: [
        { title: "Sie hinterlassen eine Anfrage", desc: "Füllen Sie ein einfaches Formular aus" },
        { title: "Wir richten den Node ein", desc: "Auf Ihre Wallet" },
        { title: "Sie erhalten Belohnungen", desc: "In GNK-Token" }
      ]
    },
    title: "Beteiligen Sie sich am Aufbau",
    title_accent: "der dex KI-Infrastruktur der nächsten Generation",
    subtitle: "Offen. Skalierbar. Unabhängig.",
    button: "Mining starten"
  },
  footer: {
    rights: "© 2026 GONKA Mining. Alle Rechte vorbehalten.",
    payment: "Zahlung: 1 Monat Vorauszahlung. Details werden bereitgestellt.",
    contact_text: "Wenn Sie Fragen haben — schreiben Sie an",
    contact_link_text: "unseren Manager",
    manager_link: "https://t.me/lina_semash",
    community_text: "Treten Sie unserer",
    community_link_text: "Telegram-Chatgruppe bei",
    community_link: "https://t.me/+40Xsw5RML45mOGEx"
  },
  safecompute: {
    hero: {
      tag: "GONKA Mainnet ist bereits live",
      title: "GNK minen ab 250 $",
      title_accent: "schlüsselfertig",
      description: "Werden Sie Teil der dezentralen KI-Revolution. Wir kümmern uns um Hardware-Einrichtung und Server – Sie erhalten geschürfte GNK-Münzen.",
      cta: "Mining starten",
      features: {
        ready: "Top GPUs",
        ready_desc: "H100/H200 Mining",
        passive: "Schlüsselfertig",
        passive_desc: "Wir managen die Technik",
        warranty: "Wirtschaftlichkeit",
        warranty_desc: "Mining zu optimalen Marktpreisen",
      },
    },
    about_custom: {
      title: "Was ist",
      title_accent: "Gonka Network?",
      description: "Gonka ist ein dezentrales Netzwerk für KI-Berechnungen. Im Gegensatz zu Standard-Kryptowährungen bietet Mining hier einen echten Nutzen: Training neuronaler Netze und Inferenz.",
      facts: [
        {
          title: "Gigantische Investitionen",
          desc: "Bitfury (Bitcoin-Mining-Legende) investierte über 50 Mio. $, zusammen mit Fonds, die OpenAI und Solana unterstützten."
        },
        {
          title: "Gründer",
          desc: "Die Liberman-Brüder (Ex-Snapchat-Direktoren), Schöpfer von \"Einhörnern\"."
        },
        {
          title: "Technologie",
          desc: "Proof-of-Work der nächsten Generation. Die Netzwerkleistung entspricht bereits Tausenden von H100-GPUs."
        },
        {
          title: "Knappheit",
          desc: "Gesamtangebot von 1 Milliarde Token, Bitcoin-ähnliches Halving-Modell (Belohnungen sinken)."
        }
      ]
    },
    problem_solution: {
      title: "Das Problem vs ",
      title_accent: "Unsere Lösung",
      problem: {
        title: "Selbst minen",
        items: [
          "Erfordert leistungsstarke GPUs (H100/H200) im Wert von 2.000 $ - 30.000 $.",
          "Komplexe Einrichtung: Linux, Docker, Schlüsselverwaltung.",
          "Risiko von Ausfallzeiten und Strafen (Slashing).",
        ]
      },
      solution: {
        title: "Mining mit uns",
        items: [
          "Erschwinglicher Einstieg: Starten Sie ab nur 250 $. Wir bündeln Kapital für Leistung.",
          "Keine Technik nötig: Wir verwalten Nodes, aktualisieren Software und überwachen 24/7.",
          "Uptime-Garantie: Professionelle Administration.",
        ]
      }
    },
    pricing: {
      title: "Flexible Bedingungen für Investoren",
      subtitle: "Je höher die Einzahlung, desto besser die Konditionen",
      note: "Die Managementgebühr sinkt mit dem Volumen",
      plans: {
        short: {
          name: "Compute Basic",
          price: "$250",
          period: "Min. Einstieg",
          features: ["Managementgebühr: 30%", "Ideal zum Testen von Hypothesen", "Einführung in das Projekt"],
          cta: "Plan wählen",
        },
        medium: {
          tag: "EMPFOHLEN",
          name: "Compute +",
          price: "$500",
          period: "Min. Einstieg",
          features: ["Managementgebühr: 20%", "10% Vorteil", "Optimale Wahl"],
          cta: "Plan wählen",
        },
        long: {
          name: "Compute Premium Pool",
          price: "ab $10.000+",
          period: "/ Monat",
          features: [
            "∞ NVIDIA H200 (skalierbar nach Bedarf)",
            "Stundenpreis: individuell berechnet",
            "Managementgebühr: 5%",
            "Direkte Wallet-Einrichtung"
          ],
          cta: "Kontaktieren Sie uns",
        },
      },
    },
    how_it_works: {
      title: "Wie es funktioniert",
      subtitle: "Technischer Teil in einfachen Worten",
      steps: [
        { title: "Einzahlung", desc: "Sie zahlen USDT/USDC (TRC20)." },
        { title: "Start", desc: "Wir weisen Mittel zu, um GPU-Anteile in Clustern zu kaufen/mieten." },
        { title: "Epochen", desc: "Hardware führt Inferenzaufgaben aus und verdient Belohnungen." },
        { title: "Verteilung", desc: "Belohnungen abzüglich Gebühr werden monatlich Ihrer Wallet gutgeschrieben (180 Tage Vesting)." }
      ]
    },
    fomo: {
      title: "Bitcoin für die KI-Ära",
      subtitle: "Gerade erst am Anfang",
      text: "Netzwerkstart im August 2025. Wir befinden uns in der frühen 'Grace Period', in der die Belohnungen maximal sind.",
      grace_period: "Grace Period",
      today: "Heute",
      disclaimer: "* Die Grafik ist eine visuelle Darstellung der Änderung der individuellen Mining-Belohnungen im Laufe der Zeit.",
      chart: {
        start: "Start (2025)",
        halving1: "Halving 1 (Aug 2029)",
        halving2: "Halving 2 (Aug 2033)",
        daily_reward_potential: "Tägliches Belohnungspotenzial",
        daily_reward: "Tägliche Belohnung",
        reward: "Belohnung",
        month: "Monat"
      },
      epochs: {
        now: {
          title: "Jetzt (2025–2029)",
          text: "Das Netzwerk weist <span class=\"text-primary font-mono\">~323.000 GNK</span> pro Tag an alle Miner zu."
        },
        halving1: {
          title: "Nach 1. Halving (Aug 2029)",
          text: "Zuteilung sinkt auf <span class=\"text-primary font-mono\">~161.500 GNK</span> pro Tag."
        },
        halving2: {
          title: "Nach 2. Halving (Aug 2033)",
          text: "Zuteilung sinkt auf <span class=\"text-primary font-mono\">~80.750 GNK</span> pro Tag."
        }
      }
    },
    tokenomics_section: {
      title: "Transparente Tokenomics",
      description: "Mining basiert auf der öffentlichen Tokenomics des Projekts.\nAlle Regeln für Emission, Verteilung und Verwendung von Münzen sind fest und offen.",
      link_text: "Projekt-Tokenomics lesen",
      link_url: "https://gonka.ai/tokenomics.pdf"
    },
    faq: {
      title: "FAQ",
      subtitle: "Häufig gestellte Fragen",
      items: [
        {
          q: "Welche Garantien bieten Sie?",
          a: (
            <div className="space-y-3">
              <p>Wir bieten einen öffentlichen Blockchain-Link, über den Sie Guthaben und angesammelte GNK jederzeit verfolgen können:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>das Guthaben,</li>
                <li>die gutgeschriebenen GNK,</li>
              </ul>
              <p>Alle Operationen sind transparent und auf der Blockchain überprüfbar.</p>
            </div>
          )
        },
        {
          q: "Was ist die Management Fee?",
          a: (
            <div className="space-y-3">
              <p>Die Management Fee ist eine Provision für die Infrastrukturverwaltung, die wir zusätzlich zu Ihrem eingezahlten Betrag einbehalten.</p>
              <p>Die Gebühr beinhaltet:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Node-Administration,</li>
                <li>Uptime-Überwachung,</li>
                <li>Node-Unjail bei Blockierungen,</li>
                <li>Claimen von Belohnungen,</li>
                <li>Technischer Support.</li>
              </ul>
            </div>
          )
        },
        {
          q: "Kann ich Geld nach der Zuweisung zu Rechenleistung abheben?",
          a: (
            <div className="space-y-3">
              <p className="font-bold text-red-400">Nein.</p>
              <p>Wenn Mittel bereits für Rechenleistung zugewiesen wurden, sind Rückerstattungen bis zum Ende des Mining-Zeitraums nicht möglich.</p>
              <p>Dies liegt daran, dass Hardware für einen bestimmten Fall gemietet und fixiert wird.</p>
            </div>
          )
        },
        {
          q: "Wann wird der Zahlungsstatus aktualisiert?",
          a: (
            <div className="space-y-3">
              <p>Der Zahlungsstatus wird automatisch innerhalb von 1–2 Stunden nach der Blockchain-Bestätigung aktualisiert.</p>
              <p>Wenn mehr als 2 Stunden vergangen sind und der Status nicht aktualisiert wurde – schreiben Sie an unseren Support auf Telegram.</p>
            </div>
          )
        },
        {
          q: "Was ist Vesting und warum wird es benötigt?",
          a: (
            <div className="space-y-3">
              <p>Vesting ist ein Mechanismus zur schrittweisen Freigabe verdienter Token, der im Gonka Network verwendet wird für:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>wirtschaftliche Stabilität,</li>
                <li>Schutz vor Spekulation,</li>
                <li>Verhinderung plötzlicher Verkäufe.</li>
              </ul>
            </div>
          )
        },
        {
          q: "Wie funktioniert Vesting?",
          a: (
            <div className="space-y-3">
              <p>Jeden Tag wird 1/180 des am Vortag verdienten Betrags freigeschaltet.</p>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <p className="font-semibold mb-2 text-primary">Beispiel:</p>
                <ul className="space-y-2 text-sm">
                  <li>Heute hat der Pool <span className="text-foreground font-semibold">180 GNK</span> verdient</li>
                  <li>Morgen wird <span className="text-foreground font-semibold">1 GNK</span> freigeschaltet</li>
                  <li>Übermorgen — ein weiterer <span className="text-foreground font-semibold">1 GNK</span></li>
                </ul>
                <p className="mt-3 text-sm italic opacity-80">
                  Wenn der Pool morgen wieder 180 GNK verdient, werden übermorgen bereits 2 GNK freigeschaltet
                  (1 GNK für den ersten Tag + 1 GNK für den zweiten)
                </p>
              </div>
            </div>
          )
        },
        {
          q: "Wie hebe ich Token ab?",
          a: (
            <div className="space-y-3">
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>Sie senden eine Auszahlungsanfrage in unserem Telegram</li>
                <li>Wir überweisen Münzen an die in der Anfrage angegebene Wallet</li>
                <li>Die Überweisung wird innerhalb von 24 Stunden nach Erhalt der Anfrage ausgeführt</li>
              </ol>
            </div>
          )
        },
        {
          q: "Wie erstelle ich eine Gonka Network Wallet?",
          a: (
            <div className="space-y-4">
              <p>Wir empfehlen die Verwendung der <span className="text-foreground font-semibold">Keplr Wallet</span> mit Google-Autorisierung.</p>

              <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-red-400">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-bold">Wichtig:</span>
                </div>
                <ul className="space-y-1 text-sm text-red-600/80">
                  <li>Geben Sie Ihren privaten Schlüssel niemals an Dritte weiter</li>
                  <li>Bewahren Sie Ihren privaten Schlüssel an einem sicheren Ort auf</li>
                  <li>Wenn Sie den Zugriff auf Gmail verlieren — ist eine Wiederherstellung nur über den privaten Schlüssel möglich</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          q: "Schritt-für-Schritt-Anleitung zur Erstellung einer Keplr-Wallet",
          a: (
            <div className="space-y-4">
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>Gehen Sie auf die offizielle Keplr-Website und klicken Sie auf \"Get Keplr Wallet\"</li>
                <li>Wählen Sie die Erweiterung für Ihren Browser (Chrome, Firefox, Edge, Brave)</li>
                <li>Installieren Sie die Erweiterung</li>
                <li>Klicken Sie auf \"Create a new wallet\" (Neue Wallet erstellen)</li>
                <li>Wählen Sie \"Connect with Google\" (Mit Google verbinden)</li>
              </ol>

              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-yellow-500">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-bold">Wichtig:</span>
                </div>
                <p className="text-sm text-yellow-700/80 mb-2">Wählen Sie nicht die Option mit der Mnemonic Phrase.</p>
                <p className="text-sm text-yellow-700/80">
                  Ohne Google-Autorisierung können Sie keine Transaktionen über die Bridge durchführen — die Plattform erfordert Google-Autorisierung.
                </p>
              </div>

              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Schließen Sie die Wallet-Einrichtung ab</li>
                <li>Speichern Sie Ihren privaten Schlüssel</li>
                <li>Wählen Sie die Netzwerke Cosmos Hub und Gonka</li>
              </ul>
            </div>
          )
        },
        {
          q: "Wie verbinde ich mich mit dem dezentralen Gonka Dashboard?",
          a: (
            <div className="space-y-4">
              <p>Wählen Sie einen beliebigen Node aus der Liste (alle sind gleichwertig):</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm font-mono text-primary">
                {[
                  "http://185.216.21.98:8000",
                  "http://69.19.136.233:8000",
                  "http://36.189.234.197:18026",
                  "http://36.189.234.237:17241",
                  "http://node1.gonka.ai:8000",
                  "http://node2.gonka.ai:8000",
                  "http://node3.gonka.ai:8000",
                  "http://47.236.26.199:8000",
                  "http://47.236.19.22:18000",
                  "http://gonka.spv.re:8000"
                ].map((url) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-2 rounded bg-muted/50 hover:bg-muted transition-colors flex items-center justify-between group"
                  >
                    <span className="truncate">{url}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">Tipp: Sie können einen beliebigen wählen — alle bieten Zugang zum Gonka-Netzwerk.</p>
            </div>
          )
        },
        {
          q: "Wie verbinde ich meine Wallet mit dem Dashboard?",
          a: (
            <div className="space-y-3">
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>Öffnen Sie das Dashboard unter der gewählten URL</li>
                <li>Klicken Sie auf \"Connect Wallet\" (oben rechts)</li>
                <li>Wählen Sie Keplr</li>
                <li>Bestätigen Sie das Hinzufügen des Gonka-Netzwerks</li>
                <li className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-4 h-4" /> Fertig
                </li>
              </ol>
              <p className="text-muted-foreground">Jetzt können Sie Ihre Wallet-Adresse kopieren — das ist Ihre GNK-Adresse zum Empfang von Belohnungen.</p>
            </div>
          )
        }
      ]
    },
    final_cta: {
      title: "Starten Sie heute mit Mining",
      subtitle: "Transparente Bedingungen. Flexible Pläne.",
      text: "Verdienen Sie GNK-Münzen ohne komplexe Einrichtung.",
      button: "Mining starten"
    }
  },
  calculator: {
    title: "GNK Renditerechner",
    subtitle: "Wählen Sie einen Pool und geben Sie den Investitionsbetrag ein",
    pools: {
      light: {
        name: "Compute Light",
        badge: "Startgewicht 300"
      },
      pro: {
        name: "Compute Pro",
        badge: "Startgewicht 1500",
        discount_badge: "-10%"
      },
      premium: {
        name: "Compute Premium",
        badge: "Gewicht ∞",
        discount_badge: "-15%"
      }
    },
    info: {
      min_deposit: "Min. Einzahlung:",
      max_deposit: "Max. Einzahlung:",
      node_weight: "Ihr Gewicht:",
      management_fee: "Managementgebühr:",
      yield_per_day: "GNK/Tag"
    },
    input: {
      label: "Monatlicher Investitionsbetrag ($)",
      placeholder: "Betrag eingeben",
      error: {
        min: "Der Mindestbetrag für {name} beträgt {min}",
        max: "Der Höchstbetrag für {name} beträgt {max}"
      }
    },
    results: {
      daily: "GNK pro Tag",
      monthly: "GNK pro Monat",
      tooltip: "Dies sind ungefähre Zahlen. Die Werte unterscheiden sich je nach Netzwerk-Hosts erheblich.",
      disclaimer: "Berechnungen sind Schätzungen. Basiert auf Netzwerkgewicht {weight} und Belohnung {reward} GNK am {date}."
    }
  }
};
