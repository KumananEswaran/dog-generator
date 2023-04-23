const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector('.breeds')

fetch(BREEDS_URL)
    .then(res => {
        return res.json();
    })
    .then(data => {
        const breedsObject = data.message; //Turn the message into an object
        const breedsArray = Object.keys(breedsObject) //Turn the object into an array
        for (let i=0; i < breedsArray.length; i++) {
            const option = document.createElement('option')//<option></option>
            option.value = breedsArray[i] //<option value = 'breed'>
            option.innerText = breedsArray[i] //<option value='breed'>breed</option>
            select.appendChild(option) //adds current <option> tag to the select box list of options
        }
           
    })

    select.addEventListener('change', event => {
        let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
        getDoggoImg(url)
        doggoInfo.assignMF()
        doggoInfo.assignAge()
    })

    const img = document.querySelector('.dog-img')

    const getDoggoImg = url => {
        fetch(url) //going to the API url above
            .then(res => {
                return res.json(); //get JSON message back
            })
            .then(data => {
                img.src = data.message //extract message from JSON and attach to img tag as new
            })
    }


    const doggoInfo = {
        fNames: ["Lucy",	"Daisy",	"Molly",	"Lola",	"Sophie",	"Sadie",	"Maggie",	"Chloe",	"Bailey",	"Roxy",	"Zoey",	"Lily",	"Luna",	"Coco",	"Stella",	"Gracie",	"Abby",	"Penny",	"Zoe",	"Ginger",	"Ruby",	"Rosie",	"Lilly",	"Ellie",	"Mia",	"Sasha",	"Lulu",	"Pepper",	"Nala",	"Lexi",	"Lady",	"Emma",	"Riley",	"Dixie",	"Annie",	"Maddie",	"Piper",	"Princess",	"Izzy",	"Maya",	"Olive",	"Cookie",	"Roxie",	"Angel",	"Belle",	"Layla",	"Missy",	"Cali",	"Honey",	"Millie",	"Harley",	"Marley",	"Holly",	"Kona",	"Shelby",	"Jasmine",	"Ella",	"Charlie",	"Minnie",	"Willow",	"Phoebe",	"Callie",	"Scout",	"Katie",	"Dakota",	"Sugar",	"Sandy",	"Josie",	"Macy",	"Trixie",	"Winnie",	"Peanut",	"Mimi",	"Hazel",	"Mocha",	"Cleo",	"Hannah",	"Athena",	"Lacey",	"Sassy",	"Lucky",	"Bonnie",	"Allie",	"Brandy",	"Sydney",	"Casey",	"Gigi",	"Baby",	"Madison",	"Heidi",	"Sally",	"Shadow",	"Cocoa",	"Pebbles",	"Misty",	"Nikki",	"Lexie",	"Grace",	"Sierra"
        ],
        mNames: ["Buddy",	"Charlie",	"Jack",	"Cooper",	"Rocky",	"Toby",	"Tucker",	"Jake",	"Bear",	"Duke",	"Teddy",	"Oliver",	"Riley",	"Bailey",	"Bentley",	"Milo",	"Buster",	"Cody",	"Dexter",	"Winston",	"Murphy",	"Leo",	"Lucky",	"Oscar",	"Louie",	"Zeus",	"Henry",	"Sam",	"Harley",	"Baxter",	"Gus",	"Sammy",	"Jackson",	"Bruno",	"Diesel",	"Jax",	"Gizmo",	"Bandit",	"Rusty",	"Marley",	"Jasper",	"Brody",	"Roscoe",	"Hank",	"Otis",	"Bo",	"Joey",	"Beau",	"Ollie",	"Tank",	"Shadow",	"Peanut",	"Hunter",	"Scout",	"Blue",	"Rocco",	"Simba",	"Tyson",	"Ziggy",	"Boomer",	"Romeo",	"Apollo",	"Ace",	"Luke",	"Rex",	"Finn",	"Chance",	"Rudy",	"Loki",	"Moose",	"George",	"Samson",	"Coco",	"Benny",	"Thor",	"Rufus",	"Prince",	"Chester",	"Brutus",	"Scooter",	"Chico",	"Spike",	"Gunner",	"Sparky",	"Mickey",	"Kobe",	"Chase",	"Oreo",	"Frankie",	"Mac",	"Benji",	"Bubba",	"Champ",	"Brady",	"Elvis",	"Copper",	"Cash",	"Archie",	"Walter"
        ],
        MF: '',
        rname: '',
        age: '',

        assignMF() {
            x = (Math.floor(Math.random() * 2) == 0)
            if(x) {
                this.MF = "Female";
                this.assignName(this.fNames)
            } else {
                this.MF = "Male";
                this.assignName(this.mNames)
            }
            document.getElementById("MF").innerHTML = `S: ${this.MF}`
        },

        assignName(array) {
            this.rname = array[Math.floor(Math.random()*array.length)]
            document.getElementById("dog-name").innerHTML = `${this.rname}`
        },

        assignAge() {
            this.age = Math.floor(Math.random() * 16 + 1)
            document.getElementById("age").innerHTML = `Age: ${this.age}`
        }
    }