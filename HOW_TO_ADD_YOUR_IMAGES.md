# 📸 How to Add Your Real Images & Photos to the Website

You can easily replace any photo on your website with your team's real workshop, car, and race day photos.

---

## 🏎️ Option A: Replace General Website Images (Zero Code Required)

Simply copy your real photo files into the `e:\BAJA WEBSITE\assets\` folder using these exact names:

| Image on Website | Replace This File in `assets/` | Recommended Size / Aspect Ratio |
| :--- | :--- | :--- |
| **Main Buggy / Hero Car** | `assets/hero_buggy.jpg` | Landscape (16:9 or 4:3), High Res |
| **CAD / Blueprint / FEA** | `assets/cad_wireframe.jpg` | Landscape (16:9), CAD screenshot |
| **Race Day / Track Action** | `assets/race_action.jpg` | Landscape (16:9), Dirt track run |
| **Workshop / Fabrication** | `assets/workshop_weld.jpg` | Landscape (16:9), Welding / shop shot |
| **Official Team Logo** | `assets/team_logo.png` | Square PNG (500x500 or higher) |

---

## 🏁 Option B: Add Real Photos for BB-01 to BB-19 Evolution Timeline

We created a dedicated `assets/cars/` folder for your 19 vehicle generations!

Simply save your photos into `e:\BAJA WEBSITE\assets\cars\` with the matching car name:

| Buggy Code | Season | Save Photo Here in `assets/cars/` |
| :--- | :--- | :--- |
| **BB-19** | 2025 - 2026 | `assets/cars/bb19.jpg` |
| **BB-18** | 2024 - 2025 | `assets/cars/bb18.jpg` |
| **BB-17** | 2023 - 2024 | `assets/cars/bb17.jpg` |
| **BB-16** | 2022 - 2023 | `assets/cars/bb16.jpg` |
| **BB-15** | 2021 - 2022 | `assets/cars/bb15.jpg` |
| **BB-14** | 2020 - 2021 | `assets/cars/bb14.jpg` |
| **BB-13** | 2019 - 2020 | `assets/cars/bb13.jpg` |
| **BB-12** | 2018 - 2019 | `assets/cars/bb12.jpg` |
| **BB-11** | 2017 - 2018 | `assets/cars/bb11.jpg` |
| **BB-10** | 2016 - 2017 | `assets/cars/bb10.jpg` |
| **BB-09** | 2015 - 2016 | `assets/cars/bb09.jpg` |
| **BB-08** | 2014 - 2015 | `assets/cars/bb08.jpg` |
| **BB-07** | 2013 - 2014 | `assets/cars/bb07.jpg` |
| **BB-06** | 2012 - 2013 | `assets/cars/bb06.jpg` |
| **BB-05** | 2011 - 2012 | `assets/cars/bb05.jpg` |
| **BB-04** | 2010 - 2011 | `assets/cars/bb04.jpg` |
| **BB-03** | 2009 - 2010 | `assets/cars/bb03.jpg` |
| **BB-02** | 2008 - 2009 | `assets/cars/bb02.jpg` |
| **BB-01** | 2007 - 2008 | `assets/cars/bb01.jpg` |

> 💡 **Automatic Fallback Protection:** If you haven't uploaded an image for a specific car yet (e.g., `bb09.jpg`), the website will automatically display a clean fallback high-res workshop/CAD render so there are **never any broken image boxes**!

---

## 👥 Option C: Add Real Photos for Team Members

Open [js/data.js](file:///e:/BAJA%20WEBSITE/js/data.js) and look for `teamMembers`:

```javascript
{
  name: "Maniaatheessh",
  role: "Team Captain",
  dept: "leadership",
  discipline: "Automobile Engineering, PSG Tech",
  quote: "Leading Team Baja Bhais...",
  image: "assets/maniaatheessh.jpg"  // <-- Put your real photo in assets/ and update this filename
}
```

---

## 🏆 Option D: Add Real Photos to the Media Gallery

In [js/data.js](file:///e:/BAJA%20WEBSITE/js/data.js), look for `mediaGallery` and add as many real photos as you like:

```javascript
mediaGallery: [
  {
    title: "All-Terrain Buggy Flagship",
    category: "vehicle",
    image: "assets/real_buggy_shot1.jpg",
    tag: "BB-26 AWD PROTOTYPE"
  },
  {
    title: "Pit Stop & Scrutineering",
    category: "race",
    image: "assets/paddock_team.jpg",
    tag: "RACE DAY 2026"
  }
]
```

---

## 🤝 Current Sponsors Already Added:
* **Bull Machines Pvt Ltd** (`assets/sponsor_bull.png`)
* **Sree Tulsi TVS** (`assets/sponsor_tvstulsi.png`)
* **Salem Mines** (`assets/sponsor_salemmines.png`)
* **KK Constructions** (`assets/sponsor_kkc.png`)
